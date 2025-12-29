"use client";
import Image from "next/image";
import nextLogo from "@/public/Nextjs.svg";
import tailwindLogo from "@/public/tailwindcss.svg";
import shadcnLogo from "@/public/shadcn-ui.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#010307] text-white">
      <div className="flex gap-8 mb-8">
        <Image src={nextLogo} alt="Next.js Logo" width={100} height={100}  />
        <Image src={tailwindLogo} alt="Tailwind Logo" width={100} height={100} />
        <Image src={shadcnLogo} alt="Shadcn/UI Logo" width={100} height={100} />
      </div>

      <h1 className="text-4xl font-bold mb-4">Next.js + Shadcn + Tailwind Starter</h1>
      <p className="mb-4 text-lg">Edit <code>page.tsx</code> and save to reload.</p>

      <div className="flex justify-center items-center"> 
      <Button>Click me</Button>
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        A black-themed starter page for your Next.js project.
      </p>
    </div>
  );
}
