import Image from 'next/image'
import Hadi from "../../public/images/hadi.png"
import CadrePhoto from "../../public/images/cadrePhoto.png"
import Hadi2 from "../../public/images/hadi2.png"
import Link from 'next/link'
import linkedin from "../../public/images/linkedin.png"
import instagram from "../../public/images/instagram.png"
import twitter from "../../public/images/twitter.png"
import facebook from "../../public/images/facebook.png"


export default function Home() {
  return (
    <div>
        
        <div className='flex flex-row flex-wrap items-stretch justify-around bg-slate-50 w-full '>
          <div className='lg:order-1 p-20'>
            <h2 className='text-2xl text-blue-500'>This is me</h2>
            <br></br>
            <h2 className='text-8xl text-blue-500'>Hadi cheayto</h2>
          </div>

          <div className='relative sm:w-full md:w-[40%] lg:w-[30%]  lg:order-2'>
            <Image src={CadrePhoto} className='relative h-[100%]'></Image>
            <Image src={Hadi} className='absolute bottom-0 object-contain h-[78%]' />
          </div>
        </div>


        <section className='pt-10 text-center w-full'>
          
            <h2 className='text-4xl font-serif text-black mb-10 '>- Get to know me</h2>

            <div className="flex items-stretch justify-center flex-wrap">
              
              <div className='border-2 w-[80%] md:w-[35%] lg:w-[25%] xl:w-[20%] '  >
                <Image src={Hadi2} className='h-full object-cover' alt="Hadi2 Image" />
              </div>


              <div className=' text-start w-[80%] md:w-[50%] lg:w-[38%] xl:w-[35%] p-10 border-2 '>
                <h2 className='text-4xl'>I'M  <span className='text-4xl font-serif text-blue-500 '>HADI CHEAYTO</span></h2>
                
                <h2 className='text-2xl mt-2'>Computer science senior & futsal player</h2>
                <br></br>

                <div className='h-1 bg-slate-100 mb-6'></div>

                <div className='flex items-center gap-5'>
                    <div className='flex flex-col'>
                        <h2 className='md:text lg:text-xl font-medium mb-2'>Age:</h2>
                        <h2 className='md:text lg:text-xl font-medium mb-2'>Address:</h2>
                        <h2 className='md:text lg:text-xl font-medium mb-2'>Email:</h2>
                        <h2 className='md:text lg:text-xl font-medium mb-2'>Phone:</h2>
                        <h2 className='md:text lg:text-xl font-medium mb-2'>Website:</h2>
                    </div>

                    <div className='flex flex-col overflow-x-auto'>
                        <h2 className='md:text lg:text-xl mb-2'>20</h2>
                        <h2 className='md:text lg:text-xl mb-2'>Beirut</h2>
                        <h2 className='md:text lg:text-xl mb-2'>hadi.ch.2003@gmail.com</h2>
                        <h2 className='md:text lg:text-xl mb-2'>+961 81640833</h2>
                        <h2 className='md:text lg:text-xl mb-2'>www.hadicheayto.com</h2>
                    </div>
                </div>


                

              </div>

            </div>
            
        </section>

        <br></br>
        <br></br>
    </div>
  )
}
