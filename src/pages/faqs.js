import TopBar from "../component/topBar";
import FaqsSection from "../container/FaqsSection";
import Head from "next/head";
import WithLayout from "../component/layout";

export default function Home() {
  return (
    <WithLayout>
      <FaqsSection />
    </WithLayout>
  );
}
