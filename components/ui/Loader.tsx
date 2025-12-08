"use client"

import { motion } from "framer-motion"

export function PremiumLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="relative">
                    <motion.h1
                        className="text-5xl font-bold tracking-tight text-[#25B990]"
                        animate={{
                            opacity: [10, 1, 10],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Quap
                    </motion.h1>

                    {/* Subtle glow effect behind text */}
                    <motion.div
                        className="absolute inset-0 -z-10 blur-2xl bg-sidebar-primary/20"
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                        className="h-full bg-sidebar-primary"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    )
}
