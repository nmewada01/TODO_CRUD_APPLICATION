import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrUserAdd } from "react-icons/gr";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div
     className="input_box_button"
    >
      <Input
        style={{ width: "40%",color:"white",marginRight:"0.5rem" }}
        placeholder="Write Something..."
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => handleAdd(text, setText)}>
        <GrUserAdd size={25} />
      </button>
    </div>
  );
}
export default AddTodo;
