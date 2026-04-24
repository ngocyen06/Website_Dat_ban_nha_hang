import { MenuCategory } from "@prisma/client";
import { hash } from "bcryptjs";

/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    console.log("清理中... (Cleaning up database)");
    
    // Xóa theo thứ tự để tránh lỗi ràng buộc (Foreign Key)
    // Xóa cái nào có khóa ngoại trước (Menu, Booking...) rồi mới xóa Category, Table
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.menu.deleteMany();
    await prisma.menuCategory.deleteMany();

    console.log("🌱 Seeding database...");
    console.log("🌱 Seeding database...");

    // Seed users
    await seedUsers();

    // Seed menu categories
    const categories = await seedMenuCategories();

    // Seed menus
    await seedMenus(categories);

    // Seed tables
    await seedTables();

    console.log("✅ Seeding completed!");
}

async function seedUsers() {
    console.log('Seeding users...');
    
    // Create admin user
    const adminPassword = await hash('admin123', 10);
    await prisma.user.upsert({
      where: { email: 'admin@gmail.com' },
      update: {},
      create: {
        name: 'Bui Ngoc Yen',
        email: 'admin@gmail.com',
        password: adminPassword,
        phone: '0123456789',
        role: 'ADMIN',
      },
    });
  
    // Create staff user
    const staffPassword = await hash('staff123', 10);
    await prisma.user.upsert({
      where: { email: 'staff@gmail.com' },
      update: {},
      create: {
        name: 'Staff Ao sen chu Sang',
        email: 'staff@gmail.com',
        password: staffPassword,
        phone: '0123456789',
        role: 'STAFF',
      },
    });
  
    // Create customer user
    const customerPassword = await hash('customer123', 10);
    await prisma.user.upsert({
      where: { email: 'customer@example.com' },
      update: {},
      create: {
        name: 'Khách hàng trung thành',
        email: 'customer@example.com',
        password: customerPassword,
        phone: '081234567892',
        role: 'CUSTOMER',
      },
    });
  }

async function seedMenuCategories() {
    console.log("Seeding menu categories...");

    const categories = [
        { name: "Món chính" },
        { name: "Ẩm thực Ao sen" },
        { name: "Món đồng quê" },
        { name: "Đồ uống" },
        { name: "Tráng miệng" },
    ];

    const categoryPromises = categories.map(async (category) => {
        return prisma.menuCategory.upsert({
            where: { name: category.name },
            update: {},
            create: {
                name: category.name,
            },
        });
    });

    return Promise.all(categoryPromises);
}

