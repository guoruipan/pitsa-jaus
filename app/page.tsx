import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen"> {/* este div ocupará todo el alto de la pantalla */} 
      <header>
        <Image
          src="/logo.png"
          alt="Logo de PitsaJaus"
          width={100}
          height={100}
          priority
        />
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
