import Container from "@/lib/ui/Container";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="py-4 mb-4 flex justify-center">
          <Image
            alt="logo"
            src="/assets/logo.webp"
            width={80}
            height={80}
            draggable={false}
          />
        </div>
      </Container>
    </header>
  );
}
