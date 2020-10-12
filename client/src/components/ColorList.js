import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

import { useParams, useHistory, NavLink } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" },
  id: "",
};


const ColorList = ({ colors, updateColors }) => {

  // const { push } = useHistory();
  // const { id } = useParams();
  
  console.log("COLORS: ", colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    // push(`/protected/${color.id}`)
    setEditing(true);
    setColorToEdit(color);
    
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    // .put(`/colors/${id}`, colorToEdit)
    .then((res) => {
      console.log("ColorList PUT Res is: ", res)
      // setColorToEdit(res.data)
      updateColors(res.data)
      // push("/protected")
      
    })
    .catch((err) => {
      console.log("ColorList PUT Err is: ", err)
    })

  };

  const deleteColor = color => {
    // color.preventDefault()
    // make a delete request to delete this color
    axiosWithAuth()
    // .delete(`/colors/${id}`)
    .then((res) => {
      console.log("DELETE Res is: ", res)
      updateColors(res.data)
      // push("/protected")
    })
    .catch((err) => {
      console.log("DELETE Err is: ", err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
        
          <li key={color.color} onClick={() => editColor(color)} data-testid="color">
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
