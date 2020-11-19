import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vh;
`;

export default function FourOFour() {
  return (
    <Container>
      <Typography variant="h3">Page Not Found</Typography>
    </Container>
  );
}
