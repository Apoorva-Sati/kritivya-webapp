'use client'
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between gap-6 p-2.5">
            <div>
                <h2 className="text-3xl font-bold text-pink-600">About Kritivya</h2>
                <p className="text-gray-700 mt-2">
                    Beautiful pipe cleaner flowers crafted with love 🌸
                </p>
            </div>
            <div className="flex flex-row gap-4">
                <button
                    onClick={() => router.push("/login")}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
                >
                    Login
                </button>

                <button
                    onClick={() => router.push("/signup")}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
                >
                    SignUp
                </button>
            </div>

        </div>

    );
};

export default Home;
