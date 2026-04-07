import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Hoạt ảnh container cho hiệu ứng phân lớp (stagger)
// const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2,
//         },
//     },
// };

// Hoạt ảnh cho từng card
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

// Hoạt ảnh cho nội dung xuất hiện khi hover
const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const TeamMemberCard = ({ member }: { member: Record<string, string> }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl h-80"
            variants={cardVariants}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 },
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Container cho hình ảnh luôn phủ kín card */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={`/images/team/${member.image}`}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                    style={{
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                />
            </div>

            {/* Lớp phủ tối xuất hiện khi hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Thông tin xuất hiện khi hover */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-full"
                variants={infoVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
            >
                <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                </h3>
                <p className="text-amber-400 font-medium text-sm mb-3">
                    {member.position}
                </p>
                <p className="text-gray-200 text-sm">{member.bio}</p>
            </motion.div>
        </motion.div>
    );
};

export default TeamMemberCard;
