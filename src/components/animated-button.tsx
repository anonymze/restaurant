import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


interface AnimatedButtonProps {
  text: string;
  className?: string;
}

export default function AnimatedButton({ text, className }: AnimatedButtonProps) {
  return (
    <motion.div
		className="w-fit h-fit mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ stiffness: 400, damping: 10, duration: 0.15}}
    >
      <Button variant="outline" className={className}>
        {text}
      </Button>
    </motion.div>
  );
} 