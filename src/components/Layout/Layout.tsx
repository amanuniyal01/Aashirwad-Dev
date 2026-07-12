import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import type { RootState } from "../../store/store";
import { useAppSelector } from "../../store/store";

export const Layout = () => {
    const sidebarOpen = useAppSelector((state: RootState) => state.sidebarOpen.isOpen);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;

        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow || "auto";
            document.documentElement.style.overflow = originalHtmlOverflow || "auto";
        }

        return () => {
            document.body.style.overflow = originalOverflow || "auto";
            document.documentElement.style.overflow = originalHtmlOverflow || "auto";
        };
    }, [sidebarOpen]);

    return (
        <div>
            <Header />

            <div className="flex">
                {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/20" />}
                {sidebarOpen && <Sidebar />}

                <main className={`flex-1 mt-16 p-4 ${sidebarOpen ? "ml-64" : ""}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}