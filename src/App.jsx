import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="overflow-x-hidden bg-black">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default App;
