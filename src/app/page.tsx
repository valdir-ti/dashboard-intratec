export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <aside className="bg-zinc-400 p-4">
        <h2>Dashboard Intratec Navbar</h2>
      </aside>
      <div className="flex flex-1 bg-zinc-300">
        <aside className="lg:w-72 md:w-56 bg-zinc-200 p-4">
          <h2>Sidebar</h2>
        </aside>
        <main className="p-4 bg-green-300 w-full flex flex-col">
          <h2 className="bg-emerald-200 p-4">Main</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4 min-h-[250px]">
            <div className="bg-slate-300 h-auto w-full p-4">Card 1</div>
            <div className="bg-slate-300 h-auto w-full p-4">Card 2</div>
            <div className="bg-slate-300 h-auto w-full p-4">Card 3</div>
            <div className="bg-slate-300 h-auto w-full p-4">Card 4</div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[250px]">
            <div className="bg-blue-100 w-full p-4">Chart 1</div>
            <div className="bg-blue-100 w-full p-4">Chart 2</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-400 p-4">
        <h2>Footer</h2>
      </footer>
    </div>
  )
}
