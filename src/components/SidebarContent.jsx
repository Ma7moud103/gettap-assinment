import Box from "./Box"
import Management from "./Management"
import Profile from "./Profile"
import HomeIcon from '../assets/home.svg'

const SidebarContent = () => {
    return (
        <ul className="flex flex-col text-sm gap-y-4">
            <li className="flex items-center px-2 py-2 rounded-md bg-logo/10 gap-x-2">
                <img src={HomeIcon} alt="home" />
                <a className="w-full px-1 text-sm rounded-sm text-logo bg-fff" href="#">Home</a>

            </li>
            <Management />
            <Box />
            <div className="w-[90%] rounded-full bg-tags-text-color h-[2px] mt-4"></div>
            <Profile />
        </ul>
    )
}

export default SidebarContent