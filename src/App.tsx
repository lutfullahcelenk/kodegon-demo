import React, { useState } from "react";
//components
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

const App = () => {
  const [selected, setSelected] = useState("Lorem Ipsum");

  return (
    <div className="flex flex-col">
      <Banner />
      <Navbar selected={selected} setSelected={setSelected} />
      <Content selected={selected} />
      <Video />
      <CardSection />
    </div>
  );
};

export default App;
