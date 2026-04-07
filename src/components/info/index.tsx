import { Booking } from "../../types";

const BookingInfo = ({
    bookings,
    booking,
}: {
    bookings?: Booking[];
    booking?: Booking;
}) => {
    if (
        bookings === undefined &&
        booking !== undefined &&
        booking.status !== "PENDING"
    )
        return null;
    return (
        <div
            className={`${bookings !== undefined ? "bg-white" : "bg-amber-50"} p-6 rounded-lg mb-8`}
        >
            <h2 className="text-xl font-semibold text-amber-800 mb-4">
                Informasi Penting
            </h2>
            <ul className="text-gray-700 space-y-2 text-left">
                {bookings === undefined &&
                    (booking === undefined ||
                        booking?.status === "PENDING") && (
                        <li className="flex items-start">
                            <span className="text-amber-600 mr-2">•</span>
                            <span>
                                Vui lòng thực hiện check-in trước
                                bằng cách sử dụng ID đặt chỗ của bạn 
                                mà chúng tôi đã gửi qua email.
                            </span>
                        </li>
                    )}
                <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                        Khi check-in, bạn có thể đặt món trực tiếp 
                        qua nhân viên của chúng tôi.
                    </span>
                </li>
                <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Vui lòng đến sớm 10 phút trước giờ đặt chỗ.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                        Nếu bạn muốn hủy hoặc thay đổi đặt chỗ, 
                        vui lòng thực hiện trước ít nhất 3 giờ.

                    </span>
                </li>
            </ul>
        </div>
    );
};

export default BookingInfo;
