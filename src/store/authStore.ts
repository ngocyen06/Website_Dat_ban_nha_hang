import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (user: User, token: string) => void;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;
    checkAuth: () => boolean;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            login: (user, token) => set({ user, token, isAuthenticated: true }),
            logout: () =>
                set({ user: null, token: null, isAuthenticated: false }),
            updateUser: (userData) => {
                const currentUser = get().user;
                if (currentUser) {
                    set({
                        user: { ...currentUser, ...userData },
                    });
                }
            },
            checkAuth: () => {
                const token = get().token;

                if (!token) {
                    set({ isAuthenticated: false });
                    return false;
                }

                try {
                    // Giải mã token để lấy thời gian hết hạn
                    const decoded = jwtDecode(token) as { exp: number };
                    const currentTime = Date.now() / 1000;

                    // Nếu token hết hạn
                    if (decoded.exp < currentTime) {
                        // Đăng xuất người dùng nếu token hết hạn
                        set({
                            user: null,
                            token: null,
                            isAuthenticated: false,
                        });
                        return false;
                    }

                    return true;
                } catch (error) {
                    // Token không hợp lệ, đăng xuất người dùng
                    console.log(error);
                    set({ user: null, token: null, isAuthenticated: false });
                    return false;
                }
            },
        }),
        {
            name: "auth-storage",
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.checkAuth();
                }
            },
        }
    )
);
