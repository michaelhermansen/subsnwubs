import Container from "@/lib/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { episodes } from "@/data/episodes";
import EpisodeCard from "./EpisodeCard";

export default function Home() {
  return (
    <Container>
      <ul className="space-y-16">
        {episodes.toReversed().map((episode, i) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} priorityImage={i < 2} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
