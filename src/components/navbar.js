import Image from "next/image"

import Profile from "../../public/images/profile.png"
import Link from "next/link"
import Home from "../app/page"
import HCLogo from "../../public/images/HCLogo.png"

export default function Navbar(){
    return(
        <nav className="bg-white-50 flex items-center justify-between p-4 shadow-md">
            <Image src={HCLogo} width={110} height={110}></Image>
            <ul className="flex flex-row items-center justify-center gap-2  xl:gap-8 md:gap-6 sm:gap-4 mr-10" >
                <li><Link href={"/"} className="hover:text-blue-600">Home</Link></li>
                <li><Link href={"/aboutme"} className="hover:text-blue-600" >About me</Link></li>
                <li><Link href={"/contactme"} className="hover:text-blue-600">Contact me</Link></li>
                <li><Link href={""}><div className="w-10"><Image src={Profile} className="w-25 h-full object-cover"></Image></div></Link></li>
            </ul>
        </nav>
    )
}


