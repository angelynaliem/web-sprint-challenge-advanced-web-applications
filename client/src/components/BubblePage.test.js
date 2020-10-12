import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";

test("Fetches data and renders the bubbles", () => {
  // Finish this test

  //Arramge
  const { queryAllByTestId, getAllByTestId, findAllByTestId, rerender } = render(<ColorList colors={[]} />)

  screen.debug()

  //Sanity Check
  const initialColorList = queryAllByTestId(/color/i)
  console.log("Initial Color List: ", initialColorList)
  expect(initialColorList).toHaveLength(0)

  //Act
  rerender(<ColorList colors={colors} />)

  // expect(findAllByTestId(/color/i)).toHaveLength(10)

  const fetchedColorList = findAllByTestId(/color/i)
  console.log("Fetched Color List: ", fetchedColorList)

  //Assert 
  // expect(fetchedColorList).toHaveLength(10)


});

const colors = 

[{"color":"alicebluez","code":{"hex":"#f0f8ff"},"id":1},{"color":"limegreen","code":{"hex":"#99ddbc"},"id":2},{"color":"aqua","code":{"hex":"#00ffff"},"id":3},{"color":"aquamarine","code":{"hex":"#7fffd4"},"id":4},{"color":"lilac","code":{"hex":"#9a99dd"},"id":5},{"color":"softpink","code":{"hex":"#dd99ba"},"id":6},{"color":"softyellow","code":{"hex":"#dcdd99"},"id":8},{"color":"blue","code":{"hex":"#6093ca"},"id":10},{"color":"blueviolet","code":{"hex":"#8a2be2"},"id":11}]

