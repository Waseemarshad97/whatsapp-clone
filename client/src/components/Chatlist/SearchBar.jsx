import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="bg-search-input-container-background flex py-3 pl-5 item-center gap-3 h-14">
      <div className="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-l" />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="start new chat"
            className="bg-panel-header-background text-sm focus:outline-none text-panel-header-icon w-full"
          />
        </div>
      </div>
      <div className="pr-5 pl-3 flex items-center">
        <BsFilter className="text-panel-header-icon cursor-pointer text-xl" />
      </div>
    </div>
  );
}

export default SearchBar;
