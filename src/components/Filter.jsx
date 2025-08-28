import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import FilterIcon from '../assets/filter.png'
import ExportIcon from '../assets/export001.png'
const Filter = () => {
    return (
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-2">
                <Select>
                    <SelectTrigger className="w-1/2 text-sm truncate text-shadow-2xs text-text-mainColor">
                        <SelectValue className={"font-bold"} placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Leads</SelectItem>
                        <SelectItem value="dark">Lead Quality Score</SelectItem>
                        <SelectItem value="system">Leaderboard</SelectItem>
                    </SelectContent>
                </Select>
                <Select >
                    <SelectTrigger className="text-sm text-text-mainColor">
                        <img src={FilterIcon} alt="filter icon" />
                        <SelectValue className={"font-bold"} placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Leads</SelectItem>
                        <SelectItem value="dark">Lead Quality Score</SelectItem>
                        <SelectItem value="system">Leaderboard</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button className={"font-normal"} variant="outline">

                Export
                <img src={ExportIcon} alt="export icon" />
            </Button>

        </div>
    )
}

export default Filter