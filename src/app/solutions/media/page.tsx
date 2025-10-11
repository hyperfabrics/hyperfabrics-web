import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export { metadata } from "./metadata";

export default function MediaPage() {
  return <ContentPage {...pageContent} />;
}
