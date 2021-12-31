import React from "react";
import { useAutoControlledState } from "./useAutoControlledState";

export function Selector({ value, defaultValue, onChange, children, ...rest }) {
  const [selected, setSelected] = useAutoControlledState({
    value,
    defaultValue,
    onChange,
  });	

	const childList = React.Children.toArray(children).map((child) => child)

	const currentChild = childList.find((child) => child.props.value === selected)

  return (
    <details className="Selector" {...rest}>
      <summary>{currentChild.props.children}</summary>
      <ul className="Option">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClick: () => setSelected(child.props.value),
          });
        })}
      </ul>
    </details>
  );
}

function Option({ value, children, ...rest }) {
  return <li {...rest}>{children}</li>
}

Selector.Option = Option
