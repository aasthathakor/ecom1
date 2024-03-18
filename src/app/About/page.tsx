"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Navbar1 from '@/components/Navbar1';
import Component1 from '@/components/about/Component1';
import Component2 from '@/components/about/Component2';
import Component3 from '@/components/about/Component3';
import Component4 from '@/components/about/Component4';
import next from 'next';
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar1 />
    <Navbar />
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
    <Footer />

    
    </>
  )
}

export default page