import { TimelineContentPage } from "@/components/ui/TimelineContentPage";
import { pageContent } from "./metadata";

export default function DevelopersPage() {
  return <TimelineContentPage {...pageContent} />;
}

export { metadata } from "./metadata";
