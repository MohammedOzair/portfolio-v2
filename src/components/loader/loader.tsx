import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export const Loader = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000); // 3120 + 6000 + 80 buffer
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="opening-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            style={{
              color: "rgb(197, 255, 65)",
              fontSize: "5.5rem",
              fontWeight: 600,
              fontFamily: "'Sacramento', cursive",
            }}
          >
            <Typewriter
              words={["Mohammed Ozair Mohiuddin"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={0}
              delaySpeed={0}
            />
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
