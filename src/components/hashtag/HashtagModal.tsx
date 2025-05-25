import { motion, AnimatePresence } from "framer-motion";
import HashtagGenerator from "@/components/HashtagGenerator";
import { IoClose } from "react-icons/io5";

interface HashtagModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HashtagModal({ isOpen, onClose }: HashtagModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-[200]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl shadow-2xl border border-accent/10 rounded-2xl z-[201]"
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-accent/10 transition-colors"
              >
                <IoClose className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6">
                <HashtagGenerator />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 