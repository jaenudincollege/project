import styled, { css } from "styled-components";

export const variant = (variants) => (props) => {
  const variantKey = props["variant"];
  return variants[variantKey];
};

const Button = styled.button`
  padding: 8px 20px;
  border: none;
  color: white;
  text-transform: capitalize;
  border-radius: 8px;

  ${variant({
    danger: css`
      background-color: #f03e3e;
    `,
    primary: css`
      background-color: #0ca678;
    `,
    newItem: css`
      width: 20%;
      border-radius: 0;
      color: #000;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border: none;
      outline: 1px solid;
    `,
  })}
`;

export default Button;
