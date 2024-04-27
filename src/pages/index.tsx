import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Layout pageTitle="Home">
      <p className="text-3xl text-center my-20">hello</p>
      </Layout>
    </main>
  );
}
