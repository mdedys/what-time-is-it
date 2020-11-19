import React, { CSSProperties } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core";

const Outer = styled.div<{ backgroundColor: string; boxShadow: string }>`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
  padding: 8px;
`;

const Inner = styled.div<{ borderColor: string }>`
  border: 1px solid ${(props) => props.borderColor};
`;

interface Props {
  style?: CSSProperties;
}

export default function (props: React.PropsWithChildren<Props>) {
  const theme = useTheme();

  return (
    <Outer
      backgroundColor={theme.palette.background.default}
      boxShadow={theme.shadows[1]}
      style={props.style}
    >
      <Inner borderColor={theme.palette.primary.main}>{props.children}</Inner>
    </Outer>
  );
}
