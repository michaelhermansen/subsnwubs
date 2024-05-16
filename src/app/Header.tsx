import Container from "@/lib/ui/Container";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="py-10 mb-4 flex justify-center">
          <h1 className="sr-only">Subs and Wubs</h1>
          <Image
            priority
            alt="Subs and Wubs logo"
            src="/assets/logo_optimized.gif"
            width={100}
            height={100}
            draggable={false}
          />
        </div>
      </Container>
    </header>
  );
}
