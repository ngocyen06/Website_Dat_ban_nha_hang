import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { playfair } from "../_app";

const BookingPage: NextPage = () => {
    // Refs for sections to check if they're in view
    const bookingInfoRef = useRef(null);
    const myBookingsRef = useRef(null);

    // Check if elements are in view
    const bookingInfoInView = useInView(bookingInfoRef, {
        once: true,
        amount: 0.3,
    });
    const myBookingsInView = useInView(myBookingsRef, {
        once: true,
        amount: 0.3,
    });

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const buttonHover = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: { scale: 0.98 },
    };

    return (
        <Layout>
            <Head>
                <title>Đặt chỗ - Cita Nusa Resto</title>
                <meta
                    name="description"
                    content="Đặt chỗ bàn tại Cita Nusa Resto - Món ăn Indonesia chính gốc"
                />
            </Head>

            {/* Booking Info Section */}
            <motion.section
                className="py-16 px-4 bg-amber-50"
                ref={bookingInfoRef}
                initial="hidden"
                animate={bookingInfoInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className={`text-2xl font-extrabold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            Thông tin đặt chỗ
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                        >
                            Chúng tôi cung cấp dịch vụ đặt chỗ để đảm bảo trải nghiệm ăn uống của bạn diễn ra suôn sẻ. Vui lòng đặt bàn ít nhất 2 giờ trước khi đến.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 mb-12"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={bookingInfoInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto mb-4">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </motion.svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Giờ phục vụ
                            </h3>
                            <p className="text-gray-600">
                                Thứ Hai - Thứ Sáu: 11.00 - 22.00
                                <br />
                                Thứ Bảy - Chủ Nhật: 10.00 - 23.00
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto mb-4">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        times: [0, 0.5, 1],
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </motion.svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Sức chứa
                            </h3>
                            <p className="text-gray-600">
                                Chúng tôi có bàn cho 2, 4, 6 và 8 người.
                                <br />
                                Với nhóm lớn hơn, vui lòng liên hệ với chúng tôi.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto mb-4">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={{
                                        rotate: [0, 15, 0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        times: [0, 0.25, 0.5, 0.75, 1],
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </motion.svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                Liên hệ
                            </h3>
                            <p className="text-gray-600">
                                Điện thoại: (021) 123-4567
                                <br />
                                Email: info@citanusaresto.com
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            bookingInfoInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 50 }
                        }
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.h3
                            className={`text-2xl font-extrabold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            Đặt chỗ ngay bây giờ
                        </motion.h3>
                        <motion.p
                            className="text-gray-700 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            Đặt bàn để đảm bảo chỗ ngồi của bạn tại Cita Nusa Resto. Thưởng thức món chính thống Indonesia trong không gian ấm cúng.
                        </motion.p>
                        <motion.div
                            variants={buttonHover}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="/booking/new"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-block"
                            >
                                <motion.span
                                    initial={{ x: -5, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    Đặt bàn
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* My Bookings Section for logged-in users */}
            <motion.section
                className="py-16 px-4 bg-white"
                ref={myBookingsRef}
                initial="hidden"
                animate={myBookingsInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-8"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className={`text-2xl font-extrabold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={
                                myBookingsInView
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{ duration: 0.7 }}
                        >
                            Đặt chỗ của tôi
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={
                                myBookingsInView
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            Xem và quản lý các đặt chỗ bạn đã tạo.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="bg-amber-50 p-8 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            myBookingsInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ delay: 0.4, duration: 0.7 }}
                        whileHover={{
                            boxShadow:
                                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                    >
                        <motion.div
                            variants={buttonHover}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="/profile/bookings"
                                className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-8 py-3 rounded-md text-lg font-medium inline-block"
                            >
                                Xem đặt chỗ của tôi
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default BookingPage;
