import Container from "@/lib/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa6";

const links = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/subsandwubs",
    icon: <FaInstagram color="white" size={20} />,
  },
  {
    title: "Twitch",
    url: "https://www.twitch.tv/subsandwubs",
    icon: <FaTwitch color="white" size={20} />,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@subsandwubs1845/playlists",
    icon: <FaYoutube color="white" size={20} />,
  },
];

export default function Header() {
  return (
    <header className="py-10 mb-4 bg-black">
      <Container>
        <div className="flex flex-col items-center">
          <ul className="flex items-center gap-x-6 mb-8">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="opacity-75 hover:opacity-100 flex items-center gap-2 hover:no-underline"
                >
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Image
            priority
            alt="Subs and Wubs logo"
            src="/assets/newlogo.png"
            width={140}
            height={140}
            draggable={false}
          />
        </div>
      </Container>
    </header>
  );
}
