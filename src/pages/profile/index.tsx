import { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import ProfileForm from "@/components/form/ProfileForm";
import { useQuery } from "@tanstack/react-query";
import { User, Calendar, Loader2 } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { useAuth } from "@/hooks/useAuth";

const Profile: NextPage = () => {
    const router = useRouter();
    const { isAuthenticated, isHydrated } = useAuth();

    // Fetch user profile data
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await axiosInstance.get("/profile");
            return response.data.user;
        },
        enabled: !!isAuthenticated && isHydrated,
    });

    // Navigate to login if not authenticated
    useEffect(() => {
        if (isHydrated && !isAuthenticated) {
            router.push(
                "/auth/login?callbackUrl=" + encodeURIComponent("/profile")
            );
        }
    }, [isAuthenticated, isHydrated, router]);

    // Show loader while fetching data
    if (isLoading || !isHydrated) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen bg-amber-50">
                    <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto text-amber-600" />
                        <p className="mt-2 text-amber-800">
                            Đang tải dữ liệu hồ sơ...
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }

    // Determine if tabs should be shown - any customer should see the tabs
    const isCustomer = user?.role === "CUSTOMER";

    return (
        <Layout>
            <Head>
                <title>Hồ Sơ - Ao Sen Chú Sang</title>
                <meta
                    name="description"
                    content="Quản lý hồ sơ người dùng tại Ao Sen Chú Sang"
                />
            </Head>

            <section className="py-12 px-4 bg-amber-50 min-h-screen">
                <div className="container mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold text-amber-900 mb-4">
                            Hồ Sơ Của Bạn
                        </h1>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Quản lý thông tin cá nhân và xem lịch sử đặt chỗ của bạn tại Ao Sen Chú Sang.
                        </p>
                    </div>

                    {/* Profile Navigation Tabs */}
                    {isCustomer && (
                        <div className="flex flex-wrap justify-center mb-8 gap-4">
                            <Link
                                href="/profile"
                                className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
                            >
                                <User className="mr-2 h-5 w-5" />
                                Hồ Sơ
                            </Link>
                            <Link
                                href="/profile/bookings"
                                className="bg-white hover:bg-amber-100 text-amber-800 border border-amber-200 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Đặt Chỗ Của Tôi
                            </Link>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                            <p>
                                Không thể tải dữ liệu hồ sơ. Vui lòng thử lại sau.
                            </p>
                        </div>
                    )}

                    {/* Profile Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-amber-100 p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mr-4">
                                        <User className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-amber-900">
                                            {user?.name || "Người Dùng"}
                                        </h2>
                                        <p className="text-amber-700">
                                            {user?.email || "email@example.com"}
                                        </p>
                                        {user?.role && (
                                            <p className="text-amber-600 text-sm mt-1">
                                                {user.role === "CUSTOMER" ? "Khách Hàng" : user.role}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Form */}
                        <div className="p-6">
                            {user && <ProfileForm user={user} />}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-amber-900 mb-4">
                            Quản Lý Trải Nghiệm Ẩm Thực Của Bạn
                        </h3>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>
                                    Đảm bảo thông tin liên hệ của bạn luôn cập nhật để nhận xác nhận đặt chỗ và thông tin khuyến mãi.
                                </span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>
                                    Truy cập trang{" "}
                                    <Link
                                        href="/profile/bookings"
                                        className="text-amber-600 hover:text-amber-800 font-medium"
                                    >
                                        Đặt Chỗ Của Tôi
                                    </Link>{" "}
                                    để xem và quản lý đặt chỗ của bạn.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reservation CTA */}
                    <div className="mt-8 bg-amber-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-amber-900 mb-2">
                                    Tạo Đặt Chỗ Mới
                                </h3>
                                <p className="text-amber-800">
                                    Muốn ghé thăm chúng tôi? Đặt chỗ bàn của bạn ngay bây giờ!
                                </p>
                            </div>
                            <Link
                                href="/booking/new"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Đặt Chỗ Ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Profile;