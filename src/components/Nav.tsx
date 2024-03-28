import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-orange-700 px-10 py-4 flex justify-between items-center text-white">
      {/* justify-between empuja los dos divs a la izquierda y derecha */}
      {/* items-center alinea los elementos en el centro el eje x */}
      <div className="flex items-center">
        <Link href="/" className="hover:underline">
          <Image
            src="/logo.png"
            alt="Logo de PitsaJaus"
            width={100}
            height={100}
            priority
            className="rounded-full"
          />
        </Link>
        <ul className="ml-6 flex space-x-4">
          <li>
            <Link href="/carta" className="hover:underline">
              Nuestra carta
            </Link>
          </li>
          <li>
            <Link href="/encuentranos" className="hover:underline">
              Encuentra tu PitsaJaus
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/login"
          className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600"
        >
          Inicia sesión
        </Link>
      </div>
    </nav>
  );
}
