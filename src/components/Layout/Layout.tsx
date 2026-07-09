import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import type { RootState } from "../../store/store";

function Layout() {
    const sidebarOpen = useSelector(
        (state: RootState) => state.sidebarOpen.isOpen
    );

    return (
        <div className="relative">
            <Header />
            {sidebarOpen && <Sidebar />}

            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;