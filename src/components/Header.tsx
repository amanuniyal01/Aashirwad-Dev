import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex justify-between px-6 bg-black items-center ">

            {/* Sidebar btn */}
            <div className="flex gap-3 ">
                <div className="text-white">
                    =
                </div>
                <div>
                    <img height={130} width={130} src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp" />
                </div>
            </div>
            <div >
                <ul className="flex gap-8 items-center py-2 justify-center text-white">
                    <li>Interview Practice</li>
                    <li>Courses</li>
                    <li>Explore</li>
                    <li>Streak</li>
                    <li>
                        <div className="flex gap-2 items-center justify-center">
                            <img onClick={() => setIsOpen(o => !o)} className="rounded-full h-10" src="https://lh3.googleusercontent.com/a/ACg8ocI3DRYAUlcRj7B4UBziOkpw-L_HzuSCOH1vS6agBl68Zh4MFvoUwQ=s96-c" alt="user picture" />
                            <span>{isOpen ? "▲" : "▼"}</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header