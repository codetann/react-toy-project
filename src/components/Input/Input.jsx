import React from "react";
import { Container } from "./Input.style.js";

export default function Input({ placeholder, type = "text", ...rest }) {
  return <Container placeholder={placeholder} type={type} {...rest} />;
}
