import React from "react";
import styled, { css } from "styled-components";

export default function Button({ outlined, width, text }) {
  const Button = styled.button`
    width: ${width};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    font-weight: bolder;
    ${outlined
      ? css`
          border: 1px solid var(--primary);
          color: var(--primary);
          background: #ffffff;
        `
      : css`
          color: #ffffff;
          background: var(--primary);
        `}
    border-radius: 8px;
    padding: 10px 10px;
    font-size: 15px;
    transition: 0.3s all ease;
    &:hover {
      ${outlined
        ? css`
            background: var(--primary);
            cursor: pointer;
            color: #ffffff;
          `
        : css`
            box-shadow: 0px 0px 10px 2px var(--primary);
            cursor: pointer;
          `}
    }
  `;
  return <Button>{text}</Button>;
}
