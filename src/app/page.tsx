import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="px-4 py-2 border border-white/10"> 
          <div><h1 className="text-5xl">APP for CI/CD Practice</h1></div>
          <div><button className="px-4 py-2 bg-white/10 text-white">Click me</button></div>
          <div><button className="px-4 py-2 bg-white/10 text-white">Click me</button></div>
        </div>
      </main>
    </div>
  );
}
  