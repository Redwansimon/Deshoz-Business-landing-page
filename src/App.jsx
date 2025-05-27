
import './App.css'
import Companylogo from './components/Companylogo'
import FeatureSection from './components/FeatureSection'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import ServiceSection from './components/ServiceSection'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden '>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-700/20 to-pink-700/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar></Navbar>
        <Hero />
        <Companylogo/>
        <PurposeSection/>
        <FeatureSection/>
        <ScheduleSection/>
        <MonitorSection/>
        <PricingSection/>
        <ServiceSection/>
        <Testimonial/>
      </div>

    </main>
  )
}

export default App
