import React, { useState } from 'react';

export default function Contactme(){

    const [formData,setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message:"",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    



    const handleSubmit = () => {
        if(formData.firstname == "" || formData.lastname == "" || formData.onChange == "" || formData.email == "" || formData.message == "")
        {
            alert('Plz fill all the form.');
        }else
        {
            setFormData({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                message: '',
            });
        
            alert('Form submitted successfully!');
            };
        }
    


    return(
        <div>

            <section className="w-full mb-20 mt-20">

                <div className=" flex gap-16 justify-center flex-wrap ">
                    <div className="w-[70%] sm:w-[40%] md:w-[40%] lg:w-[30%] xl:w-[20%] border p-12 flex flex-col gap-5 bg-white order-2 sm:order-1 md:order-1 lg:order-1 xl:order-1">
                        <input type="text" placeholder="First name" className="border p-2 rounded-md" name="firstname" value={formData.firstname} onChange={handleChange} ></input>
                        <input type="text" placeholder="Last name" className="border p-2 rounded-md" name="lastname" value={formData.lastname} onChange={handleChange} ></input>
                        <input type="text" placeholder="Phone" className="border p-2 rounded-md" name="phone" value={formData.phone} onChange={handleChange}></input>
                        <input type="text" placeholder="Email" className="border p-2 rounded-md" name="email" value={formData.email} onChange={handleChange}></input>
                        <input type="text" placeholder="Message" className="border p-2 rounded-md" name="message" value={formData.message} onChange={handleChange}></input>
                        <button className="border p-2 rounded-md text-center cursor-pointer" onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="w-[70%] sm:w-[50%] md:w-[50%] lg:w-[30%] xl:w-[30%] flex flex-col justify-between order-1 sm:order-2 md:order-2 lg:order-2 xl:order-2">
                        <h2 className="text-5xl text-blue-500 font-normal font-serif mb-5">Don't be a stranger just say hello</h2>
                        <h2 className="text-2xl text-blue-500  font-thin ">Thank you for your interest in my portfolio, fill out the form below or email me at hadi.ch.2003@gmail.com and i well get back to your promptly regarding your request.</h2>
                    </div>

                </div>

            </section>

        </div>
    )
}