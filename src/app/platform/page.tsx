import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export { metadata } from "./metadata";

export default function PlatformPage() {
  return <ContentPage {...pageContent} />;
}
