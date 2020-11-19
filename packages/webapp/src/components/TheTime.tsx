import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { DateTime } from "luxon";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 8px 0;
  width: 100%;
  height: 100%;
`;

interface Props {
  datetime: DateTime;
}

export default function TheTime(props: Props) {
  const { datetime } = props;
  return (
    <Container>
      <Typography variant="h5">{datetime.toFormat("h:mm:ss a")}</Typography>
      <Typography variant="subtitle2" color="primary">
        ({datetime.toFormat("ZZZZZ")})
      </Typography>
    </Container>
  );
}
