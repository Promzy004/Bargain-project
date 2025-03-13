import { motion } from "framer-motion";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
]; // Replace with actual data

const InfiniteLoop = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 text-white py-10">
      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        {/* Duplicate items for seamless effect */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="px-6 py-3 bg-gray-800 rounded-lg">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLoop;