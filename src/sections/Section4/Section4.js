import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import image from "./Thousand-03.png";
import { motion } from "framer-motion";
import "./style.css";

const Title = styled.h1`
  font-size: 36px;
  font-family: "Playfair Display", serif;
  margin-bottom: 20px;
`;
const P = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
`;

export default function Section4() {
  return (
    <div className="Section4">
      <div className="right1">
        <Title>Guides by Thousand Sunny </Title>
        <div>
          <P>
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </P>
          <Button outlined={false} text="Download" width="160px" />
        </div>
      </div>
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
    </div>
  );
}
