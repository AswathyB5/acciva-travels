import { motion } from "framer-motion";

// Decorative for now — intentionally not a link/clickable yet.
const WhatsAppButton = () => {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50"
    >
      <div className="relative flex w-14 h-14 sm:w-15 sm:h-15 items-center justify-center">
        {/* Pulse rings */}
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />

        <div className="relative flex w-full h-full items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_20px_rgba(37,211,102,0.5)]">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.68 4.04 1.83 5.63L2.05 22l4.62-1.87a9.83 9.83 0 0 0 5.37 1.55h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12 1.02 1.05-3.05-.2-.32a8.2 8.2 0 0 1-1.24-4.35c0-4.54 3.7-8.24 8.24-8.24a8.16 8.16 0 0 1 5.84 2.42 8.15 8.15 0 0 1 2.4 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12s-.65.81-.8.98-.29.19-.54.06a6.75 6.75 0 0 1-1.99-1.23 7.47 7.47 0 0 1-1.38-1.72c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.44a1.6 1.6 0 0 0 .25-.41.46.46 0 0 0-.02-.44c-.06-.12-.57-1.36-.78-1.87-.2-.48-.41-.42-.57-.43h-.48a.94.94 0 0 0-.67.31 2.8 2.8 0 0 0-.88 2.09c0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79a14.4 14.4 0 0 0 1.43.53 3.45 3.45 0 0 0 1.58.1 2.58 2.58 0 0 0 1.69-1.19 2.09 2.09 0 0 0 .14-1.19c-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
