import { episodes } from "@/data/episodes";
import Container from "@/lib/ui/Container";
import EpisodeCard from "./EpisodeCard";
import EventCard from "./EventCard";

export default function Home() {
  const sortedEpisodes = episodes.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <div className="mb-24 pb-24 border-b border-white/20">
        <EventCard
          title="Subs and Wubs: Musikkfest 2024"
          eventUrl="https://www.facebook.com/events/7266751620119593"
          date="Lørdag 1. juni"
          time="kl. 13:00"
          address="Kampen park"
        />
      </div>

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
