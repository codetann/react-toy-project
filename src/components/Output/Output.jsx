import React from "react";
import { Container } from "./Output.style.js";

export default function Output({ text, data }) {
  return (
    <Container>
      <h3>{text}</h3>
      <p>{data}</p>
    </Container>
  );
}
