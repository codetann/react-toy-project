import React, { useRef, useState } from "react";
// components
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Output from "../../components/Output/Output";
import Desc from "../../components/Desc/Desc";

let DATA = [
  "James",
  "Jessica",
  "Melody",
  "Tyler",
  "Blake",
  "Jennifer",
  "Mark",
  "Maddy",
];

export default function FilterString() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleClick = () => {
    let newArr = DATA.filter((str) => {
      str = str.toLowerCase();
      if (str.split("").includes(value)) return str;
    });

    setText(JSON.stringify(newArr));
  };

  return (
    <Card>
      <Title>Filter String</Title>
      <Desc>
        Filter an array of strings based on a letter given.
        <br />
        <br />
        <p
          style={{ color: "#ffffff36" }}
        >{`[ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]`}</p>
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
