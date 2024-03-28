import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-700 p-4 text-white text-center mt-auto">
        {/* footer (mt-auto), junto a body (min-h-screen flex flex-col) empujan el footer al fondo */}
      <div className="mb-4">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados.
      </div>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/politica-privacidad">Política de privacidad</Link>
        </li>
        <li>
          <Link href="/terminos-condiciones">Términos y condiciones</Link>
        </li>
      </ul>
    </footer>
  );
}
