import { cn } from "@/utils/libs/tailwaind";
import { motion } from "framer-motion";


interface AnimatedButtonProps {
	children: React.ReactNode;
	title: string;
	href: string;
	className?: string;
}

export default function AnimatedButton({ children, title, href, className }: AnimatedButtonProps) {
	return (
		<motion.a
			href={href}
			title={title}
			whileHover={{ scale: 1.05 }}
			transition={{ stiffness: 400, damping: 10, duration: 0.1 }}
			className={cn("h-fit px-6 py-2 border-1 border-white text-white uppercase md:py-3 ", className)}
		>
			{children}
		</motion.a>
	);
}
