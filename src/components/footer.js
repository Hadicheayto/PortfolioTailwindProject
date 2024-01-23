
import Image from "next/image"
import Link from "next/link"
import linkedin from "../../public/images/linkedin.png"
import instagram from "../../public/images/instagram.png"
import twitter from "../../public/images/twitter.png"
import facebook from "../../public/images/facebook.png"
import HCLogo from "../../public/images/HCLogo.png"

export default function Footer()
{
    return(
        <footer className='bg-slate-50 w-full pt-20 pb-20'>

          <div className='flex flex-wrap justify-around'>
            <div className=''>
              <Image src={HCLogo}></Image>

            </div>

            <div>
              <h2 className='text-2xl font-bold mb-10'>Overview:</h2>

              <ul className=''>
                <li className='mb-2 text-xl font-semibold hover:text-blue-600'><Link href={"/"}>Home</Link></li>
                <li className='mb-2 text-xl font-semibold hover:text-blue-600'><Link href={"/aboutme"}>About me</Link></li>
                <li className='mb-2 text-xl font-semibold hover:text-blue-600'><Link href={"/contactme"}>Contact me</Link></li>
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-10'>Social Media:</h2>

              <ul>
                <div className='flex items-center'>
                  <li><Link href={"https://www.linkedin.com/"} target="_blank"><Image src={linkedin}></Image></Link></li>
                  <li><Link href={"https://www.instagram.com/"} target="_blank"><Image src={instagram}></Image></Link></li>
                  <li><Link href={"https://twitter.com/"} target="_blank"><Image src={twitter} className='mr-1 ml-1'></Image></Link></li>
                  <li><Link href={"https://www.facebook.com/"} target="_blank"><Image src={facebook} height={46}></Image></Link></li>
                </div>
        
              </ul>
            </div>

            <div>
              <h2 className='mb-10 text-2xl font-bold '>Call me:</h2>
              <h2 className='text-2xl font-medium'>+961 81640833</h2>
            </div>

          </div>

        </footer>

    )
    

}