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
            <Hero />
            <Introduction />
            <FeatureHighlights />
            <TestimonialSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;