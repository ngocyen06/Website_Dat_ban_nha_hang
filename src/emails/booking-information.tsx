import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Button,
    Hr,
    Link,
} from "@react-email/components";
import * as React from "react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface BookingConfirmationEmailProps {
    bookingId: string;
    customerName: string;
    dateTime: string;
    tableNumber: number;
    guestCount: number;
    duration: number;
    specialRequest?: string;
}

export const BookingConfirmationEmail = ({
    bookingId,
    customerName,
    dateTime,
    tableNumber,
    guestCount,
    duration,
    specialRequest,
}: BookingConfirmationEmailProps) => {
    const formattedDate = format(new Date(dateTime), "EEEE, dd MMMM yyyy", {
        locale: localeId,
    });
    const formattedTime = format(new Date(dateTime), "HH:mm", {
        locale: localeId,
    });

    return (
        <Html>
            <Head />
            <Preview>Xác nhận đặt chỗ của bạn tại Cita Nusa Resto</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={header}>Cita Nusa Resto</Heading>
                    <Section style={section}>
                        <Heading as="h2" style={subheader}>
                            Đặt chỗ của bạn đã được xác nhận!
                        </Heading>
                        <Text style={text}>Xin chào {customerName},</Text>
                        <Text style={text}>
                            Chúng tôi muốn thông báo rằng đặt chỗ của bạn tại Cita
                            Nusa Resto đã được xác nhận. Dưới đây là chi tiết
                            đặt chỗ của bạn:
                        </Text>

                        <Section style={detailsSection}>
                            <Text style={detailRow}>
                                <strong>ID đặt chỗ:</strong>{" "}
                                {bookingId.substring(0, 8).toUpperCase()}
                            </Text>
                            <Text style={detailRow}>
                                <strong>Ngày:</strong> {formattedDate}
                            </Text>
                            <Text style={detailRow}>
                                <strong>Thời gian:</strong> {formattedTime} WIB
                            </Text>
                            <Text style={detailRow}>
                                <strong>Bàn:</strong> #{tableNumber}
                            </Text>
                            <Text style={detailRow}>
                                <strong>Số lượng khách:</strong> {guestCount} người
                            </Text>
                            <Text style={detailRow}>
                                <strong>Thời lượng:</strong> {duration} phút
                            </Text>
                            {specialRequest && (
                                <Text style={detailRow}>
                                    <strong>Yêu cầu đặc biệt:</strong>{" "}
                                    {specialRequest}
                                </Text>
                            )}
                        </Section>

                        <Hr style={hr} />

                        <Text style={text}>
                            Vui lòng đến đúng giờ. Nếu bạn cần thay đổi hoặc hủy đặt chỗ, vui lòng liên hệ với chúng tôi ít nhất 3 giờ trước thời gian đến của bạn.
                        </Text>

                        <Button
                            style={button}
                            href="https://citanusaresto.com/reservasi"
                        >
                            Quản lý đặt chỗ của bạn
                        </Button>

                        <Text style={text}>
                            Chúng tôi cảm ơn sự tin tưởng của bạn và háo hức chào đón bạn tại Cita Nusa Resto!
                        </Text>

                        <Text style={regards}>Trân trọng,</Text>
                        <Text style={signature}>Đội ngũ Cita Nusa Resto</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Đường Nusa Indah số 123, Jakarta Selatan • 021-12345678
                    </Text>
                    <Text style={footer}>
                        <Link href="https://citanusaresto.com">
                            citanusaresto.com
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#f5f2ed",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0",
    maxWidth: "600px",
};

const header = {
    backgroundColor: "#8B4513",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center" as const,
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
};

const section = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const subheader = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: "20px",
};

const text = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#333",
};

const detailsSection = {
    backgroundColor: "#f9f5f0",
    padding: "15px",
    borderRadius: "5px",
    margin: "20px 0",
};

const detailRow = {
    margin: "8px 0",
    fontSize: "15px",
};

const button = {
    backgroundColor: "#D2691E",
    color: "#ffffff",
    padding: "12px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
    margin: "20px 0",
};

const hr = {
    borderColor: "#E5E5E5",
    margin: "20px 0",
};

const regards = {
    fontSize: "16px",
    color: "#333",
    marginBottom: "5px",
};

const signature = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#8B4513",
};

const footer = {
    fontSize: "14px",
    color: "#666666",
    textAlign: "center" as const,
    margin: "5px 0",
};

export default BookingConfirmationEmail;
