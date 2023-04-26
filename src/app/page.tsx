import { DollarSign, ArrowUpRight, ShoppingBag, Users } from 'lucide-react'

import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
import Sidebar from "@/components/_Sidebar";
import Header from '@/components/Header';
import TopCards from '@/components/TopCards';

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCards />
    </main>
  )
}
