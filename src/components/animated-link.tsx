import { cn } from "@/utils/libs/tailwind";
import { motion } from "framer-motion";


interface AnimatedLinkProps {
	children: React.ReactNode;
	title: string;
	href: string;
	className?: string;
}

export default function AnimatedLink({ children, title, href, className }: AnimatedLinkProps) {
	return (
		<motion.a
			href={href}
			title={title}
			whileHover={{ scale: 1.02 }}
			transition={{ stiffness: 400, damping: 10, duration: 0.2 }}
			className={cn("h-fit px-6 py-2 border-1 border-white text-white uppercase md:py-3 ", className)}
		>
			{children}
		</motion.a>
	);
}
