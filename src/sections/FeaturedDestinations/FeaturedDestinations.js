import React from "react";
import "./style.css";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import Destination from "../../components/Destination";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

const H1 = styled.h1`
  font-size: 36px;
  font-family: "Playfair Display", serif;
`;
const Right = styled.div`
  color: var(--primary);
  display: flex;
  font-size: 17px;
  align-items: center;
  font-weight: 1000;
  &:hover {
    cursor: pointer;
    font-weight: 800;
  }
`;
export default function FeaturedDestinations() {
  return (
    <div className="FeaturedDestinations">
      <div className="header">
        <H1>Featured destinations</H1>
        <Right>
          View All <BsChevronRight />
        </Right>
      </div>
      <div className="destinations">
        <Destination image={image1} title="Raja Ampat" text="Indonesia" delay={0} />
        <Destination image={image2} title="Fanjingshan" text="China" delay={0.1}/>
        <Destination image={image3} title="Raja Ampat" text="Indonesia" delay={0.2} />
        <Destination image={image4} title="Skadar" text="Montenegro" delay={0.3} />
      </div>
    </div>
  );
}
