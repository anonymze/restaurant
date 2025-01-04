import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


interface AnimatedButtonProps {
  text: string;
  className?: string;
}

export default function AnimatedButton({ text, className }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ stiffness: 400, damping: 10, duration: 0.15 }}
    >
      <Button className={className}>
        {text}
      </Button>
    </motion.div>
  );
} 