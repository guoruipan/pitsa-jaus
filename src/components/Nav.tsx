import Image from "next/image";

export default function Nav() {
    return (
      <nav className="bg-yellow-700">
        <Image
          src="/logo.png"
          alt="Logo de PitsaJaus"
          width={100}
          height={100}
          priority
        />
  
        <ul>
          <li>Nuestra carta</li>
          <li>Encuentra tu PitsaJaus</li>
        </ul>
      </nav>
    );
  }