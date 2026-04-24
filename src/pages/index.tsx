import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { playfair } from "./_app";
import { Calendar, Utensils, Clock, Award, MapPin } from "lucide-react";
import { bestSellerMenu } from "@/constants";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Ao Sen Chú Sang - Món ăn đồng quê Việt Nam</title>
                <meta
                    name="description"
                    content="Nhà hàng với hương vị vùng miền Việt Nam kích thích vị giác"
                />
            </Head>

            {/* Hero Section with Animation */}
            <section className="relative h-[85vh] md:h-[90vh]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0.3 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative h-full"
                >
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Ao Sen Chú Sang"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 ${playfair.className}`}
                        >
                            Ao Sen Chú Sang
                        </motion.h1>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg sm:text-xl md:text-2xl text-white mb-8"
                        >
                            Món ăn chính thống Việt Nam với hương vị vùng miền
                            kích thích vị giác
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/menu"
                                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl block"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Utensils className="h-5 w-5" />
                                        Xem Thực Đơn
                                    </span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/booking/new"
                                    className="bg-white hover:bg-gray-100 text-amber-900 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl block"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Calendar className="h-5 w-5" />
                                        Đặt chỗ ngay
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section with Animation */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={slideUp}
                        className="text-center mb-12"
                    >
                        <h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                        >
                            Trải nghiệm ẩm thực đặc biệt
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Thưởng thức hương vị ẩm thực vùng miền trong
                            không gian thoải mái và dễ chịu tại Ao Sen Chú Sang.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {/* Feature 1 */}
                        <motion.div
                            variants={itemFadeIn}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-amber-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    delay: 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                            >
                                <Utensils className="h-7 w-7 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Món ăn chính thống
                            </h3>
                            <p className="text-gray-600">
                                Món đồng quê từ nhiều vùng với
                                công thức gốc và nguyên liệu chất lượng
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            variants={itemFadeIn}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-amber-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                            >
                                <Award className="h-7 w-7 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Chất Lượng Tốt Nhất
                            </h3>
                            <p className="text-gray-600">
                                Sử dụng nguyên liệu tươi ngon và cao cấp
                                cho mỗi món ăn
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            variants={itemFadeIn}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-amber-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                            >
                                <MapPin className="h-7 w-7 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Vị trí Chiến lược
                            </h3>
                            <p className="text-gray-600">
                                Nằm ở trung tâm thành phố với lối vào dễ dàng và
                                chỗ đậu xe rộng rãi
                            </p>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            variants={itemFadeIn}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-amber-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                            >
                                <Clock className="h-7 w-7 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Đặt chỗ Dễ dàng
                            </h3>
                            <p className="text-gray-600">
                                Hệ thống đặt chỗ trực tuyến tiện lợi để
                                đảm bảo sự thoải mái cho bạn
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Featured Menu with Animation */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="py-16 bg-amber-50"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={slideUp}
                        className="text-center mb-12"
                    >
                        <h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                        >
                            Thực đơn nổi bật của chúng tôi
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Những món đặc biệt được khách hàng yêu thích
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {/* Menu Items */}
                        {bestSellerMenu.map((menu, index) => (
                            <motion.div
                                key={menu.id}
                                variants={itemFadeIn}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative h-64">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                                    <Image
                                        src={`/images/menu/${menu.image}`}
                                        alt={menu.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.2 * index,
                                            duration: 0.5,
                                        }}
                                        className="absolute bottom-0 left-0 p-4 z-20"
                                    >
                                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            Best Seller
                                        </span>
                                    </motion.div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-semibold text-amber-900">
                                            {menu.name}
                                        </h3>
                                        <span className="text-amber-600 font-bold">
                                            {`VND. ${menu.price.toLocaleString(
                                                "vi-VN"
                                            )}`}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {menu.description}
                                    </p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href="/menu"
                                            className="text-amber-600 hover:text-amber-800 font-medium text-sm flex items-center"
                                        >
                                            Xem Thực Đơn Đầy Đủ
                                            <svg
                                                className="ml-1 w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/menu"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center"
                            >
                                <Utensils className="mr-2 h-5 w-5" />
                                Khám phá Thực Đơn Đầy Đủ
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Reservation CTA with Animation */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleIn}
                className="py-16 bg-amber-900 text-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            variants={slideUp}
                            className={`text-3xl font-bold mb-6 ${playfair.className}`}
                        >
                            Đặt Bàn Ngay
                        </motion.h2>
                        <motion.p
                            variants={slideUp}
                            className="text-amber-100 mb-8 text-lg"
                        >
                            Đừng bỏ lỡ trải nghiệm ẩm thực đặc biệt.
                            Đặt bàn để đảm bảo chỗ tại Ao Sen Chú Sang.
                        </motion.p>
                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div
                                variants={itemFadeIn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/booking/new"
                                    className="bg-white hover:bg-gray-100 text-amber-900 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
                                >
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Đặt chỗ Ngay
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={itemFadeIn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="bg-transparent hover:bg-amber-800 text-white border border-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
                                >
                                    Liên hệ với chúng tôi
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Operating Hours & Location with Animation */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={slideUp}
                        className="bg-amber-50 p-8 rounded-lg shadow-md"
                    >
                        <h3
                            className={`text-2xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                        >
                            Vị trí của chúng tôi
                        </h3>

                        {/* Embed Google Maps */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-64 rounded-lg overflow-hidden mb-4"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126223.49937453566!2d115.20055934863283!3d-8.672764672026936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241e5c2a234ed%3A0x79baf75de8e6c873!2sSanur%2C%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1714556729050!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>

                        <motion.p
                            variants={itemFadeIn}
                            className="text-gray-600 mb-2"
                        >
                            Biene Hòa city, VietNam
                        </motion.p>
                        <motion.div
                            variants={itemFadeIn}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="https://maps.app.goo.gl/TEBscMiD22evVTnZ8"
                                target="_blank"
                                className="text-amber-600 hover:text-amber-800 font-medium inline-flex items-center"
                            >
                                Xem trên Google Maps
                                <svg
                                    className="ml-1 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default Home;
