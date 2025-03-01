import Image from "next/image";
import Hello from "@/app/components/hello";

export default function Home() {
  console.log('server or client')
  return (
    <>
      <h1 className="text-3xl text-center">Welcome to kenboards</h1>
      <Hello />
    </>
    
  )
}