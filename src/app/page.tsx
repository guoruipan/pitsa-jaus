import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full mx-auto"> 
    {/* este div ocupará todo el alto de la pantalla */} 
      <header className="flex flex-col justify-between px-24 py-5">
        <Image
          src="/logo.png"
          alt="Logo de PitsaJaus"
          width={100}
          height={100}
          priority
        />
        <nav>
          <ul>
            <li>Nuestra carta</li>
            <li>Encuentra tu PitsaJaus</li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
