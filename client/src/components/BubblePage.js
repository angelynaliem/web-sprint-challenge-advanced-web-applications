import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../util/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    fetchColors()
  }, [])

  const fetchColors = () => {
    axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log("Bubble Page Res is: ", res)
      setColorList(res.data)
    })
    .catch((err) => {
      console.log("Bubble Page Err is: ", err)
    })
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors} data-testid="color" />
      <Bubbles colors={colorList} data-testid="color"/>
    </>
  );
};

export default BubblePage;


