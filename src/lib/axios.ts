import { useAuthStore } from "@/store/authStore";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
    baseURL: "/api",
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    if (token) {
        // Kiểm tra xem token đã hết hạn chưa
        try {
            const decodedToken = jwtDecode(token) as { exp: number };
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                // Token đã hết hạn, đăng xuất user
                useAuthStore.getState().logout();
                return config;
            }
        } catch (error) {
            // Token không hợp lệ, đăng xuất user
            console.log(error);
            useAuthStore.getState().logout();
            return config;
        }

        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        // Nếu lỗi 401 (Unauthorized), đăng xuất user
        if (error.response?.status === 401) {
            useAuthStore.getState().logout();
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
