import { useRef, useState } from "react"
import userImg from "../../assets/user-image.jpg"
import "./Header.css"
import type { AppDispatch } from "../../store/store"
import { useDispatch } from "react-redux"
import { openSidebar } from "../../Slices/appSlice"
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    const sidebarRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (
    //             sidebarRef.current &&
    //             !sidebarRef.current.contains(event.target as Node)
    //         ) {
    //             setIsOpen(false)
    //         }
    //     }

    //     document.addEventListener("click", handleClickOutside)

    //     return () => {
    //         document.removeEventListener("click", handleClickOutside)
    //     }
    // }, [])

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
        <div className="flex justify-between px-6 bg-black items-center">

            {/* Sidebar btn */}
            <div className="flex sidebar-logo gap-3">
                <div onClick={() => dispatch(openSidebar())} className="text-white">
                    ☰
                </div>
                <div onClick={() => navigate("/")} className="site-logo">
                    <img
                        src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp"
                        height={130}
                        width={130}
                    />
                </div>
            </div>

            <div>
                <ul className="header-list flex gap-8 items-center py-2 justify-center text-white">
                    <Link to="/interview"><li >Interview Practice</li></Link>
                    <li>Courses</li>
                    <li>Explore</li>
                    <li>Streak</li>
                    <li>
                        <div className="flex gap-2 items-center justify-center">
                            <img
                                onClick={() => setIsOpen((o) => !o)}
                                className="rounded-full h-10"
                                src={userImg}
                                alt="user picture"
                            />
                            <span>{isOpen ? "˄" : "˅"}</span>
                        </div>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div
                    ref={sidebarRef}
                    className="bg-black px-6 rounded-lg absolute right-5 top-15"
                >
                    <ul className="text-white">
                        {list.map((item) => (
                            <li
                                className="m-2 text-sm hover:cursor-pointer hover:text-blue-300"
                                key={item.id}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}

export default Header 