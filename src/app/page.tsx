import { episodes } from "@/data/episodes";
import Container from "@/lib/ui/Container";
import EpisodeCard from "./EpisodeCard";

export default function Home() {
  const sortedEpisodes = episodes.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <ul className="space-y-16">
        {sortedEpisodes.map((episode, i) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} priorityImage={i < 2} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
