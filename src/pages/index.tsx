import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/layout";
import TrusTedCompany from "@/components/trustedCompany";
import ServiceSection from "@/components/serviceSection";
import SoftwareQuality from "@/components/softwareQuality";
import Award from "@/components/award";
import Features from "@/components/feature";
import VideoPresentation from "@/components/videoPresentation";
import Prices from "@/components/prices";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Layout pageTitle="Home">
        <TrusTedCompany />
        <ServiceSection />
        <SoftwareQuality />
        <Award />
        <Features />
        <VideoPresentation />
        <Prices />
      </Layout>
    </main>
  );
}
