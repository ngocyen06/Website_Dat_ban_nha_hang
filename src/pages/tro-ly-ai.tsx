import { useState } from "react";
import Layout from "../components/layout/Layout"; 

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
}

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Xin chào! Mình là trợ lý AI của Ao sen chú Sang. Hôm nay bạn cần mình hỗ trợ thông tin gì về thực đơn hay đặt bàn không nè? 😄",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    // 1. Hiển thị tin nhắn của User lên màn hình
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      // 2. Gọi đến API route vừa tạo ở Bước 3
      const res = await fetch("/api/chat-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      // 3. Hiển thị tin nhắn trả lời từ Gemini
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "assistant",
          text: data.text || data.error || "Hệ thống gặp sự cố nhỏ, thử lại sau nha bạn.",
        },
      ]);
    } catch (error) {
      console.error("Lỗi Frontend:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "assistant",
          text: "Mất kết nối mạng rồi, bạn kiểm tra lại đường truyền xem sao nhé! 🌐",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Trợ Lý AI - Ao sen chú Sang</h1>
          <p className="text-slate-500 mt-2">Hỏi bất cứ điều gì về thực đơn, không gian hoặc hướng dẫn đặt chỗ</p>
        </div>

        <div className="border border-slate-200 rounded-2xl bg-white shadow-md flex flex-col h-[550px]">
          {/* Khung chứa nội dung tin nhắn */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-slate-100 text-slate-800 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-500 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm animate-pulse">
                  AI đang suy nghĩ...
                </div>
              </div>
            )}
          </div>

          {/* Ô nhập liệu tin nhắn nằm ngay dưới khung chat */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Nhập câu hỏi của bạn tại đây..."
                disabled={isSending}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-slate-100"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isSending || !input.trim()}
                className="rounded-xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}