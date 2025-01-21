import { jsx } from 'react/jsx-runtime';
import { c as cn } from './layout_DDTLHbi7.mjs';
import { motion } from 'framer-motion';
import 'react';

const EspaceImg = new Proxy({"src":"/_astro/espace.BwTTWKAi.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/espace.webp";
							}
							
							return target[name];
						}
					});

const Cave2Img = new Proxy({"src":"/_astro/plat.Pbg5uVhw.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/plat.webp";
							}
							
							return target[name];
						}
					});

function AnimatedLink({ children, title, href, className }) {
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href,
      title,
      whileHover: { scale: 1.02 },
      transition: { stiffness: 400, damping: 10, duration: 0.2 },
      className: cn("h-fit px-6 py-2 border-1 border-white text-white uppercase md:py-3 ", className),
      children
    }
  );
}

function AnimatedText({ children, className, delay = 0 }) {
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: {
        y: {
          type: "spring",
          stiffness: 80,
          damping: 6,
          delay
        },
        opacity: {
          duration: 0.2,
          delay
        }
      },
      className,
      children
    }
  );
}

const LogoSmall = new Proxy({"src":"/_astro/logo_small.nezlwoI1.webp","width":1025,"height":1617,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/logo_small.webp";
							}
							
							return target[name];
						}
					});

export { AnimatedText as A, Cave2Img as C, EspaceImg as E, LogoSmall as L, AnimatedLink as a };
