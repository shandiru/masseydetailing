
import Hero from "../components/Home/Hero";


import ServicesSection from '../components/Home/ServicesSection';
import StatsSection from "../components/Home/StatsSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUs";
import PricingSection from "../components/Home/PricingSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ServiceAreasSection from "../components/Home/ServiceAreasSection";
import ShowroomCTA from "../components/Home/ShowroomCTA"
const Home = () => {
    return (
        <div>
            <Hero />
             
             <ServicesSection/>
             <StatsSection/>
             <WhyChooseUsSection />
             <PricingSection />
             <TestimonialsSection />
             <ServiceAreasSection />
             <ShowroomCTA />
           
           
           
           
            
        </div>
    )
}

export default Home
