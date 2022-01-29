import React from "react";
import styled from "styled-components";
import "./style.css";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { ReactComponent as Logo } from "./logo.svg";

const P = styled.p`
  font-size: 18px;
  color: var(--secondary-text);
`;
const H1 = styled.h1`
  font-size: 19px;
`;
const H2 = styled.h2`
  font-size: 18px;
  color: var(--secondary-text);
  &:hover {
    color: var(--primary-text);
    cursor: pointer;
  }
`;
export default function Footer() {
  return (
    <footer>
      <div className="footer1">
        <div className="item">
          <Logo />
          <P>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </P>
          <P>©2020 Thousand Sunny. All rights reserved</P>
        </div>
        <div className="item">
          <H1>Destinations</H1>
          <H2>Africa</H2>
          <H2>Antartica</H2>
          <H2>Asia</H2>
          <H2>Europe</H2>
          <H2>America</H2>
        </div>
        <div className="item">
          <H1>Shop</H1>
          <H2>Destination Guides</H2>
          <H2>Pictorial & Gifts</H2>
          <H2>Special Offers</H2>
          <H2>Delivery Times</H2>
          <H2>FAQs</H2>
        </div>
        <div className="item">
          <H1>Interests</H1>
          <H2>Adventure Travel</H2>
          <H2>Art And Culture</H2>
          <H2>Wildlife And Nature</H2>
          <H2>Family Holidays</H2>
          <H2>Food And Drink</H2>
        </div>
      </div>
      <div className="footer2">
        <div className="icons">
          <BsTwitter />
          <BsFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
}
