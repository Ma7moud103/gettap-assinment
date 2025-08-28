import { UseMainStore } from "@/store/MainStore"
import { useEffect } from "react"
import User from "./User"
import { Checkbox } from "@/components/ui/checkbox"

const TableContent = () => {
    const posts = UseMainStore((state) => state.posts)
    console.log(posts)
    const getPosts = UseMainStore((state) => state.fetchPosts)


    useEffect(() => {
        getPosts()
    }, [])
    return (
        <section className='mt-4 grid xl:gap-y-2 '>
            <header className="hidden xl:grid xl:grid-cols-4 xl:gap-4 xl:w-full xl:bg-table-header-color xl:rounded-[12px] xl:items-center xl:text-center  xl:text-text-gray-subtitles capitalize py-3">
                <div className="flex ms-6 items-center gap-x-2 ">
                    <Checkbox />
                    <h3>user</h3>
                </div>
                <h3>phone</h3>
                <h3>company</h3>
                <h3>date</h3>
            </header>

            <div className="border-tags-text-color border py-2 rounded-[12px] grid grid-cols-4 text-center w-full">
                <User />
                <h5>fa</h5>
                <h5>fa</h5>
                <h5>fa</h5>
            </div>

        </section>
    )
}

export default TableContent