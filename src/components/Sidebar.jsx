
import logo from "../assets/logo.svg"
import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import SidebarContent from "./SidebarContent"



const Sidebar = () => {

    return (
        <section className="flex items-center justify-between px-2 py-4 border-b border-tags-text-color md:border-e md:block md:min-h-screen md:overflow-y-auto">
            <img src={logo} alt="logo" className="object-contain h-8" />
            {/* <Menu className="cursor-pointer text-text-mainColor" /> */}

            <Sheet className="md:hidden">
                <SheetTrigger>
                    <Menu className="cursor-pointer text-text-mainColor md:hidden" />
                </SheetTrigger>
                <SheetContent>
                    <ScrollArea orientation={"horizontal"} className="min-h-screen px-2 py-4 pe-5 md:hidden ">
                        <SidebarContent />
                    </ScrollArea>
                </SheetContent>
            </Sheet>



            <div className="hidden md:block">
                <SidebarContent />
            </div>
        </section>
    )
}

export default Sidebar