import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from "@google/generative-ai";
// 🌟 Sử dụng đường dẫn tuyệt đối với @ để tránh lỗi nhận diện file của TypeScript
import Prisma from "@/lib/prisma"; 

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenerativeAI(apiKey) : null;
    
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!ai) {
    return res.status(500).json({ error: 'Chưa cấu hình GEMINI_API_KEY' });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Tin nhắn không được để trống' });
    }

    // 🌟 1. LẤY MENU THỰC TẾ TỪ DATABASE SUPABASE
    // (Bạn nhớ kiểm tra xem trong schema.prisma tên bảng là 'menu' hay 'food' để sửa lại nhé)
    const dbMenu = await Prisma.menu.findMany({
      where: { isAvailable: true }, 
      select: { name: true, price: true, description: true }
    });

    // 🌟 2. LẤY LỊCH ĐẶT BÀN ĐỂ KIỂM TRA BÀN TRỐNG
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Lấy tất cả booking (lọc theo ngày có thể thay đổi tùy schema của Prisma)
    const dbBookings = await Prisma.booking.findMany({
      select: { id: true, dateTime: true, guestCount: true }
    });

    // 🌟 3. CHUYỂN DỮ LIỆU ĐÃ LẤY THÀNH DẠNG CHỮ ĐỂ AI ĐỌC
    const menuString = dbMenu.map(m => `- ${m.name}: ${m.price}đ (${m.description})`).join("\n");
    const bookingString = dbBookings.map(b => `- Khung giờ ${b.dateTime}: đã có khách đặt (đơn đi ${b.guestCount} người)`).join("\n");

    // 🌟 4. THIẾT LẬP THÔNG TIN CỐ ĐỊNH (ĐỊA ĐIỂM, GIỚI THIỆU)
    const infoGioiThieu = `
    - Tên nhà hàng: Ao sen chú Sang.
    - Phong cách: Ẩm thực chính thống Việt Nam với hương vị vùng miền kích thích vị giác, kết hợp không gian chòi lá trên sông nước tinh tế, mộc mạc và thoáng mát.
    - Địa điểm/Địa chỉ: Số 123 Đường Bờ Tây Sông, Phường Quyết Thắng, Thành phố Biên Hòa, Đồng Nai (Gần khu du lịch sinh thái).
    - Giờ mở cửa: Từ 8:00 sáng đến 10:00 tối tất cả các ngày trong tuần (kể cả ngày lễ).
    - Hotline hỗ trợ: 0123.456.789.
    - Cách thức đặt bàn: Hướng dẫn khách bấm vào mục "Đặt chỗ" (Booking) trực tiếp trên thanh điều hướng (Header) của trang web để chọn sảnh, ngày giờ và số lượng người.
    `;

    // 🌟 5. GỬI TỔNG HỢP DỮ LIỆU CHO GEMINI (SỬ DỤNG BẢN 2.5-FLASH CHO ỔN ĐỊNH)
    const model = ai.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      systemInstruction: `Bạn là trợ lý AI thông minh, niềm nở và chuyên nghiệp của nhà hàng Ao sen chú Sang.
      Nhiệm vụ của bạn là tư vấn cho khách hàng dựa trên thông tin chính xác được cung cấp dưới đây:

      [THÔNG TIN GIỚI THIỆU VÀ ĐỊA ĐIỂM]:
      ${infoGioiThieu}

      [THỰC ĐƠN HIỆN TẠI (DỮ LIỆU THẬT TỪ DATABASE)]:
      ${menuString || "- Hiện tại hệ thống đang cập nhật danh sách món, vui lòng liên hệ hotline!"}

      [DANH SÁCH LỊCH ĐẶT BÀN HÔM NAY (DỮ LIỆU THẬT TỪ DATABASE)]:
      ${bookingString || "- Hiện tại hôm nay chưa có đơn đặt lịch nào, tất cả các khung giờ và vị trí chòi đều đang trống."}

      Yêu cầu phản hồi:
      1. Nếu khách hỏi đường đi, địa chỉ hoặc không gian: Hãy dùng thông tin trong phần [THÔNG TIN GIỚI THIỆU VÀ ĐỊA ĐIỂM] để tả và hướng dẫn.
      2. Nếu khách hỏi về món ăn: Chỉ tư vấn các món có trong danh sách [THỰC ĐƠN HIỆN TẠI]. Nếu món khách đòi hỏi không có, hãy khéo léo nói "Dạ hiện tại nhà hàng em chưa phục vụ món này ạ, anh/chị thử tham khảo các món đặc sản như..."
      3. Nếu khách hỏi về tình trạng bàn trống: Dựa vào [DANH SÁCH LỊCH ĐẶT BÀN] để ước lượng và trả lời xem giờ đó có bị trùng lịch đông người hay không.
      4. Luôn trả lời bằng tiếng Việt lịch sự, ngắn gọn, chèn thêm icon vui vẻ (😄, 🥰, 🍲) để tăng tính thân thiện của nhân viên nhà hàng.`,
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return res.status(200).json({ text: responseText });
  } catch (error) {
    console.error("Lỗi hệ thống tích hợp AI:", error);
    return res.status(500).json({ error: "Hệ thống đang bận xử lý dữ liệu một chút, bạn thử lại sau nhé!" });
  }
}