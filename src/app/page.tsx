import { episodes } from "@/data/episodes";
import Container from "@/lib/ui/Container";
import EpisodeCard from "./EpisodeCard";
import EventCard from "./EventCard";
import { BsArrowDown } from "react-icons/bs";

export default function Home() {
  const sortedEpisodes = episodes.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <div className="mb-12 pb-10 border-b border-white/20">
        <EventCard
          title="Subs and Wubs: Musikkfest 2024"
          eventUrl="https://www.facebook.com/events/7266751620119593"
          date="Lørdag 1. juni"
          time="kl. 13:00"
          address="Kampen park"
        />
      </div>

      <div className="flex items-center pb-12 gap-2">
        <h2 className="text-lg">Archive</h2>
        <div className="flex items-center">
          <BsArrowDown />
          <BsArrowDown />
          <BsArrowDown />
        </div>
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
