Đề tài: Website đặt bàn nhà hàng - Ao sen chú Sang

Danh sách thành viên:
1. Bùi Ngọc Yến - 124001493
2. Vũ Đình Khôi Nguyên - 124001437
3. Trần Vũ Gia Kiệt - 124000658
4. Vũ Xuân Nam - 124001343

I.Mô tả ngắn về chức năng website
Một ứng dụng web fullstack cho nhà hàng "Ao sen chú Sang" với hệ thống đặt bàn. Dự án này được tạo như một showcase cá nhân sử dụng NextJS với Pages Router và nhiều tech stack hiện đại.

## 📋 Mục Lục

- [Demo](#demo)
- [Tính năng](#tính-năng)
- [Tech Stack](#tech-stack)
- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [API Endpoints](#api-endpoints)

## 🚀 Demo

(https://website-dat-ban-nha-hang.vercel.app)

## ✨ Tính năng

- 🍽️ **Danh mục Menu**: Giao diện menu món ăn và đồ uống hấp dẫn
- 📅 **Hệ thống đặt chỗ**: Đặt bàn với lựa chọn ngày, giờ và số lượng khách
- 👤 **Quản lý tài khoản**: Đăng ký, đăng nhập và quản lý hồ sơ người dùng
- 📧 **Thông báo Email**: Xác nhận đặt chỗ qua email
- 📱 **Responsive**: Hiển thị tối ưu trên nhiều thiết bị
- 🔐 **Admin Dashboard**:
  - Quản lý người dùng
  - Quản lý menu
  - Quản lý đặt chỗ
  - Quản lý đơn hàng
  - Quản lý bàn
  - Trực quan hóa dữ liệu bằng Recharts để xem insight hằng ngày về đặt chỗ và đơn hàng

## 💻 Tech Stack

### Frontend

- **Next.js** (Pages Router) - Framework React cho rendering phía server và client
- **TailwindCSS** - Framework CSS cho thiết kế nhanh và responsive
- **React Hook Form & Zod** - Validation và quản lý form
- **TanStack Query** - Quản lý state và fetching data
- **Zustand** - Quản lý state toàn cục
- **React DatePicker** - Thành phần chọn ngày
- **date-fns** - Tiện ích xử lý ngày và giờ
- **Framer Motion** - Library cho animation UI
- **Recharts** - Library để trực quan hóa dữ liệu trong dashboard admin

### Backend

- **Next.js API Routes** - Endpoint API REST
- **Prisma** - ORM cho tương tác database
- **PostgreSQL** - Database quan hệ
- **JSON Web Token** - Xác thực người dùng
- **Resend** - Dịch vụ gửi email

## 🔧 Cài đặt

### Điều kiện tiên quyết

- Node.js (phiên bản 18.x hoặc cao hơn)
- NPM 
- PostgreSQL

### Các bước

1. Clone repository:

   ```bash
   git clone https://github.com/ngocyen06/Website_Dat_ban_nha_hang.git
   cd Website_Dat_ban_nha_hang
   ```

2. Cài đặt dependencies:

   ```bash
   npm install
   # hoặc
   yarn install
   ```

3. Tạo file .env và cấu hình biến môi trường:

    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/aosenchusangdb"
    JWT_SECRET="your-secret-key"
    RESEND_API_KEY="your-resend-api-key"
    EMAIL_FROM="onboarding@resend.dev"
    EMAIL_DEV="youremail@example.com"
    NODE_ENV="development"
    GEMINI_API_KEY="your-gemini-api-key"
    ```
4. Chạy migration database:

   ```bash
   npx prisma migrate dev
   ```

5. Seed database bằng dữ liệu dummy:
   ```bash
   npm run seed
   ```

## 🚀 Sử dụng

### Chế độ Development

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem ứng dụng.

### Build cho Production

```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 📁 Cấu trúc dự án

```
cita-nusa-resto/
├── .next/              # Build output của Next.js
├── node_modules/       # Dependencies
├── prisma/             # Prisma schema và migrations
│   └── seed.ts         # Script seed dữ liệu dummy
├── public/             # File tĩnh
├── src/                # Source code
│   ├── components/     # Các component React có thể tái sử dụng
│   ├── constants/      # Hằng số của ứng dụng
│   ├── emails/         # Template email
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities và helper functions
│   ├── pages/          # Trang và API routes (Next.js Pages Router)
│   │   ├── api/        # Backend API endpoints
│   │   └── ...         # Frontend pages
│   ├── service/        # Service layer
│   │   └── emailService.tsx # Service gửi email
│   ├── store/          # State management (Zustand)
│   ├── styles/         # File CSS global và utilities
│   ├── types/          # Type definitions TypeScript
│   └── utils/          # Hàm tiện ích
├── .env                # Environment variables
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vercel.json
```

## 📡 API Endpoints

### Xác thực

- `POST /api/auth/register` - Đăng ký người dùng mới
- `POST /api/auth/login` - Đăng nhập người dùng

### Menu

- `GET /api/menus` - Lấy tất cả menu
- `POST /api/menus` - Thêm menu mới
- `GET /api/menus/[id]` - Lấy chi tiết menu theo ID
- `PATCH /api/menus/[id]` - Cập nhật menu
- `DELETE /api/menus/[id]` - Xóa menu
- `GET /api/menus/categories` - Lấy tất cả danh mục menu

### Đặt chỗ

- `POST /api/bookings` - Tạo đặt chỗ mới
- `GET /api/bookings` - Lấy tất cả đặt chỗ của người dùng
- `GET /api/bookings/[id]` - Lấy chi tiết đặt chỗ
- `PATCH /api/bookings/[id]` - Cập nhật đặt chỗ
- `DELETE /api/bookings/[id]` - Hủy đặt chỗ

### Đơn hàng

- `POST /api/orders` - Tạo đơn hàng mới
- `GET /api/orders` - Lấy tất cả đơn hàng của người dùng
- `GET /api/orders/[id]` - Lấy chi tiết đơn hàng
- `PATCH /api/orders/[id]` - Cập nhật đơn hàng

### Bàn

- `GET /api/tables` - Lấy tất cả dữ liệu bàn
- `POST /api/tables` - Tạo bàn mới
- `GET /api/tables/[id]` - Lấy chi tiết bàn
- `PATCH /api/tables/[id]` - Cập nhật trạng thái bàn
- `DELETE /api/tables/[id]` - Xóa bàn
- `GET /api/tables/available` - Lấy các bàn còn trống

### Admin

- `GET /api/admin/dashboard-stats` - Lấy dữ liệu cho thống kê dashboard
- `GET /api/admin/users` - Lấy danh sách người dùng
- `PATCH /api/admin/users/[id]` - Cập nhật role người dùng

### PROFILE

- `GET /api/profile` - Lấy dữ liệu hồ sơ người dùng
