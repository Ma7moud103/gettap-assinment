import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import CloseIcon from '../assets/close.png'
import RightIcon from '../assets/right.png'
const Box = () => {
    return (
        <div className="flex flex-col gap-y-2 border rounded-xl p-2 w-[90%] mt-4 border-tags-text-color shadow">
            <div className="flex items-center justify-between">

                <div className="*:data-[slot=avatar]:ring-background items-center flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale border px-2 py-1 rounded-[100px] border-tags-text-color shadow">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>

                    <span className="ms-4 mx-2 text-text-mainColor text-[1rem]">+4</span>
                </div>
                <button type="button" className="cursor-pointer">
                    <img src={CloseIcon} alt="close" />
                </button>
            </div>
            <div>
                <h3 className="text-base font-medium text-text-mainColor">Onboard your team members</h3>
                <Progress value={33} />
                <p className="text-sm text-text-gray-subtitles">Upload your team via CSV</p>
            </div>

            <div className="flex items-center gap-x-2">
                <a className="text-base text-medium text-text-mainColor underline" href="#">Onboard your team</a>
                <img src={RightIcon} alt="right arrow" />
            </div>

        </div>
    )
}

export default Box