import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);
const emailDev = process.env.EMAIL_DEV;

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    email: z.string().email("Định dạng email không hợp lệ"),
    subject: z.string().min(3, "Chủ đề phải có ít nhất 3 ký tự"),
    message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Only allow POST method
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        // Validate request body
        const validatedData = contactSchema.parse(req.body);
        const { name, email, subject, message } = validatedData;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: emailDev!,
            replyTo: email,
            subject: `[Contact Form] ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b45309;">Tin nhắn từ biểu mẫu liên hệ website</h2>
          <p><strong>Tên:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Chủ đề:</strong> ${subject}</p>
          <hr style="border: 1px solid #f3f4f6; margin: 20px 0;" />
          <div>
            <p><strong>Tin nhắn:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <hr style="border: 1px solid #f3f4f6; margin: 20px 0;" />
          <p style="font-size: 12px; color: #6b7280;">
            Tin nhắn này được gửi từ biểu mẫu liên hệ của website Cita Nusa Resto.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return res.status(500).json({
                message: "Gửi email thất bại. Vui lòng thử lại sau.",
                error: error.message,
            });
        }

        // Success response
        return res.status(200).json({
            message: "Gửi tin nhắn thành công",
            id: data?.id,
        });
    } catch (error) {
        // Handle zod validation errors
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Xác thực thất bại",
                errors: error.errors,
            });
        }

        // Handle other errors
        console.error("Contact form error:", error);
        return res.status(500).json({
            message: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
        });
    }
}
