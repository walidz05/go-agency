import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040814]"
    >
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-[#16356A]" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-secondary border-r-primary" />
        </div>

        <h1 className="mt-8 text-3xl font-extrabold text-white">
          Go<span className="text-secondary">Boosted</span>
        </h1>

        <p className="mt-3 text-sm text-gray-400">Loading Experience...</p>
      </div>
    </motion.div>
  );
};

export default Loader;
