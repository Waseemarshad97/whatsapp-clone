import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlfor={name} className="text-teal-light text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          className="bg-input-background text-start focus:outline-none text-primary-strong h-10 rounded-lg px-5 py4 w-full"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Input;
