import styled from "styled-components";
import { variant, color, typography, space } from "styled-system";
import propTypes from "prop-types";

import "../App.css";

const variants = {
  h1: {
    fontSize: "30px",
    fontWeight: "600",
    color: "var(--text-color)",
  },
  h2: {
    fontSize: "24px",
    fontWeight: "600",
    color: "var(--text-color)",
  },
  h3: {
    fontSize: "18px",
    fontWeight: "600",
    color: "var(--text-color)",
  },
  h4: {
    fontSize: "18px",
    fontWeight: "400",
    color: "var(--secondary-color)",
  },
  h5: {
    fontSize: "16px",
    fontWeight: "400",
    color: "var(--text-color)",
  },
  h6: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#ffffff",
  },
  body1: {
    fontSize: "16px",
    fontWeight: "400",
    color: "var(--text-color)",
  },
  body2: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#999999",
  },
  link1: {
    fontSize: "18px",
    fontWeight: "400",
    color: "var(--primary-color)",
  },
  link2: {
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--primary-color)",
  },
  link3: {
    fontSize: "16px",
    fontWeight: "400",
    color: "var(--primary-color)",
  },
  link4: {
    fontSize: "14px",
    fontWeight: "400",
    color: "var(--primary-color)",
  },
};

const TextVariantList = Object.keys(variants);

const TextVariants = variant({
  variants,
});

const Text = styled.span`
  color: var(--primary-color);
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  user-select: ${(props) => props.selectable};

  &:disabled,
  &[disabled] {
    color: #d7d7d7;
  }

  ${color};
  ${typography};
  ${space};
  ${TextVariants};
`;

export default Text;

Text.defaultProps = {
  selectable: "none",
};

Text.propTypes = {
  variant: propTypes.oneOf(TextVariantList),
  selectable: propTypes.string,
};
