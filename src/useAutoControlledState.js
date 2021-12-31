import { useState } from "react";

export function useAutoControlledState({ value, defaultValue, onChange }) {
  let [state, setState] = useState(defaultValue);

  if (value !== undefined && defaultValue !== undefined) {
    throw new Error(
      "Can not pass in `value` and `defaultValue` at the same time"
    );
  }

  if (value === undefined) {
    const thatSetState = setState
    setState = (valueOrCallback) => {
      const newValue =
        typeof valueOrCallback === 'function'
          ? valueOrCallback(state)
          : valueOrCallback
      thatSetState(newValue)
      if (newValue !== state) onChange(newValue)
    }
  } else {
    // 受控模式
    state = value
    setState = (valueOrCallback) => {
      const newValue =
        typeof valueOrCallback === 'function'
          ? valueOrCallback(state)
          : valueOrCallback
      if (newValue !== state) onChange(newValue)
    }
  }

  return [state, setState];
}
