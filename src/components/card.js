import Image from "next/image"
import webLogo from "../../public/images/webLogo.png"



export default function Card({logo,title,description})
{

    return(
        <div className=" border border-black  p-5 rounded-2xl flex flex-col items-start md:w-[40] lg:w-[30%] xl:w-[15%]" >
            <Image src={logo} className="w-[25%] h-[25%] object-contain"></Image>
            <h2 className="font-semibold text-xl mt-3">{title}</h2>
            <h2 className="text-start mt-4 ">{description}</h2>
        </div>
    )
}