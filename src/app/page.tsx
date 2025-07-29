// src/App.tsx
'use client'
import React, { useState, useEffect } from "react";
import Intro from "./intro/page";
import Home from "./home/page";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <Intro /> : <Home/>}</>;
};

export default App;
