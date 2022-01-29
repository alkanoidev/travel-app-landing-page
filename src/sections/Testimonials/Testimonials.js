import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./style.css";
import image from "./image6.png";
import {ReactComponent as Shape1} from "./element1.svg";
import {ReactComponent as Shape2} from "./element2.svg";

export default function Testimonials() {
  return (
    <div className="Testimonials">
      <div className="left">
        <h1>Testimonials</h1>
        <div className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="text">
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
          ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis
          nec”
        </p>
        <h2 className="name">Edward Newgate</h2>
        <h3 className="idkk">Founder Circle</h3>
      </div>
      <TestimonialPicture />
    </div>
  );
}
function TestimonialPicture() {
  return (
    <div className="TestimonialPicture">
      <Shape1 id="shape1" />
      <img src={image} alt="person" className="picture" />
      <div className="controls">
        <button>
          <BsChevronLeft />
        </button>
        <button>
          <BsChevronRight />
        </button>
      </div>
      <Shape2 id="shape2" />
    </div>
  );
}
