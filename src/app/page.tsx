import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import CoursesSection from "@/components/CourseCategory/CourseCategory";
import Achievement from "@/components/Achievement/Achievement";
import Courses from "@/components/Courses/Courses";
import OurTeam from "@/components/OurTeam/OurTeam";
import CustomerTestimomial from "@/components/CustomerTestimonial/CustomerTestimonial";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <CoursesSection/>
      <Achievement/>
      <Courses/>
      <OurTeam/>
      <CustomerTestimomial/>
      <Footer/>
    </div>
    
  );
}


