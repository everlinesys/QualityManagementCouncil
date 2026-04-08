import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { VisionMission } from "./components/VisionMission";
import { QualityPolicy } from "./components/QualityPolicy";
import { CTA } from "./components/CTA";
import { Inspired } from "./components/Inspired";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Excellence } from "./components/Excellence";
import { StandardsCentre } from "./components/StandardsCenter";
export default function Home() {
    return (
        <div className="min-w-[100vw] min-h-screen overflow-x-hidden bg-white">
            <Header />
            <Hero />  <Excellence/>
            <About />
            <Services />
            <VisionMission />
          

            <Inspired />
            <StandardsCentre/>
            <QualityPolicy />
            <CTA />
            <Footer />
        </div>
    );
}