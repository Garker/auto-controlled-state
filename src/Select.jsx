import React, { useState } from "react";
import { useAutoControlledState } from "./useAutoControlledState";

export default function ({ list, onChange, defaultValue, value }) {
  const [selected, setSelected] = useAutoControlledState({
    value,
    defaultValue,
    onChange,
  });

  const current = list.find((item) => item.value === selected);

  return (
    <details>
      <summary>{current.label}</summary>
      <ul className="options">
        {list.map((item) => (
          <li
            className="item"
            key={item.value}
            onClick={() => setSelected(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </details>
  );
}
