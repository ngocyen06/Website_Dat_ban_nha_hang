import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái đóng/mở hộp chat
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Xin chào! Mình là trợ lý AI của Ao sen chú Sang. Mình có thể giúp gì cho bạn về thực đơn hoặc đặt bàn không nè? 😄",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Tự động cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      // Gọi lên API Route chat-ai.ts đã tạo trước đó
      const res = await fetch("/api/chat-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "assistant",
          text: data.text || data.error || "Hệ thống gặp sự cố nhỏ, thử lại sau nha.",
        },
      ]);
    } catch (error) {
      console.error("Lỗi kết nối AI:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "assistant",
          text: "Mất kết nối mạng rồi, kiểm tra lại giúp mình nhé! 🌐",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. NÚT BONG BÓNG CHAT (MESSENGER ICON) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-700 text-white shadow-xl hover:bg-amber-800 transition-all transform hover:scale-105"
        >
          {/* Icon tin nhắn đơn giản */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3h9m-9 3h3m-6.75 4.125a3 3 0 0 0 3-3V16.5h-3a3 3 0 0 0-3 3v.625c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </button>
      )}

      {/* 2. HỘP THOẠI CHAT NHỎ (MESSENGER BOX) */}
      {isOpen && (
        <div className="w-[360px] h-[500px] border border-slate-200 rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header của hộp chat */}
          <div className="bg-amber-700 p-4 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full relative" />
              <span className="font-semibold text-sm">Trợ lý AI - Ao Sen Chú Sang</span>
            </div>
            {/* Nút thu nhỏ/đóng hòm chat */}
            <button onClick={() => setIsOpen(false)} className="hover:text-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
          </div>

          {/* Vùng hiển thị tin nhắn */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    msg.sender === "user"
                      ? "bg-amber-700 text-white rounded-tr-none"
                      : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 text-slate-400 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs animate-pulse">
                  AI đang gõ...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Khung ô nhập tin nhắn */}
          <div className="p-3 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Hỏi về menu, đặt bàn..."
                disabled={isSending}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-600 disabled:bg-slate-100"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isSending || !input.trim()}
                className="rounded-xl bg-amber-700 px-4 py-2 text-sm text-white font-medium hover:bg-amber-800 transition-colors disabled:bg-slate-300"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}