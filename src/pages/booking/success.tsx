import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import BookingInfo from "@/components/info";

const BookingSuccessPage: NextPage = () => {
    const router = useRouter();

    // If user directly navigates to success page without making a booking,
    // redirect them to the booking page
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            if (!router.query.fromBooking) {
                router.push("/booking");
            }
        }, 100);

        return () => clearTimeout(redirectTimeout);
    }, [router]);

    return (
        <Layout>
            <Head>
                <title>Đặt chỗ thành công - Ao sen chú Sang</title>
                <meta
                    name="description"
                    content="Xác nhận đặt chỗ thành công tại Ao sen chú Sang"
                />
            </Head>

            {/* Success Content */}
            <section className="py-20 px-4 bg-amber-50 min-h-screen flex items-center">
                <div className="container mx-auto max-w-3xl">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
                        <div className="flex justify-center mb-6">
                            <CheckCircle size={80} className="text-green-500" />
                        </div>

                        <h1
                            className={`text-3xl md:text-4xl font-extrabold text-amber-900 mb-4`}
                        >
                            Đặt chỗ thành công!
                        </h1>

                        <p className="text-gray-700 text-lg mb-8">
                            Cảm ơn bạn đã đặt chỗ tại Ao sen chú Sang. Chúng tôi đã nhận được yêu cầu đặt chỗ của bạn và sẽ sớm xác nhận.
                        </p>

                        <BookingInfo />

                        <p className="text-gray-700 mb-8">
                            Bạn có thể xem và quản lý đặt chỗ của mình trong trang hồ sơ.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/profile/bookings"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium"
                            >
                                Xem đặt chỗ của tôi
                            </Link>
                            <Link
                                href="/menu"
                                className="bg-white hover:bg-gray-100 text-amber-900 border border-amber-300 px-6 py-3 rounded-md font-medium"
                            >
                                Xem menu của chúng tôi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BookingSuccessPage;
