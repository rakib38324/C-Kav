import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/layout";
import TrusTedCompany from "@/components/trustedCompany";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Layout pageTitle="Home">
      <TrusTedCompany />
      </Layout>
    </main>
  );
}
