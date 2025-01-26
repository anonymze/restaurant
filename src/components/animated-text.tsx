import { type ReactNode } from "react";
import { motion } from "framer-motion";


interface AnimatedTextProps {
	children: ReactNode;
	href: string;
	title: string;
	className?: string;
	delay?: number;
}

export default function AnimatedText({ children, href, title, className, delay = 0 }: AnimatedTextProps) {
	return (
		<motion.a
			href={href}
			title={title}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				y: {
					type: "spring",
					stiffness: 80,
					damping: 6,
					delay,
				},
				opacity: {
					duration: 0.2,
					delay,
				},
			}}
			className={className}
		>
			{children}
		</motion.a>
	);
}
