import React from "react";
import { Container } from "./Button.style";

/**
 * <Button />
 * - takes text in as a parameter
 * - sets the ...rest parameter on the button as well
 */
export default function Button({ t, ...rest }) {
  return <Container {...rest}>{t}</Container>;
}
