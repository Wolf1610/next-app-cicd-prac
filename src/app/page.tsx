
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-10 pb-20  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="px-4 py-2 border border-white/10">
          <div className="p-10">
            <h1 className="text-5xl">APP for CI/CD Practice</h1>
          </div>
          <div className="flex items-center justify-center py-5">
            <button className="px-4 py-2 bg-white/10 text-white rounded-md hover:text-amber-300 cursor-pointer">
              Click me 1
            </button>
          </div>
          <div className="flex items-center justify-center py-5">
            <button className="px-4 py-2 bg-white/10 text-white rounded-md hover:text-amber-300 cursor-pointer">
              Click me 2
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
