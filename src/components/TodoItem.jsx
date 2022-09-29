import React from "react";
import { Box, Button, Divider, SimpleGrid } from "@chakra-ui/react";
import { GoArrowSmallRight } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import { MdPendingActions, MdDoneOutline } from "react-icons/md";
function TodoItems({ name, id, status, handleDelete, handleToggle }) {
  console.log(name, id);
  return (
    <>
      <Box>
        <SimpleGrid
          borderRadius="1rem"
          alignItems="center"
          boxSizing="border-box"
          display="flex"
          gap="3rem"
          justifyContent="space-around"
          alignContent="center"
          width={"100%"}
          margin="auto"
          marginTop="1rem"
          p="5px"
      
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          spacing={10}
        >
          <Box style={{ fontWeight: "bold" }}>
            <span>
              <GoArrowSmallRight />
            </span>
            {id}
          </Box>
          <Box style={{ fontWeight: "bold" }}>{name}</Box>
          <Button onClick={() => handleToggle(id, !status)}>
            {status ? <MdDoneOutline /> : <MdPendingActions />}
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <AiFillDelete />
          </Button>
        </SimpleGrid>
      </Box>
    </>
  );
}
export default TodoItems;

{
  /* <div>{id}</div>
        <div>{name}</div>
        <button onClick={() => handleToggle(id, !status)}>
          {status ? "DONE" : "NOT DONE"}
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button> */
}
