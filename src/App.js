import React from "react";
import styled from "styled-components";
// styled components
import { Application } from "./App.style";
import EvenOdd from "./toys/EvenOdd/EvenOdd";
import FilterObj from "./toys/FilterObj/FilterObj";
import FilterString from "./toys/FilterString/FilterString";
import Palindrome from "./toys/Palindrome/Palindrome";
import Sum from "./toys/Sum/Sum";

function App() {
  return (
    <Application>
      <EvenOdd />
      <FilterObj />
      <FilterString />
      <Palindrome />
      <Sum />
    </Application>
  );
}

export default App;
