import React, { useRef, useState } from "react";
// components
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Output from "../../components/Output/Output";
import Desc from "../../components/Desc/Desc";

export default function EvenOdd() {
  const [even, setEven] = useState("");
  const [odd, setOdd] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    let evenArr = [];
    let oddArr = [];

    try {
      value
        .replaceAll(" ", "")
        .split(",")
        .forEach((v) => (+v % 2 === 0 ? evenArr.push(v) : oddArr.push(v)));

      setEven(evenArr.join(", "));
      setOdd(oddArr.join(", "));
    } catch {
      setError("Input Error");
    }
  };

  return (
    <Card>
      <Title>Evens and Odds</Title>
      <Desc>
        Enter a series of numbers sperated by a ,<br />
        i.e. 1, 4, 6 ,7
      </Desc>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Numbers Here"
      />
      <Button t="Split" onClick={handleClick} />
      <Output text="Evens: " data={error ? error : even} />
      <Output text="Odds: " data={error ? error : odd} />
    </Card>
  );
}