async function seedMenus(categories: MenuCategory[]) {
    console.log("Seeding menus...");

    // Mapping category names to IDs for easier reference
    const categoryMap = categories.reduce((map, category) => {
        map[category.name] = category.id;
        return map;
    }, {} as Record<string, string>);

    // Khai vị

    // Món chính
    const mainCourses = [
        {
            name: "Cơm rang cá mặn",
            description:
                "Cơm rang với thịt cá mềm và gia vị chọn lọc",
            price: 65000,
            image: "Com_chien_ca_man.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
        {
            name: "Càng cua bách hoa",
            description: "Càng cua tươi bọc lớp chả tôm thịt “bách hoa” đậm vị, chiên vàng giòn bên ngoài, mềm ngọt bên trong.",
            price: 205000,
            image: "Cang_cua_bach_hoa.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
        {
            name: "Gà nướng Tây Bắc",
            description: "Gà Tây Bắc nướng với nước dùng vàng và bột cà ri",
            price: 45000,
            image: "Ga_nuong_Tay_Bac.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
        {
            name: "Lẩu hải sản bào ngư",
            description: "Nước lẩu đậm đà ngọt thanh từ hải sản tươi, kết hợp bào ngư giòn mềm",
            price: 60000,
            image: "Lau_hai_san_bao_ngu.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
        {
            name: "Tôm hùm cháy tỏi",
            description: "Tôm hùm tươi chiên cháy tỏi, gia vị chua cay hài hòa",
            price: 75000,
            image: "Tom_hum_chay_toi.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
        {
            name: "Gỏi cá mú",
            description: "Cá mú tươi thái lát mỏng, trộn cùng rau thơm, hành tây và gia vị chua cay hài hòa",
            price: 85000,
            image: "Goi_ca_mu.jpg",
            categoryId: categoryMap["Món chính"],
            isAvailable: true,
        },
    ];

    // Ẩm thực Nusantara
    const AmthucAoSen = [
        {
            name: "Tôm hấp dứa",
            description:
                "Tôm tươi hấp cùng dứa chín thơm, giữ trọn vị ngọt tự nhiên, hòa quyện vị chua nhẹ thanh mát",
            price: 70000,
            image: "Tom_hap_dua.jpg",
            categoryId: categoryMap["Ẩm thực Ao sen"],
            isAvailable: true,
        },
        {
            name: "Nem nướng",
            description:
                "Nem thịt heo xay tẩm ướp gia vị đậm đà, nướng vàng thơm trên than hồng",
            price: 55000,
            image: "Nem_Nuong.jpg",
            categoryId: categoryMap["Ẩm thực Ao sen"],
            isAvailable: true,
        },
        {
            name: "Tôm sống",
            description: "Tôm tươi bóc vỏ, giữ nguyên độ ngọt tự nhiên,mang đến hương vị tươi mát, đậm đà và kích thích vị giác",
            price: 50000,
            image: "Tom_song.jpg",
            categoryId: categoryMap["Ẩm thực Ao sen"],
            isAvailable: true,
        },
        {
            name: "Súp cua",
            description: "Súp cua tươi đậm đà ngọt thanh, kết hợp với rau thơm, hành tây và gia vị chua cay hài hòa",
            price: 60000,
            image: "Sup_cua.jpg",
            categoryId: categoryMap["Ẩm thực Ao sen"],
            isAvailable: true,
        },
        {
            name: "Mẹt chay",
            description: "Tổng hợp các món chay hấp dẫn như rau củ, đậu hũ và món giả mặn được chế biến đa dạng",
            price: 55000,
            image: "Met_chay.jpg",
            categoryId: categoryMap["Ẩm thực Ao sen"],
            isAvailable: true,
        },
    ];

    // Món Bali
    const Mondongque = [
        {
            name: "Thịt trâu gác bếp",
            description: "Thịt trâu tẩm ướp gia vị núi rừng, hun khói và sấy khô",
            price: 85000,
            image: "Thit_trau_gac_bep.jpg",
            categoryId: categoryMap["Món đồng quê"],
            isAvailable: true,
        },
        {
            name: "Ếch đồng rang muối",
            description:
                "Ếch đồng chiên giòn, rang cùng muối tỏi đậm đà, lớp ngoài vàng giòn",
            price: 60000,
            image: "Ech_dong_rang_muoi.jpg",
            categoryId: categoryMap["Món đồng quê"],
            isAvailable: true,
        },
        {
            name: "Cháo cá rau đắng",
            description:
                "Cháo nấu từ cá tươi ngọt thanh, kết hợp rau đắng đặc trưng tạo vị hơi đăng đắng nhẹ",
            price: 90000,
            image: "Chao_ca_rau_dang.jpg",
            categoryId: categoryMap["Món đồng quê"],
            isAvailable: true,
        },
        {
            name: "Châu chấu rang",
            description:
                "Châu chấu chiên giòn, tẩm gia vị đậm đà, có vị béo bùi, giòn rụm, thơm lừng",
            price: 65000,
            image: "Chau_chau_rang.jpg",
            categoryId: categoryMap["Món đồng quê"],
            isAvailable: true,
        },
    ];

    
    // Đồ uống
    const drinks = [
        {
            name: "Trà hoa nhiệt đới",
            description:
                "Sự kết hợp hài hòa giữa trà thơm và các loại hoa quả nhiệt đới",
            price: 25000,
            image: "tra_hoa_nhiet_doi.jpg",
            categoryId: categoryMap["Đồ uống"],
            isAvailable: true,
        },
        {
            name: "Trà tắc",
            description: "Đồ uống vị chua thanh hòa quyện chút ngọt dịu, hương thơm nhẹ",
            price: 20000,
            image: "tra_tac.jpg",
            categoryId: categoryMap["Đồ uống"],
            isAvailable: true,
        },
        {
            name: "Matcha lattete",
            description: "Toi iu matchalatteeee",
            price: 22000,
            image: "matcha_lattete.jpg",
            categoryId: categoryMap["Đồ uống"],
            isAvailable: true,
        },
        {
            name: "Coffee latte",
            description: "Cà phê kết hợp cùng sữa nóng béo mịn, vị đắng nhẹ hòa quyện với độ ngọt dịu",
            price: 18000,
            image: "coffee_latte.jpg",
            categoryId: categoryMap["Đồ uống"],
            isAvailable: true,
        },
       
    ];

    // Dessert
    const trangmieng = [
        {
            name: "Rau câu",
            description: "Món tráng miệng mát lạnh với kết cấu dai giòn nhẹ, vị ngọt thanh",
            price: 25000,
            image: "rau_cau.jpg",
            categoryId: categoryMap["Tráng miệng"],
            isAvailable: true,
        },
        {
            name: "Chè hạt sen",
            description:
                "Hạt sen nấu mềm bùi, mang hương vị dịu nhẹ, thanh mát",
            price: 25000,
            image: "Che_hat_sen.jpg",
            categoryId: categoryMap["Tráng miệng"],
            isAvailable: true,
        },
        {
            name: "Chè thái",
            description: "Món chè hấp dẫn với nước cốt dừa béo thơm, kết hợp trái cây tươi",
            price: 22000,
            image: "che_thai.jpg",
            categoryId: categoryMap["Tráng miệng"],
            isAvailable: true,
        },
        {
            name: "Chè sâm bổ lượng",
            description:
                "Vị ngọt nhẹ, thơm dịu, giúp giải nhiệt và bồi bổ cơ thể",
            price: 30000,
            image: "che_sam_bo_luong.jpg",
            categoryId: categoryMap["Tráng miệng"],
            isAvailable: true,
        },

    ];

    // Combine all menus
    const allMenus = [
        ...mainCourses,
        ...AmthucAoSen,
        ...Mondongque,
        ...drinks,
        ...trangmieng,
    ];

    // Seed menus
    for (const menu of allMenus) {
        await prisma.menu.upsert({
            where: {
                id: `dummy-${menu.name.toLowerCase().replace(/\s+/g, "-")}`,
            },
            update: {},
            create: {
                id: `dummy-${menu.name.toLowerCase().replace(/\s+/g, "-")}`,
                name: menu.name,
                description: menu.description,
                price: menu.price,
                image: menu.image,
                categoryId: menu.categoryId,
                isAvailable: menu.isAvailable,
            },
        });
    }
}

async function seedTables() {
    console.log("Seeding tables...");

    const tables = [
        { tableNumber: 1, capacity: 2, isAvailable: true },
        { tableNumber: 2, capacity: 2, isAvailable: true },
        { tableNumber: 3, capacity: 4, isAvailable: true },
        { tableNumber: 4, capacity: 4, isAvailable: true },
        { tableNumber: 5, capacity: 4, isAvailable: true },
        { tableNumber: 6, capacity: 6, isAvailable: true },
        { tableNumber: 7, capacity: 6, isAvailable: true },
        { tableNumber: 8, capacity: 8, isAvailable: true },
        { tableNumber: 9, capacity: 8, isAvailable: true },
        { tableNumber: 10, capacity: 10, isAvailable: true },
        { tableNumber: 11, capacity: 12, isAvailable: true },
        { tableNumber: 12, capacity: 4, isAvailable: true },
    ];

    for (const table of tables) {
        await prisma.table.upsert({
            where: { tableNumber: table.tableNumber },
            update: {},
            create: {
                tableNumber: table.tableNumber,
                capacity: table.capacity,
                isAvailable: table.isAvailable,
            },
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
