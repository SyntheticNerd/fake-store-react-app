import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../img/search.svg";
import { HoverEffect } from "../../styles/StyleComp";
import { SearchBar, SearchField, SBLabel } from "../../styles/NavStyle";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <SearchBar
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${e.target[1].value}`);
        }}
      >
        <button style={{ background: "none", border: "none" }}></button>
        <SBLabel for="searchBar">
          <HoverEffect>
            <SearchIcon />{" "}
          </HoverEffect>
        </SBLabel>

        <SearchField
          id="searchBar"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchBar>
    </>
  );
}
