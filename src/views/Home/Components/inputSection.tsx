import { Input } from "../../../components/Input";
import Search from "../../../icons/search";
import { InputSection } from "./homeStyle";
import React from "react";
export default () => {
  return (
    <>
      <InputSection style={"parent"}>
        {/* <InputSection style={"child"}> */}
        <Input
          size={"sm"}
          placeholder="Search"
          css={{
            "@bp0": {
              width: "96%",
              ml: "10px",
              mr: "-5px",
            },
          }}
        ></Input>
        <Search></Search>
        {/* </InputSection> */}
      </InputSection>
    </>
  );
};
