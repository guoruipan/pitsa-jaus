import Link from "next/link";
import {InstagramButton, FacebookButton} from "../icons/SocialButton";

export default function Footer() {
  return (
    <footer className="bg-orange-700 p-4 text-white mt-auto">
      {/* footer (mt-auto), junto a body (min-h-screen flex flex-col) empujan el footer al fondo */}
      <div className="mb-4 text-center">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados.
      </div>

      <div className="flex flex-col md:flex-row justify-between px-10 items-center">
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link href="/privacy-policy">Política de privacidad</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Términos y condiciones</Link>
          </li>
        </ul>
        <ul className="flex flex-wrap md:flex-no-wrap space-x-4">
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
