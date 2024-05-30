"use client";

import Script from "next/script";
import { useCallback } from "react";

declare global {
  interface Window {
    Twitch: any;
  }
}

export default function TwitchEmbed(props: { channel: string }) {
  const createEmbed = useCallback(() => {
    new window.Twitch.Embed("twitch-embed", {
      width: "100%",
      height: "100%",
      layout: "video",
      channel: props.channel,
    });
  }, [props.channel]);

  return (
    <>
      <Script
        src="https://player.twitch.tv/js/embed/v1.js"
        onLoad={createEmbed}
      />
      <div id="twitch-embed" className="aspect-video w-full" />
    </>
  );
}
