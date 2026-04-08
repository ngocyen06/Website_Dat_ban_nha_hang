import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { playfair } from "./_app";
import { Home, Book, Utensils } from "lucide-react";

const Custom404: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Trang không tìm thấy - Cita Nusa Resto</title>
                <meta
                    name="description"
                    content="Trang bạn tìm không tìm thấy"
                />
            </Head>

            {/* Error Section */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center">
                <div className="absolute inset-0 bg-amber-900/90 z-10" />
                <div className="relative h-full w-full">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 z-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1
                            className={`text-8xl font-bold text-white mb-4 ${playfair.className}`}
                        >
                            404
                        </h1>
                        <h2
                            className={`text-3xl md:text-4xl font-bold text-white mb-6 ${playfair.className}`}
                        >
                            Trang không tìm thấy
                        </h2>
                        <p className="text-lg text-amber-100 mb-10">
                            Xin lỗi, trang bạn tìm không thể tìm thấy.
                            Có thể trang đó đã bị di chuyển hoặc xóa.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="bg-white hover:bg-gray-100 text-amber-900 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Home className="h-5 w-5" />
                                    Quay lại Trang chủ
                                </span>
                            </Link>
                            <Link
                                href="/menu"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Utensils className="h-5 w-5" />
                                    Xem menu của chúng tôi
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suggestions Section */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                        >
                            Có thể bạn đang tìm
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Vui lòng thử các trang phổ biến dưới đây
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <Utensils className="h-7 w-7 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Menu của chúng tôi
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Khám phá các món chính thống Indonesia mà chúng tôi cung cấp
                            </p>
                            <Link
                                href="/menu"
                                className="text-amber-600 hover:text-amber-800 font-medium"
                            >
                                Xem menu
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <Book className="h-7 w-7 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Đặt chỗ
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Đặt bàn ngay bây giờ để có trải nghiệm ẩm thực đặc biệt
                            </p>
                            <Link
                                href="/booking/new"
                                className="text-amber-600 hover:text-amber-800 font-medium"
                            >
                                Đặt chỗ ngay
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-7 w-7 text-amber-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Về chúng tôi
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Tìm hiểu thêm về Cita Nusa Resto và lịch sử của chúng tôi
                            </p>
                            <Link
                                href="/about"
                                className="text-amber-600 hover:text-amber-800 font-medium"
                            >
                                Về chúng tôi
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-7 w-7 text-amber-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Liên hệ
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Liên hệ với chúng tôi để biết thêm câu hỏi hoặc thông tin
                            </p>
                            <Link
                                href="/contact"
                                className="text-amber-600 hover:text-amber-800 font-medium"
                            >
                                Liên hệ với chúng tôi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Custom404;
