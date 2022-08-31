import React from "react";
import Header from "parts/Header";
import ErrorMessage from "parts/ErrorMessage";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function NotFound() {
  return (
    <React.Fragment>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </React.Fragment>
  );
}
