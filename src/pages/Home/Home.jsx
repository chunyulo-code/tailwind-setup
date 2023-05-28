import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Header/Carousel";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative pt-[102px] lg:pt-[140px] pb-[146px] lg:pb-[115px]">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
