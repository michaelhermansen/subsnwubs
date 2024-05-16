import Image from "next/image";
import Link from "next/link";

export default function EventCard(props: {
  title: string;
  date: string;
  time: string;
  address: string;
  eventUrl: string;
}) {
  return (
    <Link href={props.eventUrl} className="group block">
      <Image
        priority={true}
        className="block transition-all duration-300 group-hover:saturate-100"
        alt=""
        src="/assets/events/subs_musikkfest.png"
        width={1024}
        height={536}
      />
      <div>
        <div className="flex items-center flex-wrap gap-2 justify-between pt-4 opacity-75 group-hover:opacity-100">
          <p>
            🗓️ {props.date}, {props.time}
          </p>
          <p>📍 {props.address}</p>
        </div>
        <h2 className="group-hover:underline pt-4 pb-2 text-balance text-xl sm:text-2xl">
          {props.title}
        </h2>
      </div>
    </Link>
  );
}
