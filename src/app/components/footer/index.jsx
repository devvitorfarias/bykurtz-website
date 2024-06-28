'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FOOTER_MENU_ITEMS } from "./constants";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-background">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:flex lg:flex-col">
          <nav className=" lg:flex lg:flex-col text-white font-medium">
            <ul className="md:flex md:flex-row sm:grid sm:grid-cols-1 md:gap-4">
              {FOOTER_MENU_ITEMS.map((item) => (
                <li
                  key={item.link}
                  className={twMerge(
                    "group hover:text-blue-500 transition-colors ease-in-out",
                    pathname === item.link ? "text-blue-500" : "text-white"
                  )}
                  style={{ fontSize: "2rem" }} // Estilo inline para definir font-size
                >
                  <Link href={item.link} className="block py-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>

          <div className="text-white">
            <h1 className="text-3xl font-semibold mb-4">
              Take your business to the next level, just one email away!
            </h1>
            <a className="text-3xl font-semibold" href="mailto:contact@bykurtz.com.br">
              Let’s talk
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a className="text-3xl font-semibold text-center text-white" target="_blank" href="#">
              Linkedin
            </a>
            <a className="text-3xl font-semibold text-center text-white" target="_blank" href="#">
              Behance
            </a>
            <a className="text-3xl font-semibold text-center text-white" target="_blank" href="#">
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
