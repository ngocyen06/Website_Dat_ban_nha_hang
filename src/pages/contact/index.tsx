import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { playfair } from "../_app";
import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
    name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    email: z.string().email("Định dạng email không hợp lệ"),
    subject: z.string().min(3, "Chủ đề phải có ít nhất 3 ký tự"),
    message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const heroTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const pulseVariants = {
    idle: { scale: 1 },
    pulse: { 
        scale: 1.05,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
            ease: "easeInOut"
        }
    }
};

const ContactPage: NextPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (data: ContactFormValues) => {
            return axiosInstance.post("/contact", data);
        },
        onSuccess() {
            reset();
            toast.success("Tin nhắn đã được gửi thành công!");
        },
        onError() {
            toast.error("Đã xảy ra lỗi khi gửi tin nhắn");
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        mutate(data);
    };

    return (
        <Layout>
            <Head>
                <title>Liên Hệ Chúng Tôi - Cita Nusa Resto</title>
                <meta
                    name="description"
                    content="Liên hệ Cita Nusa Resto để đặt chỗ, phản hồi, hoặc câu hỏi khác"
                />
            </Head>

            {/* Hero Section with Animation */}
            <section className="relative h-[40vh]">
                <motion.div 
                    className="absolute inset-0 bg-black/50 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="relative h-full">
                    <div className="bg-amber-900 h-full" />
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                    <motion.div 
                        className="max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                    >
                        <motion.h1
                            className={`text-4xl md:text-5xl font-extrabold text-white mb-4 ${playfair.className}`}
                            variants={heroTextVariants}
                        >
                            Liên Hệ Chúng Tôi
                        </motion.h1>
                        <motion.p 
                            className="text-lg md:text-xl text-white"
                            variants={heroTextVariants}
                        >
                            Chúng tôi sẵn sàng lắng nghe câu hỏi, gợi ý, và đặt chỗ của bạn
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content with Animation */}
            <motion.section 
                className="py-16 px-4 bg-amber-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <motion.h2
                                    className={`text-2xl font-bold text-amber-900 mb-6 ${playfair.className}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Thông Tin Liên Hệ
                                </motion.h2>

                                <motion.div 
                                    className="space-y-6"
                                    variants={staggerChildren}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.div 
                                        className="flex items-start"
                                        variants={fadeInUp}
                                    >
                                        <motion.div 
                                            className="bg-amber-100 p-3 rounded-full mr-4"
                                            whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <MapPin className="h-6 w-6 text-amber-700" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-amber-900 mb-1">
                                                Địa Chỉ
                                            </h3>
                                            <p className="text-gray-600">
                                                Jl. Raya Cita Nusa No. 123
                                                <br />
                                                Denpasar, Bali
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-start"
                                        variants={fadeInUp}
                                    >
                                        <motion.div 
                                            className="bg-amber-100 p-3 rounded-full mr-4"
                                            whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Phone className="h-6 w-6 text-amber-700" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-amber-900 mb-1">
                                                Điện Thoại
                                            </h3>
                                            <p className="text-gray-600">
                                                (021) 123-4567
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-start"
                                        variants={fadeInUp}
                                    >
                                        <motion.div 
                                            className="bg-amber-100 p-3 rounded-full mr-4"
                                            whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Mail className="h-6 w-6 text-amber-700" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-amber-900 mb-1">
                                                Email
                                            </h3>
                                            <p className="text-gray-600">
                                                info@citanusaresto.com
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div 
                                    className="mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <h3 className="font-semibold text-amber-900 mb-3">
                                        Giờ Hoạt Động
                                    </h3>
                                    <ul className="text-gray-600 space-y-1">
                                        <motion.li 
                                            className="flex justify-between"
                                            whileHover={{ x: 5, color: "#B45309" }}
                                        >
                                            <span>Thứ Hai - Thứ Sáu:</span>
                                            <span>11.00 - 22.00</span>
                                        </motion.li>
                                        <motion.li 
                                            className="flex justify-between"
                                            whileHover={{ x: 5, color: "#B45309" }}
                                        >
                                            <span>Thứ Bảy - Chủ Nhật:</span>
                                            <span>10.00 - 23.00</span>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <motion.h2
                                    className={`text-2xl font-bold text-amber-900 mb-6 ${playfair.className}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Gửi Tin Nhắn
                                </motion.h2>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                    >
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-700 mb-1"
                                        >
                                            Tên Đầy Đủ
                                        </label>
                                        <motion.input
                                            id="name"
                                            type="text"
                                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Nhập tên đầy đủ"
                                            {...register("name")}
                                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(217, 119, 6, 0.2)" }}
                                        />
                                        {errors.name && (
                                            <motion.p 
                                                className="mt-1 text-red-500 text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.name.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                    >
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 mb-1"
                                        >
                                            Email
                                        </label>
                                        <motion.input
                                            id="email"
                                            type="email"
                                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Nhập địa chỉ email"
                                            {...register("email")}
                                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(217, 119, 6, 0.2)" }}
                                        />
                                        {errors.email && (
                                            <motion.p 
                                                className="mt-1 text-red-500 text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.email.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.4 }}
                                    >
                                        <label
                                            htmlFor="subject"
                                            className="block text-gray-700 mb-1"
                                        >
                                            Chủ Đề
                                        </label>
                                        <motion.input
                                            id="subject"
                                            type="text"
                                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                                errors.subject
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Nhập chủ đề tin nhắn"
                                            {...register("subject")}
                                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(217, 119, 6, 0.2)" }}
                                        />
                                        {errors.subject && (
                                            <motion.p 
                                                className="mt-1 text-red-500 text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.subject.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                    >
                                        <label
                                            htmlFor="message"
                                            className="block text-gray-700 mb-1"
                                        >
                                            Tin Nhắn
                                        </label>
                                        <motion.textarea
                                            id="message"
                                            rows={5}
                                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Viết tin nhắn của bạn"
                                            {...register("message")}
                                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(217, 119, 6, 0.2)" }}
                                        ></motion.textarea>
                                        {errors.message && (
                                            <motion.p 
                                                className="mt-1 text-red-500 text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.message.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        disabled={isPending}
                                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
                                        whileHover={{ scale: 1.02, backgroundColor: "#B45309" }}
                                        whileTap={{ scale: 0.98 }}
                                        initial="idle"
                                        animate={isPending ? "pulse" : "idle"}
                                        variants={pulseVariants}
                                    >
                                        {isPending ? (
                                            <span className="flex items-center">
                                                <motion.span 
                                                    className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ 
                                                        repeat: Infinity, 
                                                        duration: 1,
                                                        ease: "linear"
                                                    }}
                                                ></motion.span>
                                                Đang gửi...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <motion.div
                                                    initial={{ x: -5, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    <Send className="h-5 w-5 mr-2" />
                                                </motion.div>
                                                Gửi Tin Nhắn
                                            </span>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default ContactPage;