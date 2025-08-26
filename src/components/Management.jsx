import {

    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import MembersIcon from '../assets/members.svg'
import DepartmentsIcon from '../assets/departments.svg'
import AdjustmentsIcon from '../assets/bulk.svg'
import LeadsIcon from '../assets/leads.svg'
import TagsIcon from '../assets/tags.svg'
import CustomizationsIcon from '../assets/customizations.svg'
import ProductsIcon from '../assets/products.svg'
import IntegrationsIcon from '../assets/integrations.svg'
import SettingsIcon from '../assets/settings.svg'
import FAQsIcon from '../assets/faqs.svg'
import Link from "./Link"
import { useState } from "react"

const Management = () => {
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <>
            <div className="flex flex-col gap-y-1">
                {/* <SheetHeader className='md:hidden'>
                    <SheetTitle className="uppercase text-text-gray-subtitles">
                        team management
                    </SheetTitle>
                </SheetHeader> */}
                <h3 className="mb-2 uppercase text-text-gray-subtitles">team management</h3>

                <Link image={MembersIcon} name={"members"} />
                <Link image={DepartmentsIcon} name={"departments"} />
                <Link image={AdjustmentsIcon} name={"bulk adjustments"} />
            </div>
            <div className="flex flex-col gap-y-1">
                {/* <SheetHeader className='md:hidden'>
                    <SheetTitle className="uppercase text-text-gray-subtitles">
                        leads management
                    </SheetTitle>
                </SheetHeader> */}
                <h3 className="mb-2 uppercase text-text-gray-subtitles">leads management</h3>

                <Link image={LeadsIcon} name={"leads"} />
                <Link image={TagsIcon} name={"tags"} />
            </div>
            <div className="flex flex-col gap-y-1">
                <h3 className="mb-2 uppercase text-text-gray-subtitles">brands & products</h3>
                {/* <SheetHeader className='md:hidden'>
                    <SheetTitle className="uppercase text-text-gray-subtitles">
                        brands & products
                    </SheetTitle>
                </SheetHeader> */}
                <Link image={CustomizationsIcon} name={"customizations"} />
                <Link image={ProductsIcon} name={"products"} />
            </div>
            <div className="flex flex-col gap-y-1">
                {/* <SheetHeader className='md:hidden'>
                    <SheetTitle className="uppercase text-text-gray-subtitles">
                        configurations
                    </SheetTitle>
                </SheetHeader> */}
                <h3 className="mb-2 uppercase text-text-gray-subtitles">configurations</h3>

                <Link image={IntegrationsIcon} name={"integrations"} />
                <Link image={SettingsIcon} name={"settings"} />
            </div>
            <div className="flex flex-col gap-y-1">
                {/* <SheetHeader className='md:hidden'>
                    <SheetTitle className="uppercase text-text-gray-subtitles">
                        support
                    </SheetTitle>
                </SheetHeader> */}
                <h3 className="mb-2 uppercase text-text-gray-subtitles">Support</h3>

                <Link image={FAQsIcon} name={"faqs"} />
            </div>
        </>
    )
}

export default Management