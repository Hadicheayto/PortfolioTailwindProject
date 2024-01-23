import React from 'react';
import Navbar from "@/components/navbar"
import 'tailwindcss/tailwind.css';
import Footer from '@/components/footer';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
