import React from "react";
import Brand from "../Brand";
import SearchField from "../SearchField";

export default function Navbar(props: React.ComponentProps<"nav">) {
  return (
    <nav {...props}>
      <Brand />
      <SearchField />
    </nav>
  );
}
