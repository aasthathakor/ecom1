"use client";
import React from 'react'
import next from 'next'
import Navbar1 from '@/components/Navbar1';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Component1 from '@/components/our blog/Component1';

const page = () => {
  return (
    <>
    <Navbar />
    <Component1 />
    <Footer />
    </>
  )
}

export default page