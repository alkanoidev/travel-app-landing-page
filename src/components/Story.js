import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
`;
const Img = styled.img`
  border-radius: 10px;
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 19px;
`;
const P = styled.p`
  font-size: 15px;
  padding: 10px 0px;
`;
const A = styled.a`
  color: var(--primary);
  font-size: 15px;
`;
export default function Story({ image, title, text, delay }) {
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
        <Img src={image} alt="image" />
        <H1>{title}</H1>
        <P>{text}</P>
        <A href="#">Read more</A>
      </motion.div>
    </Container>
  );
}
