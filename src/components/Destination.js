import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 25%;
  transition: 0.2s all ease;
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
  &:hover {
    transform: scale(120%);
    cursor: pointer;
  }
  border-radius: 20px;
  //   display: flex;
  //   alignItems: flex-end;
  //   justifyContent: flex-start;
`;
const Overlay = styled.div`
  width: 50%;
  background: var(--background);
  border-radius: 0px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
  position: relative;
  bottom: 60px;
  left: 0px;
  z-index: 1;
`;
const H1 = styled.h1`
  font-size: 17px;
  font-weight: bold;
  color: var(--primary-text);
`;
const P = styled.p`
  font-size: 15px;
  color: var(--secondary-text);
`;

export default function Destination({ image, title, text, delay }) {
  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ delay: delay }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
      >
        <img
          src={image}
          alt="image"
          style={{ borderRadius: "10px", width: "100%" }}
        ></img>
        <Overlay>
          <H1>{title}</H1>
          <P>{text}</P>
        </Overlay>
      </motion.div>
    </Container>
  );
}
