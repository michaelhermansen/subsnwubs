import Container from "@/lib/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Link
        href="https://www.youtube.com/playlist?list=PLkZoTZDrAE2kSvFOS98ZAxI9giGLg5FXj"
        className="group block"
      >
        <Image
          className="block transition-all [@media(pointer:fine)]:saturate-0 group-hover:saturate-100"
          alt="Subs and Wubs episode 10"
          src="/assets/ep_10.png"
          width={1024}
          height={536}
        />
        <h2 className="group-hover:underline pt-4 pb-2 text-balance text-xl">
          Subs and Wubs &mdash; Episode 10 &#8599;
        </h2>
      </Link>
    </Container>
  );
}
