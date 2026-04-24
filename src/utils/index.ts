import { OrderItem } from "@/types";

export function formatVND(amount: number): string {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export const calculateOrderTotal = (items: OrderItem[] | undefined) => {
    if (!items) return 0;
    return items.reduce((total, item) => {
        return total + item.menu.price * item.quantity;
    }, 0);
};
