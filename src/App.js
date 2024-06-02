import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
