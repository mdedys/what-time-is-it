import React, { CSSProperties } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core";

const Outer = styled.div<{
  borderColor: string;
  backgroundColor: string;
  boxShadow: string;
}>`
  background-color: ${(props) => props.theme.palette.background.default};
  box-shadow: ${(props) => props.theme.shadows[5]};
  border: 1px solid ${(props) => props.theme.palette.dark};
  padding: 8px;
`;

const Inner = styled.div<{ borderColor: string }>`
  border: 1px solid ${(props) => props.theme.palette.secondary.dark};
`;

interface Props {
  style?: CSSProperties;
}

export default function (props: React.PropsWithChildren<Props>) {
  const theme = useTheme();

  return (
    <Outer
      backgroundColor={theme.palette.background.default}
      borderColor={theme.palette.primary.dark}
      boxShadow={theme.shadows[5]}
      style={props.style}
    >
      <Inner borderColor={theme.palette.secondary.main}>{props.children}</Inner>
    </Outer>
  );
}
