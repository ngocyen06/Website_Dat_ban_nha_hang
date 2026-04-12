import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Award, Users, Calendar, Utensils } from "lucide-react";
import { playfair } from "../_app";
import { milestones, teamMembers } from "@/constants";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import TeamMemberCard from "@/components/card/about/TeamMemberCard ";

const AboutPage: NextPage = () => {
    // Refs for each section
    const storyRef = useRef(null);
    const valuesRef = useRef(null);
    const milestonesRef = useRef(null);
    const teamRef = useRef(null);
    const ctaRef = useRef(null);

    // Check if sections are in view
    const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
    const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
    const milestonesInView = useInView(milestonesRef, {
        once: true,
        amount: 0.3,
    });
    const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

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

    const staggerContainerTeam = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const heroTextVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    };

    const imgScale = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const buttonHover = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: { scale: 0.95 },
    };

    return (
        <Layout>
            <Head>
                <title>Về chúng tôi - Ao sen chú Sang</title>
                <meta
                    name="description"
                    content="Tìm hiểu sâu hơn về Ao sen chú Sang, lịch sử, và đội ngũ của chúng tôi chuyên tâm phục vụ hương vị vùng miền."
                />
            </Head>

            {/* Hero Section */}
            <motion.section
                className="relative h-[40vh]"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative h-full">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="Về Ao sen chú Sang"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center text-center px-4"
                    variants={heroTextVariants}
                >
                    <div className="max-w-3xl">
                        <motion.h1
                            className={`text-4xl md:text-5xl font-extrabold text-white mb-4 ${playfair.className}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Về chúng tôi
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Hành trình của chúng tôi trong việc mang đến hương vị vùng miền chân thực
                        </motion.p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Our Story Section */}
            <motion.section
                className="py-16 px-4 bg-white"
                ref={storyRef}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div className="lg:w-1/2" variants={imgScale}>
                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about-story.jpg"
                                    alt="Câu chuyện Ao sen chú Sang"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div className="lg:w-1/2" variants={fadeInUp}>
                            <motion.h2
                                className={`text-3xl font-bold text-amber-900 mb-6 ${playfair.className}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                    storyInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -20 }
                                }
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Câu chuyện của chúng tôi
                            </motion.h2>
                            <motion.p
                                className="text-gray-700 mb-4"
                                initial={{ opacity: 0 }}
                                animate={
                                    storyInView
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                }
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Ao sen chú Sang được thành lập vào năm 2018 với
                                một sứ mệnh đơn giản nhưng sâu sắc:
                                bảo tồn và giới thiệu di sản ẩm thực
                                Việt Nam cho cộng đồng rộng lớn.
                            </motion.p>
                            <motion.p
                                className="text-gray-700 mb-4"
                                initial={{ opacity: 0 }}
                                animate={
                                    storyInView
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                }
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Bắt đầu từ tình yêu của gia đình Ngọc Ýn đối với
                                ẩm thực vùng miền, Ao sen chú Sang xuất hiện như một
                                nơi để chia sẻ hương vị chân thực của Việt Nam
                                giàu gia vị và kỷ niệm. Chúng tôi tin rằng mỗi
                                món ăn đều có câu chuyện và di sản văn hóa đáng
                                được bảo tồn.
                            </motion.p>
                            <motion.p
                                className="text-gray-700 mb-4"
                                initial={{ opacity: 0 }}
                                animate={
                                    storyInView
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                }
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Tên {"Ao sen chú Sang"} chính là hiện thân của khát vọng
                                của chúng tôi để nâng tầm hương vị ẩm thực vùng
                                miền lên sân khấu rộng lớn hơn, vẫn duy trì
                                tính chân thực nhưng được trình bày với nét
                                hiện đại.
                            </motion.p>
                            <motion.p
                                className="text-gray-700"
                                initial={{ opacity: 0 }}
                                animate={
                                    storyInView
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                }
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Mỗi món ăn mà chúng tôi phục vụ là kết quả của
                                nghiên cứu sâu, lựa chọn nguyên liệu chất lượng,
                                và sự cống hiến để mang đến điều tốt nhất cho
                                khách hàng. Đây chính là nền tảng của Ao sen chú Sang
                                cho đến nay.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
                className="py-16 px-4 bg-amber-50"
                ref={valuesRef}
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={
                                valuesInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.6 }}
                        >
                            Giá trị của chúng tôi
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={
                                valuesInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Nguyên tắc hướng dẫn chúng tôi trong việc mang đến
                            trải nghiệm ẩm thực tốt nhất
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Award className="h-8 w-8 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
                                Tính chân thực
                            </h3>
                            <p className="text-gray-600 text-center">
                                Chúng tôi cam kết phục vụ món ăn với công thức
                                chân thực và kỹ thuật truyền thống của Việt Nam.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Utensils className="h-8 w-8 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
                                Chất lượng
                            </h3>
                            <p className="text-gray-600 text-center">
                                Chỉ có nguyên liệu tốt nhất và tươi nhất mà
                                chúng tôi sử dụng để tạo ra món ăn chất lượng
                                cao.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Users className="h-8 w-8 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
                                Sự thân thiện
                            </h3>
                            <p className="text-gray-600 text-center">
                                Chúng tôi tin rằng sự thân thiện và dịch vụ
                                chân thành là phần quan trọng của trải nghiệm
                                ăn uống.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Calendar className="h-8 w-8 text-amber-700" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
                                Đổi mới
                            </h3>
                            <p className="text-gray-600 text-center">
                                Chúng tôi liên tục đổi mới và phát triển, nhưng
                                vẫn tôn trọng gốc rễ và truyền thống ẩm thực
                                Việt Nam.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Milestones Section */}
            <motion.section
                className="py-16 px-4 bg-white"
                ref={milestonesRef}
                initial="hidden"
                animate={milestonesInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={
                                milestonesInView
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{ duration: 0.6 }}
                        >
                            Hành trình của chúng tôi
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={
                                milestonesInView
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Các mốc quan trọng trong hành trình của Ao sen chú Sang
                            cho đến nay
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        variants={staggerContainer}
                    >
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col md:flex-row items-start md:items-center gap-4"
                                variants={cardVariants}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                animate={
                                    milestonesInView
                                        ? { opacity: 1, x: 0 }
                                        : {
                                              opacity: 0,
                                              x: index % 2 === 0 ? -50 : 50,
                                          }
                                }
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <motion.div
                                    className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg font-bold text-xl min-w-[100px] text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {milestone.year}
                                </motion.div>
                                <div className="bg-amber-50 rounded-lg p-6 shadow-sm flex-1">
                                    <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Team Section */}
            <motion.section
                className="py-16 px-4 bg-amber-50"
                ref={teamRef}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className={`text-3xl font-bold text-amber-900 mb-4 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={
                                teamInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.6 }}
                        >
                            Đội ngũ của chúng tôi
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={
                                teamInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Đây là những người tài năng đằng sau món ăn ngon
                            của Ao sen chú Sang
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainerTeam}
                        initial="hidden"
                        animate="show"
                    >
                        {teamMembers.map((member) => (
                            <TeamMemberCard
                                key={member.id}
                                member={
                                    member as unknown as Record<string, string>
                                }
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Reservation CTA */}
            <motion.section
                className="py-12 bg-amber-900 text-white"
                ref={ctaRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                    ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            className={`text-3xl font-bold mb-6 ${playfair.className}`}
                            initial={{ opacity: 0 }}
                            animate={
                                ctaInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Trải nghiệm ăn uống cùng chúng tôi
                        </motion.h2>
                        <motion.p
                            className="text-amber-100 mb-8 text-lg"
                            initial={{ opacity: 0 }}
                            animate={
                                ctaInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Chúng tôi mong đợi sự hiện diện của bạn để thưởng
                            thức đa dạng hương vị vùng miền tại Ao sen chú Sang.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0 }}
                            animate={
                                ctaInView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <motion.div
                                variants={buttonHover}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="/booking/new"
                                    className="bg-white hover:bg-gray-100 text-amber-900 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
                                >
                                    <motion.span
                                        className="flex items-center"
                                        initial={{ x: -5 }}
                                        animate={{ x: 0 }}
                                        transition={{
                                            delay: 0.8,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Calendar className="mr-2 h-5 w-5" />
                                        Đặt chỗ ngay
                                    </motion.span>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={buttonHover}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="/menu"
                                    className="bg-transparent hover:bg-amber-800 text-white border border-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
                                >
                                    <motion.span
                                        className="flex items-center"
                                        initial={{ x: -5 }}
                                        animate={{ x: 0 }}
                                        transition={{
                                            delay: 0.9,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Utensils className="mr-2 h-5 w-5" />
                                        Xem menu của chúng tôi
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default AboutPage;
