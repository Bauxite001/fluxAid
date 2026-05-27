// pages/Home.jsx

import Hero from "../components/Hero";
// import ImpactBar from "../components/ImpactBar";
import DailyActivity from "../components/DailyActivity";
import Programs from "../components/Programs";
import ImpactNumbers from "../components/ImpactNumbers";
import BlogTeasers from "../components/BlogTeasers";
import DonateSection from "../components/DonateSection";
import GalleryTeaser from "../components/GalleryTeaser";
import Quote from "../components/quote";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <ImpactBar /> */}
      <DailyActivity />
      <Programs />
      <ImpactNumbers />
      <BlogTeasers />
      <Quote />
      <DonateSection />
      <GalleryTeaser />
    </>
  );
};

export default Home;
