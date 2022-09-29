import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrUserAdd } from "react-icons/gr";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div className="input_box_button">
      <Input
      width={["80%", "70%", "50%", "40%"]}
       mr="0.5rem"
       color={'black'}
       mt="1rem"
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
