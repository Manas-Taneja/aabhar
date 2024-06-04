
import Hero from "./Components/Hero/Hero";
import React from "react";
import LowerPage from "./Components/LowerPage/LowerPage";
import "./globals.css";
import Dropdowns from "./Components/Navbar/Dropdowns";
export default function page() {
  return (
    <>
      <section style={{ minHeight: "100vh" }} id="Upper">
        {" "}
        <Dropdowns />
        <Hero />{" "}
      </section>
      <section style={{ minHeight: "100vh" }} id="Lower">
        {" "}
        <LowerPage />{" "}
      </section>

    </>
  );
}
