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
  const [isPal, setIsPal] = useState(null);

  const handleClick = () => {
    if (value === value.split("").reverse().join("")) {
      setIsPal(true);
    } else {
      setIsPal(false);
    }
  };

  return (
    <Card>
      <Title>Palindrome</Title>
      <Desc>Check to see if the input is a valid palindrome</Desc>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Value Here"
      />
      <Button t="Filter" onClick={handleClick} />
      <Output text="Filterd: " data={`${isPal}`} />
    </Card>
  );
}
