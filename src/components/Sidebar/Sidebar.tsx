import { useDispatch, useSelector } from "react-redux"
import "./Sidebar.css"
import type { AppDispatch, RootState } from "../../store/store"
import { closeSidebar } from "../../Slices/appSlice"
function Sidebar() {

    const list = ["Planner",
        "Blog",
        "Portfolio showcase",
        "Resources",
        "Roadmaps",
        "DSA Sheet",
        "Project Ideas",
        "Write a Blog",
        "Certificates",
        "Gift a course",
        "Feedback"]
    const dispatch = useDispatch<AppDispatch>()
    const sidebarOpen = useSelector((state: RootState) => state.sidebarOpen.isOpen)
    return (
        <div className=" sidebar-container z-50 absolute bg-black ">
            <span
                onClick={() => dispatch(closeSidebar())}
                className="cancel-btn text-white ">x</span>
            {list.map((l, index) => (
                <div className="py-3 px-15 text-white">
                    <ul>
                        <li key={index}>
                            {l}
                        </li>
                    </ul>
                </div>
            ))}


        </div>
    )
}

export default Sidebar