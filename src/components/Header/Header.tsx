import { useState } from "react"
import userImg from "../../assets/user-image.jpg"
import "./Header.css"
import type { AppDispatch, RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { openSidebar } from "../../Slices/appSlice"
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const sidebarOpen = useSelector((state: RootState) => state.sidebarOpen.isOpen)
    const list = [
        { id: 1, name: "Profile" },
        { id: 2, name: "Settings" },
        { id: 3, name: "Billing" },
        { id: 4, name: "Become Affiliate" },
        { id: 5, name: "Need Help" },
        { id: 6, name: "Light Mode" },
        { id: 7, name: "Logout" },
    ]
    return (
        <div className="flex justify-between px-6 bg-black items-center ">

            {/* Sidebar btn */}
            <div className="flex sidebar-logo gap-3 ">
                <div onClick={() => dispatch(openSidebar())} className="text-white">
                    =
                </div>
                <div className="site-logo">
                    <img src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp" height={130} width={130} />
                </div>
            </div>
            <div >
                <ul className="header-list flex gap-8 items-center py-2 justify-center text-white">
                    <li>Interview Practice</li>
                    <li>Courses</li>
                    <li>Explore</li>
                    <li>Streak</li>
                    <li>
                        <div className="flex gap-2 items-center justify-center">
                            <img onClick={() => setIsOpen(o => !o)} className="rounded-full h-10" src={userImg} alt="user picture" />
                            <span>{isOpen ? "˄" : "˅"}</span>
                        </div>
                    </li>
                </ul>

            </div>
            {isOpen && <div className="bg-black p-2 rounded-lg absolute right-5 top-15">
                {list.map((item) => (
                    <ul className="text-white ">
                        <li className="m-1 text-sm hover:cursor-pointer hover:text-blue-300" key={item.id}>
                            {item.name}
                        </li>
                    </ul>

                ))}
                Aman
            </div>}

        </div>
    )
}

export default Header