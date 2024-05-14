import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Introduction from "../components/intro/Introduction"
import FeatureHighlights from "../components/featureHighlight/featureHighlights/FeatureHighlights";
import CTASection from "../components/cta/CTASection";
import TestimonialSection from "../components/testimonialSection/TestimonialSection";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
    return (
        <div className="landing">
            <Header userLoggedIn={true} appointmentScheduled={false} />
            <Hero 
                headline="Effortlessly Schedule Your Appointments"
                subheading="Streamline your healthcare experience with our intuitive appointment scheduling platform."
                ctaText="Get Started"
            />
            <Introduction 
                title="Streamline Your Healthcare Experience"
                description="Our appointment scheduling platform makes it easy to book appointments with healthcare providers, manage your medical visits, and stay on top of your health journey."
            />
            <FeatureHighlights />
            <TestimonialSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;