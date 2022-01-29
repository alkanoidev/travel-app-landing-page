import React from "react";
import "./style.css";
import styled from "styled-components";
import image from "./Thousand-02_1.png";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const Title = styled.h1`
  font-size: 36px;
  font-family: "Playfair Display", serif;
  margin-bottom: 20px;
`;
const P = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
`;
export default function Section2() {
  return (
    <div className="Section2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <div className="left">
          <img src={image} alt="picture" width="670px" />
        </div>
      </motion.div>
      <div className="right1">
        <Title>A new way to explore the world </Title>
        <div>
          <P>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </P>
          <Button outlined={false} text="Learn More" width="160px" />
        </div>
      </div>
    </div>
  );
}
