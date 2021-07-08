import React, { useRef, useState } from "react";
// components
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Output from "../../components/Output/Output";
import Desc from "../../components/Desc/Desc";

let DATA = [
  { name: "Jimmy Joe", title: "Hack0r", age: 12 },
  { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
  { name: "Carly Armstrong", title: "CEO" },
];

export default function FilterObj() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleClick = () => {
    let newArr = DATA.filter((obj) => {
      for (let key in obj) {
        if (key === value) return obj;
      }
    });

    setText(JSON.stringify(newArr));
  };

  return (
    <Card>
      <Title>Filter Object</Title>
      <Desc>
        Filter objects to see if they contain the value entered.
        <br />
        <br />
        <p
          style={{ color: "#ffffff36" }}
        >{`[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]`}</p>
      </Desc>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Value Here"
      />
      <Button t="Filter" onClick={handleClick} />
      <Output text="Filterd: " data={text} />
    </Card>
  );
}
