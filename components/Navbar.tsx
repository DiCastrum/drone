import Image from "next/image";
import Link from "next/link";

// Navbar, have 1 Link, can be add more, can be improved adding hamburger menu on mobile, and sign-in/sign-out

const links = ["Home"];

export default function Navbar() {
  return (
    <header className="bg-[url('/navbar.jpg')] bg-no-repeat bg-cover h-[5.5rem] border-yellow-400 border-b-2 sticky top-0 w-full z-50">
      <div
        className={`container xl:max-w-7xl flex mx-auto h-[5.5rem] items-center justify-between px-2 md:px-20`}
      >
        <div className="logo">
          <a href="/">
            <Image
              src="/logo.svg"
              alt="axpo logo"
              width={118}
              height={18}
              className="object-contain "
            />
          </a>
        </div>
        <nav>
          <ul className="flex">
            {links.map((item) => (
              <li key={item} className={`px-4 md:px-10 `}>
                <Link
                  href={item === "Home" ? `/` : `/${item}`}
                  className={`text-white`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
