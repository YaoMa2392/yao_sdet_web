import { motion } from "framer-motion";

const ChallengeTable = ({ challenges }) => {
    return (
        <section className="performance-section4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="overflow-x-auto rounded-xl shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4"
            >
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
                    <tr>
                        <th className="text-left p-6 text-lg font-semibold">ID</th>
                        <th className="text-left p-6 text-lg font-semibold">Challenge</th>
                        <th className="text-left p-6 text-lg font-semibold">Solution</th>
                        <th className="text-left p-6 text-lg font-semibold">Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {challenges.map((item, index) => (
                        <motion.tr
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                backgroundColor: "#f9f9f9",
                            }}
                            transition={{ duration: 0.3 }}
                            className="border-b cursor-pointer"
                        >
                            <td className="p-6 text-lg text-gray-800 font-medium">{index + 1}</td>
                            <td className="p-6 text-lg text-gray-800 font-medium">{item.challenge}</td>
                            <td className="p-6 text-lg text-gray-600">{item.solution}</td>
                            <td className="p-6 text-lg text-gray-600">{item.result}</td>
                        </motion.tr>
                    ))}
                    </tbody>
                </table>
            </motion.div>
        </section>
    );
};

export default ChallengeTable;
