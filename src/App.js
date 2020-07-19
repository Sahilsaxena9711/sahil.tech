import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Body from './components/body';
import Modal from './components/modal';
import { POSSIBLE_TABS } from './constants';

let DOTS = [];
const screenWidth = window.screen.width;
for (let i = 0; i <= ((screenWidth / 20) - 1); i++) {
  DOTS.push("");
}

function App() {
  const [label, setLabel] = useState("");
  const [modalKey, setModalKey] = useState("");
  const [activetabs, setActivetabs] = useState([]);
  const [wallpaper, setWallpaper] = useState(localStorage.getItem("wallpaper") || "linear-gradient(0deg, rgba(28,45,83,1) 0%, rgb(44, 49, 51) 100%, rgba(0,212,255,1) 100%)")

  const onWallpaperChange = (wallpaper) => {
    setWallpaper(wallpaper);
    localStorage.setItem("wallpaper", wallpaper);
  }

  const openTab = (label, key) => {
    setLabel(label);
    setModalKey(key);
    let currentActiveTabs = activetabs;
    if (!currentActiveTabs.find(_ => _ === key)) {
      currentActiveTabs.push(key);
      setActivetabs(currentActiveTabs);
    }
  }

  const toggleModalVisible = (key) => {
    let currentActiveTabs = activetabs;
    currentActiveTabs = currentActiveTabs.filter(_ => _ !== key);
    const activeTabsLength = currentActiveTabs.length;
    if (activeTabsLength > 0) {
      setLabel(POSSIBLE_TABS.getIn([currentActiveTabs[activeTabsLength - 1], "label"]));
      setModalKey(currentActiveTabs[activeTabsLength - 1]);
      setActivetabs(currentActiveTabs);
    } else {
      setLabel("");
      setModalKey("");
      setActivetabs(currentActiveTabs);
    }
  }

  return (
    <div
      className="App"
      style={{
        background: wallpaper,
      }}
    >
      <Header openTab={openTab} activeTabName={label} />
      {DOTS.map((_, k) => <div className="dot" style={{
        animationDuration: `${10 * Math.random(10)}s`,
        height: `${Math.random(2, 10)}px`,
        width: `${Math.random(2, 10)}px`,
        position: "absolute",
        left: `${20 * k + 1}px`
      }} />)}
      <Body />
      {activetabs.length ?
        <Modal
          wallpaper={wallpaper}
          onWallpaperChange={onWallpaperChange}
          toggleModalVisible={toggleModalVisible}
          label={label}
          modalKey={modalKey}
        /> : null}
      <Footer activetabs={activetabs} toggleModalVisible={openTab} />
    </div>
  );
}

export default App;
