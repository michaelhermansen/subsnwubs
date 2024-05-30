import { episodes } from "@/data/episodes";
import Container from "@/lib/ui/Container";
import EpisodeCard from "./EpisodeCard";
import EventCard from "./EventCard";
import { BsArrowDown } from "react-icons/bs";
import TwitchEmbed from "./TwitchEmbed";

const channelName = "sandoras";
const descriptionRegex = /"description":\s*"(.*?)"/;

export default async function Home() {
  const response = await fetch(`https://www.twitch.tv/${channelName}`);
  const responseText = await response.text();
  const isLive = responseText.includes("isLiveBroadcast");
  const description = responseText.match(descriptionRegex)?.[1];

  const sortedEpisodes = episodes.sort((a, b) => b.id - a.id);

  return (
    <Container>
      {isLive && (
        <div className="border-b border-white/20 pb-12 mb-12">
          <div>
            <TwitchEmbed channel={channelName} />
            <div className="text-lg leading-normal mt-3">
              <div className="inline-block animate-pulse size-3 bg-red-600 rounded-full" />
              &ensp;
              <p className="inline">
                <span className="uppercase font-semibold">Live: </span>
                <span>{description || "Subs and Wubs"}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 pb-10 border-b border-white/20">
        <h2 className="text-lg pb-4">Upcoming event</h2>
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
