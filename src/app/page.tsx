"use client";
import next from "next";
import Navbar from "@/components/Navbar";
import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main>
    <Navbar1 />
    <Navbar />
    <Footer />
    </main>
  );
};
export default Home;
