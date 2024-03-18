"use client";
import React from 'react'
import next from 'next';
import Navbar from '@/components/Navbar';
import Component from '@/components/list/Component';
import Footer from '@/components/Footer';
const page = () => {
  return (
    
    <>
    <Navbar />
    <Component/>
    <Footer />
    </>
  )
}

export default page