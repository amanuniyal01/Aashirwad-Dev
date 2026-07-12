import "./Sidebar.css"
import { useAppDispatch } from "../../store/store"
import { closeSidebar } from "../../Slices/appSlice"

function Sidebar() {
    const list = [
        "Planner",
        "Blog",
        "Portfolio showcase",
        "Resources",
        "Roadmaps",
        "DSA Sheet",
        "Project Ideas",
        "Write a Blog",
        "Certificates",
        "Gift a course",
        "Feedback",
    ];

    const dispatch = useAppDispatch();

    return (
        <div className="sidebar-container fixed left-0 top-0 z-50 h-screen w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                <img
                    src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp"
                    alt="site logo"
                    className="h-10 w-auto"
                />
                <span
                    onClick={() => dispatch(closeSidebar())}
                    className="cancel-btn text-black"
                >
                    ×
                </span>
            </div>

            <div className="px-4 py-3">
                {list.map((l, index) => (
                    <div key={`${l}-${index}`} className="py-3 font-semibold text-black">
                        <ul>
                            <li>{l}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar