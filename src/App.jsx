import NavBar from "./componets/NavBar"
import HeroSection from "./componets/HeroSection"
import FeartureSection from "./componets/feartureSection"
import  Workflow from "./componets/Workflow"
import Pricing from "./componets/Pricing"
import Testimonials from "./componets/Testimonials"
import Footer from "./componets/Footer"



const App = () => {
  return (
<div className="w-screen h-screen">
<NavBar />
<div className="w-full h-auto pt-20">
    <HeroSection />
    <FeartureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
</div>

</div>
  )
}

export default App