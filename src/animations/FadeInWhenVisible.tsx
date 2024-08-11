import { motion } from "framer-motion";
import React from "react";

function FadeInWhenVisible({ children, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
