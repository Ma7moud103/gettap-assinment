import AvatarIcon from '../assets/avatar.svg'
import CheckedIcon from '../assets/marker.png'

const Profile = () => {
    return (
        <div className="flex items-center gap-x-4">
            <img src={AvatarIcon} alt="avatar" />
            <div>
                <div className="flex items-center gap-x-2 ">
                    <h2 className="text-text-mainColor font-semibold text-sm">Sophia Williams</h2>
                    <img src={CheckedIcon} alt="star" />
                </div>
                <p className="text-xs text-text-gray-subtitles">sophia@alignui.com</p>
            </div>
        </div>
    )
}

export default Profile