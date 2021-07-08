import React, { useRef, useState } from "react";
// components
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Output from "../../components/Output/Output";
import Desc from "../../components/Desc/Desc";

export default function Sum() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setTotal(+value1 + +value2);
  };

  return (
    <Card>
      <Title>Sum</Title>
      <Desc>Enter two numbers to get their sum.</Desc>
      <Input
        type="number"
        onChange={(e) => setValue1(e.target.value)}
        placeholder="Enter Value Here"
      />
      <Input
        type="number"
        onChange={(e) => setValue2(e.target.value)}
        placeholder="Enter Value Here"
      />
      <Button t="Add" onClick={handleClick} />
      <Output text="Total: " data={total} />
    </Card>
  );
}
