import AvatarIcon from "../assets/avatar.svg"
import SearchIcon from "../assets/searchbar.png"
import NotificationIcon from "../assets/notification.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                    <img
                        src={AvatarIcon}
                        alt="avatar"
                        className="object-cover w-full h-full rounded-full"
                    />
                    <span className="absolute bottom-0 w-2 h-2 rounded-full end-0 bg-text-green ring-2 ring-white"></span>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-text-mainColor">Sophia Williams</h2>
                    <p className="text-xs text-text-gray-subtitles">Welcome back to Synergy 👋🏻</p>
                </div>
            </div>
            {/* searchbar & notifications */}
            <div className="flex items-center gap-x-3">
                <button className="cursor-pointer" type="button">
                    <img src={SearchIcon} alt="Search" />
                </button>
                <button className="cursor-pointer" type="button">
                    <img src={NotificationIcon} alt="Notifications" />
                </button>
            </div>
        </header>
    )
}

export default Header