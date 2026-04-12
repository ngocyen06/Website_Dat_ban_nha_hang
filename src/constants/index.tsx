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
        id: "dummy-bo-xao-thien-ly",
        name: "Bò xào thiên lý",
        description:
            "Thịt bò nấu với nước cốt dừa và gia vị đặc trưng của nhà hàng",
        price: 70000,
        image: "Bo_xao_thien_ly.jpg",
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
        id: "dummy-ca-bo-da-nuong",
        name: "Cá bò da nướng",
        description: "Cá bò tươi nướng với gia vị đặc trưng của miền Nam",
        price: 95000,
        image: "Ca_bo_da_nuong.jpg",
        categoryId: "e951732e-bf99-4455-83a9-5017e945684a",
        isAvailable: true,
        createdAt: "2025-04-21T03:23:44.977Z",
        updatedAt: "2025-04-21T03:23:44.977Z",
        category: {
            id: "e951732e-bf99-4455-83a9-5017e945684a",
            name: "Món miền Nam",
            createdAt: "2025-04-21T03:23:44.623Z",
            updatedAt: "2025-04-21T03:23:44.623Z",
        },
    },
    {
        id: "dummy-sup-cua",
        name: "Súp cua",
        description:
            "Súp cua với gia vị miền Bắc ",
        price: 90000,
        image: "Sup_cua.jpg",
        categoryId: "f1657a12-55a3-4ee6-be27-c610cb8bd786",
        isAvailable: true,
        createdAt: "2025-04-21T03:23:44.940Z",
        updatedAt: "2025-04-21T03:23:44.940Z",
        category: {
            id: "f1657a12-55a3-4ee6-be27-c610cb8bd786",
            name: "Món ăn miền Bắc",
            createdAt: "2025-04-21T03:23:44.623Z",
            updatedAt: "2025-04-21T03:23:44.623Z",
        },
    },
];

const teamMembers = [
    {
        id: 1,
        name: "Bùi Ngọc Yến",
        position: "Head Chef",
        image: "chef-1.jpg",
        bio: "Đầu bếp Ngọc Ýn có hơn 15 năm kinh nghiệm trong lĩnh vực ẩm thực Việt Nam. Cô ấy đã nấu ăn cho nhiều sự kiện quan trọng và giành được một số giải thưởng ẩm thực quốc gia.",
    },
    {
        id: 2,
        name: "Vũ Đình Khôi Nguyên",
        position: "Restaurant Manager",
        image: "manager-1.jpg",
        bio: "Vũ Đình Khôi Nguyên đã quản lý một số nhà hàng hàng đầu ở Việt Nam trong 10 năm qua. Với nền tảng quản lý Balenciaga, anh ấy đảm bảo trải nghiệm khách hàng hoàn hảo.",
    },
    {
        id: 3,
        name: "Trần Vũ Gia Kiệt",
        position: "Sous Chef",
        image: "chef-2.jpg",
        bio: "Đầu bếp Trần Vũ Gia Kiệt là chuyên gia về món hải sản và gia vị vùng miền. Hành trình ẩm thực của anh bắt đầu từ bếp gia đình ở Cortis.",
    },
    {
        id: 4,
        name: "Vũ Xuân Nam",
        position: "Pastry Chef",
        image: "chef-3.jpg",
        bio: "Đầu bếp Vũ Xuân Nam là chuyên gia trong việc kết hợp kỹ thuật làm bánh hiện đại với hương vị truyền thống của Việt Nam, tạo ra những món tráng miệng độc đáo và đáng nhớ.",
    },
];

const milestones = [
    {
        year: 2018,
        title: "Khởi đầu hành trình",
        description:
            "Ao sen chú Sang được thành lập bởi gia đình Ngọc Ýn với tầm nhìn bảo tồn di sản ẩm thực Việt Nam.",
    },
    {
        year: 2019,
        title: "Mở rộng menu",
        description:
            "Thêm menu từ các vùng khác nhau của Việt Nam để làm phong phú trải nghiệm ẩm thực của khách hàng.",
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
            "Nhận giải thưởng 'Nhà hàng Truyền thống Tốt nhất' từ Hiệp hội Ẩm thực Việt Nam.",
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
