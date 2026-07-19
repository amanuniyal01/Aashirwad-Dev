import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import type { RootState } from "../../store/store";
import { useAppSelector } from "../../store/store";

const LOCKED_PATHS = ["interview"];

const Layout = () => {
    const sidebarOpen = useAppSelector((state: RootState) => state.sidebarOpen.isOpen);
    const currentPath = useLocation();

    const isLocked = LOCKED_PATHS.some((path) => currentPath.pathname.startsWith(path));
    const shouldLock = sidebarOpen && isLocked;

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;

        if (shouldLock) {
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
    }, [shouldLock]);

    return (
        <div>
            <Header />

            <div className="flex">
                {shouldLock && <div className="fixed inset-0 z-40 bg-black/20" />}
                {sidebarOpen && <Sidebar />}

                <main className={`flex-1 mt-16 p-4 ${sidebarOpen ? "ml-64" : ""}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
export default Layout