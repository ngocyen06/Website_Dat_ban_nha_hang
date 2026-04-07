import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../lib/axios";
import { LoaderCircle, User, Mail, Phone, Save, Edit, X } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";

const profileSchema = z.object({
    name: z.string().min(3, "Tên phải có ít nhất 3 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileForm = ({
    user,
}: {
    user: { name: string; email: string; phone: string };
}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { updateUser } = useAuthStore();

    const { register, handleSubmit, formState, reset } =
        useForm<ProfileFormData>({
            resolver: zodResolver(profileSchema),
            defaultValues: {
                name: "",
                email: "",
                phone: "",
            },
        });

    // Update form khi data user berubah
    useEffect(() => {
        if (user) {
            reset({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
            });
        }
    }, [user, reset]);

    const { mutate: profileMutate, isPending } = useMutation({
        mutationFn: async (data: ProfileFormData) => {
            const response = await axiosInstance.patch("/profile", data);
            return response.data;
        },
        onSuccess: (data) => {
            setIsEdit(false);
            if (data.user) {
                updateUser({
                    name: data.user.name,
                    email: data.user.email,
                    phone: data.user.phone,
                });
            }
            toast.success("Hồ sơ đã được cập nhật thành công");
        },
        onError: () => {
            toast.error("Cập nhật hồ sơ thất bại");
        },
    });

    const onSubmit = (data: ProfileFormData) => {
        profileMutate(data);
    };

    return (
        <div className="mt-2">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-amber-900">
                    Thông tin hồ sơ
                </h3>
                {!isEdit ? (
                    <button
                        type="button"
                        className="text-amber-600 hover:text-amber-800 font-medium flex items-center text-sm"
                        onClick={() => setIsEdit(true)}
                    >
                        <Edit className="h-4 w-4 mr-1" />
                        Chỉnh sửa hồ sơ
                    </button>
                ) : (
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 font-medium flex items-center text-sm"
                        onClick={() => setIsEdit(false)}
                    >
                        <X className="h-4 w-4 mr-1" />
                        Hủy
                    </button>
                )}
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                    <div className="relative">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Họ và tên
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="name"
                                autoComplete="name"
                                readOnly={!isEdit}
                                {...register("name")}
                                // ref={nameInputRef}
                                className={`appearance-none rounded-md relative block w-full pl-10 px-3 py-3 border ${
                                    isEdit
                                        ? "border-amber-300 bg-white"
                                        : "border-gray-200 bg-gray-50"
                                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm`}
                                placeholder="Họ và tên"
                            />
                        </div>
                        {formState.errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {formState.errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                readOnly={!isEdit}
                                {...register("email")}
                                className={`appearance-none rounded-md relative block w-full pl-10 px-3 py-3 border ${
                                    isEdit
                                        ? "border-amber-300 bg-white"
                                        : "border-gray-200 bg-gray-50"
                                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm`}
                                placeholder="Email"
                            />
                        </div>
                        {formState.errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {formState.errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Số điện thoại
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="phone"
                                readOnly={!isEdit}
                                {...register("phone")}
                                className={`appearance-none rounded-md relative block w-full pl-10 px-3 py-3 border ${
                                    isEdit
                                        ? "border-amber-300 bg-white"
                                        : "border-gray-200 bg-gray-50"
                                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm`}
                                placeholder="Số điện thoại"
                            />
                        </div>
                        {formState.errors.phone && (
                            <p className="mt-1 text-sm text-red-600">
                                {formState.errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>

                {isEdit && (
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <LoaderCircle className="h-5 w-5 animate-spin mr-2" />
                            ) : (
                                <Save className="h-5 w-5 mr-2" />
                            )}
                            Lưu thay đổi
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ProfileForm;
