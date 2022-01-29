import React from "react";
import "./style.css";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import Story from "../../components/Story";

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
export default function TrendingStories() {
  return (
    <div className="TrendingStories">
      <div className="header">
        <H1>Trending stories</H1>
        <Right>
          View All <BsChevronRight />
        </Right>
      </div>
      <div className="destinations">
        <Story
          image={image1}
          title="The many benefits of  
                taking a healing holiday"
          text="‘Helaing holidays’ are on the rise 
                tohelp maximise your health and happines..."
          delay={0}
        />
        <Story
          image={image2}
          title="The best Kyoto restaurant
                to try Japanese food"
          text="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                to visit..."
          delay={0.1}
        />
        <Story
          image={image3}
          title="Skip Chichen Itza and head
                to this remote Yucatan"
          text="It’s remote and challenging to get,
                but braving the jungle and exploring
                these ruins without the..."
          delay={0.2}
        />
        <Story
          image={image4}
          title="Surf’s up at these beginner
                spots around the world"
          text="If learning to surf has in on your to-
                do list for a while, the good news
                is: it’s never too late..."
          delay={0.3}
        />
      </div>
    </div>
  );
}
