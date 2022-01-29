import React from "react";
import Button from "../../components/Button";
import SelectionMenu from "../../components/SelectionMenu";
import image from "./thousand-01_1.png";
import styled from "styled-components";
import DatePicker from "../../components/DatePicker";
import { motion } from "framer-motion";
import "./style.css";

const Title = styled.h1`
  font-size: 64px;
  font-family: "Playfair Display", serif;
  margin-bottom: 90px;
  @media screen and (max-width: 600px) {
    & {
      margin-bottom: 40px;
    }
  }
`;
const Title1 = styled.h2`
  font-size: 22px;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    & {
      margin-bottom: 20px;
    }
  }
`;

export default function Main() {
  return (
    <div className="Main">
      <div className="left">
        <Title>Explore and Travel</Title>
        <div>
          <Title1>Holiday finder</Title1>
          <div className="grid">
            <SelectionMenu
              title="Location"
              items={[
                "placeholder location",
                "placeholder location",
                "placeholder location",
                "placeholder location",
                "placeholder location",
                "placeholder location",
                "placeholder location",
              ]}
            />
            <SelectionMenu
              title="Activity"
              items={[
                "placeholder activity",
                "placeholder activity",
                "placeholder activity",
                "placeholder activity",
                "placeholder activity",
              ]}
            />
            <SelectionMenu title="Grade" items={["1", "2", "3", "4", "5"]} />
            <DatePicker />
          </div>
          <Button outlined={false} text="Explore" width="180px" />
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
        <div className="right">
          <img src={image} alt="picture" width="670px" />
        </div>
      </motion.div>
    </div>
  );
}
