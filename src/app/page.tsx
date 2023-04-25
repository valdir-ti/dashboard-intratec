import Card from "@/components/Card";
import { Chart } from "@/components/Chart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 bg-zinc-300">
       <Sidebar />
        <main className="p-4 bg-green-300 w-full flex flex-col">
          <h2 className="bg-emerald-200 p-4">Main</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4 min-h-[220px]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[400px]">
            <Chart />
            <Chart />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
