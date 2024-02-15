import Container from "@/lib/ui/Container";
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

export default function Footer() {
  return (
    <footer className="py-12 mt-48 border-t border-white/0">
      <Container>
        <div className="flex flex-wrap gap-8 justify-between">
          <p>Subs and Wubs</p>
          <ul className="flex items-center flex-wrap gap-x-6 gap-y-4">
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
        </div>
      </Container>
    </footer>
  );
}
