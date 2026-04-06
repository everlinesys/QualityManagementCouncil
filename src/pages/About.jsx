import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { About2 as A2 } from "../components/About2";

export default function About() {
  return (<div className="min-w-[100vw] min-h-screen overflow-x-hidden bg-white">
    <Header />
    <A2 />
    <Footer />
  </div>

  );
}