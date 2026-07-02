import ScrollStage from "@/components/ScrollStage";
import type { CardMeta } from "@/components/ScrollStage";
import HomePanel from "@/components/panels/HomePanel";
import CommunityPanel from "@/components/panels/CommunityPanel";
import AccPanel from "@/components/panels/AccPanel";
import EventsPanel from "@/components/panels/EventsPanel";
import LeadsPanel from "@/components/panels/LeadsPanel";
import AlumniPanel from "@/components/panels/AlumniPanel";

const CARDS: CardMeta[] = [
  {
    title: "The 2nd Rank.",
    caption: "The pieces that hold the structure together.",
    image: "/2_bw.png",
    backdrop: "/2_colored.png",
  },
  {
    title: "Outsmart the\nEntire Arena!",
    caption: "This isn't just a game. It's a fight for glory.",
    image: "/home_bw.png",
    backdrop: "/home_colored.png",
  },
  {
    title: "Know Your\nOpposition.",
    caption: "Every player in the forum. Study the directory.",
    image: "/comm_bw.png",
    backdrop: "/comm_colored.png",
  },
  {
    title: "The ABES Chess\nChampionship.",
    caption: "Nine rounds. One champion. No second chances.",
    image: "/acc_bw.png",
    backdrop: "/acc_colored.png",
  },
  {
    title: "Beyond the\nBoard.",
    caption: "Workshops, simuls, and sessions that break plateaus.",
    image: "/event_bw.png",
    backdrop: "/event_colored.png",
  },
  {
    title: "The Promoted\n8th Rank.",
    caption: "Members who served, grew, and reached something greater.",
    image: "/8_bw.png",
    backdrop: "/8_colored.png",
  },

];

export default function HomePage() {
  return (
    <ScrollStage cards={CARDS}>
      <LeadsPanel />
      <HomePanel />
      <CommunityPanel />
      <AccPanel />
      <EventsPanel />
      <AlumniPanel />
    </ScrollStage>
  );
}
