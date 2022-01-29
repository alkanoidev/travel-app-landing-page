import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--secondary-text);
  &:hover {
    cursor: pointer;
  }
  border-radius: 6px;
`;

export default function DatePicker() {
  return (
    <Container>
      <input type="date" style={{ width: "100%", border: "none" }} />
    </Container>
  );
}
