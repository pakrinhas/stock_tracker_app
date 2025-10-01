'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useRouter} from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignout = async () => {
        router.push("/sign-in");
    }

    const user = {name : 'John', email: 'pakrinha124@gmail.com'}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant ="ghost" className= "flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className= "h-8 w-8">
                        <AvatarImage src= "https://tr.rbxcdn.com/180DAY-d4a6d1564bf7c0e65447501bdb3cc584/420/420/FaceAccessory/Webp/noFilter" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
