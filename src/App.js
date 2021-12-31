import React, { useState } from "react";
import "./App.css";
import Select from "./Select";
import {Selector} from './Selector';

const log = console.log;

const list = [
  { value: "Apple", label: "Apple" },
  { value: "Banana", label: "Banana" },
  { value: "Origin", label: "Origin" },
];

function App() {
  const [selected, setSelected] = useState("Banana");
  const [Sselected, setSselected] = useState("banana");

  return (
    <div className="App">
      <div
        className="example1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 20,
        }}
      >
        <Select
          list={list}
          value={selected}
          onChange={(newValue) => {
            setSelected(newValue);
            console.log(newValue);
          }}
        />
        <Select
          list={list}
          defaultValue="Apple"
          onChange={(newValue) => {
            console.log(newValue);
          }}
        />
      </div>
      <div
        className="example2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 20,
          marginTop: 100,
        }}
      >
        <Selector value={Sselected} onChange={(newValue) => {
          setSselected(newValue)
        }}>
          <Selector.Option value="apple">Apple</Selector.Option>
          <Selector.Option value="banana">Banana</Selector.Option>
          <Selector.Option value="orange">Orange</Selector.Option>
        </Selector>

        <Selector defaultValue="apple" onChange={log}>
          <Selector.Option value="apple">Apple</Selector.Option>
          <Selector.Option value="banana">Banana</Selector.Option>
          <Selector.Option value="orange">Orange</Selector.Option>
        </Selector>
      </div>
    </div>
  );
}

export default App;
