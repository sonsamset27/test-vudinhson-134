'use client';
import { useState } from "react";
import { Home, User, Search, Settings } from "lucide-react";
type Tab = "home" | "search" | "profile";
const Navbar = () => {
    const [activeTab, setActiveTab] = useState<Tab>("home");
    const navItems = [
        { id: "home" as Tab, icon: Home, label: "Trang chủ" },
        { id: "search" as Tab, icon: Search, label: "Tìm kiếm" },
        { id: "profile" as Tab, icon: User, label: "Hồ sơ" },
    ];
    return (
        <>
            <div className="fixed bottom-4 left-4 right-4 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl md:hidden">
                <ul className="flex items-center justify-around h-16 px-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <li key={item.id} className="relative flex-1 flex justify-center">
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative ${isActive
                                        ? "text-white scale-110 bg-white/10"
                                        : "text-gray-400 hover:text-gray-200"
                                        }`}
                                >
                                    <Icon size={22} className="transition-transform duration-300" />
                                    {isActive && (
                                        <span className="absolute -bottom-1 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="fixed top-0 left-0 bottom-0 w-20 z-50 bg-black/40 backdrop-blur-xl border-r border-white/5 flex flex-col items-center justify-between py-8 hidden md:flex shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-tr from-red-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 cursor-pointer hover:rotate-6 transition-transform duration-300">
                    <span className="text-white font-black text-xl">V</span>
                </div>
                <ul className="flex flex-col items-center gap-6 w-full px-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <li key={item.id} className="group relative w-full flex justify-center">
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 relative ${isActive
                                        ? "text-white bg-white/10 shadow-inner"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <Icon size={24} className={`transition-transform duration-300 ${isActive ? "scale-105" : "group-hover:scale-110"}`} />
                                    {isActive && (
                                        <span className="absolute left-0 w-1 h-6 bg-red-500 rounded-r-full shadow-[0_0_12px_#ef4444]" />
                                    )}
                                </button>
                                <div className="absolute left-20 bg-neutral-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:left-22 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/5">
                                    {item.label}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button className="flex items-center justify-center w-12 h-12 rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 group relative">
                    <Settings size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                    <div className="absolute left-20 bg-neutral-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:left-22 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/5">
                        Cài đặt
                    </div>
                </button>
            </div>
        </>
    );
};
export default Navbar;