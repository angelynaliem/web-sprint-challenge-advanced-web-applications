import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Login from "./Login";
import App from "../App";
import ColorList from "./ColorList";
// import ColorList from "./ColorList";

// import { axiosWithAuth } from "../util/axiosWithAuth";

// import { fetchColors as mockFetchColors } from "../api/fetchColors";

// jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", 
async () => {
  // Finish this test

  // mockFetchColors.mockResolvedValueOnce(colors);

  //Arrange
  // const {getByRole, findByText, getAllByTestId } = render(<App />);
  // const button = getByRole("button", {name: /log in/i});
  const { queryAllByTestId, getAllByTestId, findAllByTestId, rerender } = render(<ColorList colors={[]} />)

  // screen.debug()

  //Sanity Check
  const initialColorList = queryAllByTestId(/color/i)
  console.log("Initial Color List: ", initialColorList)
  expect(initialColorList).toHaveLength(0)

  //Act
  // fireEvent.click(button);
  rerender(<ColorList colors={colors} />)

  // expect(findAllByTestId(/color/i)).toHaveLength(10)

  const fetchedColorList = findAllByTestId(/color/i)
  // console.log("Fetched Color List: ", fetchedColorList)

  //Assert 
  await waitFor(() => {
    expect(getAllByTestId(/color/i)).toHaveLength(3)
  })

});

const colors = 

[{"color":"alicebluez","code":{"hex":"#f0f8ff"},"id":1},{"color":"limegreen","code":{"hex":"#99ddbc"},"id":2},{"color":"aqua","code":{"hex":"#00ffff"},"id":3}]