import Link from "next/link";
import {InstagramButton, FacebookButton} from "./SocialButton";

export default function Footer() {
  return (
    <footer className="bg-orange-700 p-4 text-white mt-auto">
      {/* footer (mt-auto), junto a body (min-h-screen flex flex-col) empujan el footer al fondo */}
      <div className="mb-4 text-center">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados.
      </div>

      <div className="flex justify-between px-10 items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/politica-privacidad">Política de privacidad</Link>
          </li>
          <li>
            <Link href="/terminos-condiciones">Términos y condiciones</Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <InstagramButton/>
          </li>
          <li>
            <FacebookButton/>
          </li>
        </ul>
      </div>
    </footer>
  );
}
