import usj from "../../public/images/USJ_logo.png"
import Image from "next/image"
import webLogo from "../../public/images/webLogo.png"
import Card from "../components/card"
import flutter from "../../public/images/flutterLogo.png"
import nodejs from "../../public/images/nodejsLogo.png"
import firebase from "../../public/images/firebaseLogo.png"
import github from "../../public/images/githubLogo.png"
import database from "../../public/images/databaseLogo.png"
import azure from "../../public/images/azureLogo.png"

export default function Aboutus(){

    return(
        <div>
            <section className="text-center w-full pt-20 mb-20">
                <h2 className='text-4xl font-serif text-black mb-10 '>-Education</h2>

                <div className="flex justify-center items-stretch flex-wrap">
                    <div className=" flex justify-center shadow-lg w-[70%] sm:w-[70%] md:w-[45%] lg:w-[40%]  xl:w-[25%]">
                        <Image src={usj} className='h-full object-fit'></Image>
                    </div>

                    <div className=" flex flex-col justify-center w-[70%] sm:w-[70%] md:w-[45%] lg:w-[40%] xl:w-[25%] shadow-lg p-10">
                        <h2 className="text-2xl font-semibold mb-8">Computer science</h2>

                        <div className="flex gap-5">
                            <div className="text-start">
                                <h2 className="text-xl  font-semibold">Duration:</h2>
                                <h2 className="text-xl font-semibold">Semestre:</h2>
                                <h2 className="text-xl font-semibold">Courses:</h2>
                            </div>
                            <div className="text-start">

                                <h2 className="text-xl ">3 years</h2>
                                <h2 className="text-xl ">6</h2>
                                <ul className="text-xl list-disc ml-6 ">
                                    <li>Html-css-java_script</li>
                                    <li>Machine learning</li>
                                    <li>c# - c++</li>
                                    <li>Asp.net</li>
                                    <li>Database</li>
                                    <li>Algorithm</li>
                                    <li>Networking</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="text-center w-full p-20  ">
                <h2 className='text-4xl font-serif text-black mb-10 '>-Skills</h2>

                <div className="flex gap-16 flex-wrap justify-center">
                    
                    <Card logo={webLogo} title={"Web designer"} description={"I am a skilled web designer proficient in crafting dynamic and visually appealing websites using a blend of HTML, CSS, JavaScript, Tailwind CSS, and React hello hello"}/>
                    <Card logo={nodejs} title={"Web backend"} description={" I specialize in leveraging Node.js to build robust and scalable server-side solutions, ensuring a seamless integration of design and functionality in web applications"}/>
                    <Card logo={flutter} title={"Frontend app"} description={" I am specialize in Flutter for mobile app development, leveraging its expressive framework to create cross-platform, visually stunning, and performant applications."}/>
                    <Card logo={firebase} title={"Backend app"} description={"i use flutter as backend services to build scalable and real-time applications. Leveraging Firebase's features such as authentication, Firestore, and Cloud Functions, "}/>
                    <Card logo={database} title={"DataBase"} description={"I adeptly manage databases, ensuring seamless organization and retrieval of critical information. My proficiency extends to optimizing database performance for enhanced efficiency"}/>
                    <Card logo={github} title={"Web designer"} description={"I utilise the version control system Git, specifically on the GitHub platform. My experience includes efficiently managing code repositories and collaborating with teams to streamline the development process."}/>
                    <Card logo={azure} title={"Web designer"} description={"I use Azure DevOps for seamless project management, demonstrating proficiency in its comprehensive features and functionalities. I ensures efficient and collaborative project execution."}/>
                    

                </div>
            </section>
        </div>
    )
}