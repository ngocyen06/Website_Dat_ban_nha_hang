import {
    LayoutDashboard,
    Users,
    BookOpen,
    CalendarClock,
    ShoppingCart,
    Table2,
} from "lucide-react";

const statusColors: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
    CONFIRMED: "bg-green-100 text-green-800 border-green-200",
    CANCELLED: "bg-red-100 text-red-800 border-red-200",
    COMPLETED: "bg-blue-100 text-blue-800 border-blue-200",
};

const statusLabels: Record<string, string> = {
    PENDING: "Đang chờ xác nhận",
    CONFIRMED: "Đã xác nhận",
    CANCELLED: "Đã hủy",
    COMPLETED: "Hoàn thành",
};

// Filter for booking status
const statusFilters = [
    { value: "", label: "Tất cả" },
    { value: "PENDING", label: "Đang chờ xác nhận" },
    { value: "CONFIRMED", label: "Đã xác nhận" },
    { value: "CANCELLED", label: "Đã hủy" },
    { value: "COMPLETED", label: "Hoàn thành" },
];

const dashboardNavItems = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        title: "Người dùng",
        href: "/admin/users",
        icon: <Users className="h-5 w-5" />,
    },
    {
        title: "Menu",
        href: "/admin/menus",
        icon: <BookOpen className="h-5 w-5" />,
    },
    {
        title: "Đặt chỗ",
        href: "/admin/bookings",
        icon: <CalendarClock className="h-5 w-5" />,
    },
    {
        title: "Đơn hàng",
        href: "/admin/orders",
        icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
        title: "Bàn",
        href: "/admin/tables",
        icon: <Table2 className="h-5 w-5" />,
    },
];

const bestSellerMenu = [
    {
        id: "dummy-rendang-sapi",
        name: "Rendang Sapi",
        description:
            "Thịt bò nấu với nước cốt dừa và gia vị rendang đặc trưng của Padang",
        price: 70000,
        image: "rendang-sapi.jpg",
        categoryId: "e5f8bae5-4273-44cf-a446-11f129d7a7f0",
        isAvailable: true,
        createdAt: "2025-04-21T03:23:44.893Z",
        updatedAt: "2025-04-21T03:23:44.893Z",
        category: {
            id: "e5f8bae5-4273-44cf-a446-11f129d7a7f0",
            name: "Món ăn vùng miền",
            createdAt: "2025-04-21T03:23:44.623Z",
            updatedAt: "2025-04-21T03:23:44.623Z",
        },
    },
    {
        id: "dummy-kakap-bakar-jimbaran",
        name: "Kakap Bakar Jimbaran",
        description: "Cá hồng tươi nướng với gia vị Jimbaran đặc trưng của Bali",
        price: 95000,
        image: "kakap-bakar.jpg",
        categoryId: "e951732e-bf99-4455-83a9-5017e945684a",
        isAvailable: true,
        createdAt: "2025-04-21T03:23:44.977Z",
        updatedAt: "2025-04-21T03:23:44.977Z",
        category: {
            id: "e951732e-bf99-4455-83a9-5017e945684a",
            name: "Món hải sản",
            createdAt: "2025-04-21T03:23:44.623Z",
            updatedAt: "2025-04-21T03:23:44.623Z",
        },
    },
    {
        id: "dummy-bebek-betutu",
        name: "Bebek Betutu",
        description:
            "Vịt nấu với gia vị betutu và gói lá chuối",
        price: 90000,
        image: "bebek-betutu.jpg",
        categoryId: "f1657a12-55a3-4ee6-be27-c610cb8bd786",
        isAvailable: true,
        createdAt: "2025-04-21T03:23:44.940Z",
        updatedAt: "2025-04-21T03:23:44.940Z",
        category: {
            id: "f1657a12-55a3-4ee6-be27-c610cb8bd786",
            name: "Món ăn Bali",
            createdAt: "2025-04-21T03:23:44.623Z",
            updatedAt: "2025-04-21T03:23:44.623Z",
        },
    },
];

const teamMembers = [
    {
        id: 1,
        name: "Budi Santoso",
        position: "Head Chef",
        image: "chef-1.jpg",
        bio: "Đầu bếp Budi có hơn 15 năm kinh nghiệm trong lĩnh vực ẩm thực Indonesia. Anh ấy đã nấu ăn cho nhiều sự kiện quan trọng và giành được một số giải thưởng ẩm thực quốc gia.",
    },
    {
        id: 2,
        name: "Siti Rahayu",
        position: "Restaurant Manager",
        image: "manager-1.jpg",
        bio: "Siti đã quản lý một số nhà hàng hàng đầu ở Indonesia trong 10 năm qua. Với nền tảng quản lý hospitality, cô ấy đảm bảo trải nghiệm khách hàng hoàn hảo.",
    },
    {
        id: 3,
        name: "Agus Wijaya",
        position: "Sous Chef",
        image: "chef-2.jpg",
        bio: "Đầu bếp Agus là chuyên gia về món hải sản và gia vị vùng miền. Hành trình ẩm thực của anh bắt đầu từ bếp gia đình ở Sulawesi Selatan.",
    },
    {
        id: 4,
        name: "Dewi Anggraini",
        position: "Pastry Chef",
        image: "chef-3.jpg",
        bio: "Đầu bếp Dewi là chuyên gia trong việc kết hợp kỹ thuật làm bánh hiện đại với hương vị truyền thống của Indonesia, tạo ra những món tráng miệng độc đáo và đáng nhớ.",
    },
];

const milestones = [
    {
        year: 2018,
        title: "Khởi đầu hành trình",
        description:
            "Cita Nusa Resto được thành lập bởi gia đình Santoso với tầm nhìn bảo tồn di sản ẩm thực Indonesia.",
    },
    {
        year: 2019,
        title: "Mở rộng menu",
        description:
            "Thêm menu từ các vùng khác nhau của Indonesia để làm phong phú trải nghiệm ẩm thực của khách hàng.",
    },
    {
        year: 2020,
        title: "Thích ứng trong đại dịch",
        description:
            "Phát triển dịch vụ giao hàng và mang đi để tiếp tục phục vụ khách hàng trung thành.",
    },
    {
        year: 2021,
        title: "Tu sửa & Đổi mới",
        description:
            "Tu sửa toàn bộ nội thất nhà hàng và đổi mới menu bằng cách thêm nét hiện đại.",
    },
    {
        year: 2022,
        title: "Giải thưởng ẩm thực",
        description:
            "Nhận giải thưởng 'Nhà hàng Truyền thống Tốt nhất' từ Hiệp hội Ẩm thực Indonesia.",
    },
    {
        year: 2023,
        title: "Tính bền vững",
        description:
            "Cam kết sử dụng nguyên liệu địa phương và thực hành thân thiện với môi trường trong hoạt động nhà hàng.",
    },
];

export {
    statusColors,
    statusLabels,
    statusFilters,
    dashboardNavItems,
    bestSellerMenu,
    teamMembers,
    milestones,
};
