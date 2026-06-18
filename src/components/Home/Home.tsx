import { useSelector } from "react-redux"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import type { RootState } from "../../store/store"

function Home() {
    const sidebarOpen = useSelector((state: RootState) => state.sidebarOpen.isOpen)
    return (
        <div className="relative">
            <Header />
            {sidebarOpen && <Sidebar />}
        </div>
    )
}

export default Home