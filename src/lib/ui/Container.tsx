import { ReactNode } from "react";

export default function Container(props: { children: ReactNode }) {
  return <div className="max-w-4xl mx-auto px-4">{props.children}</div>;
}
