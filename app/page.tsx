// import Image from "next/image";
import LandingPage from "./landing-page";
import Footer from "./landing-page/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <LandingPage />
      <Footer />
    </main>
  );
}
