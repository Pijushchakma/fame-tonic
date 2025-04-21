"use client";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#010101] flex flex-col gap-5 ">
      <Topbar />
      <Navbar />
      <HeroSection />
    </div>
  );
}
