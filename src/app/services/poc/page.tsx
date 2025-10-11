import { ContentPage } from "@/components/ui/ContentPage";
import { pageContent } from "./metadata";

export default function PoCPage() {
  return <ContentPage {...pageContent} />;
}

export { metadata } from "./metadata";
