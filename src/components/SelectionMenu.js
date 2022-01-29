import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--secondary-text);
  &:hover {
    cursor: pointer;
  }
  border-radius: 6px;
`;
const H1 = styled.h1`
  font-size: 15px;
`;
const Ul = styled.ul`
  list-style: none;
  padding-top: 10px;
  position: absolute;
  z-index: 1;
  background: var(--background);
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid var(--secondary-text);
  border-radius: 0px 0px 20px 20px;
`;
const Li = styled.li`
  border-bottom: 1px solid var(--secondary-text);
  transition: 0.2s all ease;
  padding: 10px;
  &:hover {
    background-color: var(--secondary-text);
  }
`;
export default function SelectionMenu({ title, items }) {
  const [opened, setOpened] = useState(false);
  const container = useRef(null);
  return (
    <Container
      onClick={() => {
        setOpened((prev) => !prev);
      }}
      ref={container}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <H1>{title}</H1>
        <BsChevronDown />
      </div>
      {opened && (
        <Ul style={{ width: container.current.offsetWidth }}>
          {items.map((item,index) => (
            <Li key={index}>{item}</Li>
          ))}
        </Ul>
      )}
    </Container>
  );
}
