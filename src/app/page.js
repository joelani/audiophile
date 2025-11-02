import Banners from "@/components/layouts/Banners";
import Categories from "@/components/layouts/Categories";
import Hero from "@/components/layouts/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="w-full bg-black/90">
      <Hero />
      <div className="bg-white">
        <Categories />
        <Banners />
      </div>
    </main>
  );
};

export default Home;
