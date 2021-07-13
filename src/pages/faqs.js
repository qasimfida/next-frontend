import TopBar from "../component/topBar";
import FaqsSection from "../container/FaqsSection";
import Head from "next/head";
import WithLayout from "../component/layout";

export default function Faqs() {
  return (
    <WithLayout>
      <FaqsSection />
    </WithLayout>
  );
}
