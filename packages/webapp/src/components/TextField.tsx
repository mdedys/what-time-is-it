import React from "react";
import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";

interface Props {
  value: string;
  placeholder: string;
  label: string;
}

export default function TextField(props: Props) {
  return (
    <MuiTextField
      value={props.value}
      placeholder={props.placeholder}
      label={props.label}
      variant="outlined"
    />
  );
}
