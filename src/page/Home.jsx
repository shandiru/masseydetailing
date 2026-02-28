
import Hero from "../components/Hero";


import ServicesSection from '../components/ServicesSection';
import StatsSection from "../components/StatsSection";
import WhyChooseUsSection from "../components/WhyChooseUs";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServiceAreasSection from "../components/ServiceAreasSection";
import ShowroomCTA from "../components/ShowroomCTA"
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
