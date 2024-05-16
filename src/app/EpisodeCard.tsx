"use client";

import { Episode } from "@/data/episodes";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function EpisodeCard(props: {
  episode: Episode;
  priorityImage?: boolean;
}) {
  const { inView, ref } = useInView({ threshold: 1 });

  return (
    <Link href={props.episode.externalUrl} className="group block">
      <Image
        ref={ref}
        priority={props.priorityImage}
        className={clsx(
          "block transition-all duration-300 group-hover:saturate-100",
          {
            "saturate-0": !inView,
            "saturate-100": inView,
          }
        )}
        alt=""
        src={props.episode.imageSrc}
        width={1024}
        height={536}
      />
      <h2 className="group-hover:underline pt-4 pb-2 text-balance text-lg sm:text-xl">
        {props.episode.title} 🔗
      </h2>
    </Link>
  );
}
