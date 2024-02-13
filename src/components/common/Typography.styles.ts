import styled, { css } from "styled-components";
import { TypographyStyledProps } from "./Typography.types";
import device from "@/styles/media";

const lh13 = css`
  line-height: 1.3;
`;

export const Text = styled.p<TypographyStyledProps>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: ${({ $lineHeight }) =>
    $lineHeight === "undefined" ? 1.5 : $lineHeight};
  color: ${({ $color }) =>
    $color === "white" ? "#fff" : $color === "gray" ? "#707070" : "#131313"};
  text-align: ${({ $align }) => $align || "left"};
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
  svg {
    vertical-align: top;
  }
`;

export const H2 = styled.h2<TypographyStyledProps>`
  font-size: 2.5rem;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  ${lh13};
  color: ${({ $color }) =>
    $color === "white" ? "#fff" : $color === "gray" ? "#707070" : "#131313"};
  text-align: ${({ $align }) => $align || "left"};
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
  @media ${device.phone} {
    font-size: 1.25rem;
  }
  @media ${device.tablet} {
    font-size: 1.75rem;
  }
`;

export const H3 = styled.h3<TypographyStyledProps>`
  font-size: 1.5rem;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  ${lh13};
  color: ${({ $color }) =>
    $color === "white" ? "#fff" : $color === "gray" ? "#707070" : "#131313"};
  text-align: ${({ $align }) => $align || "left"};
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
  @media ${device.phone} {
    font-size: 1.125rem;
  }
  @media ${device.tablet} {
    font-size: 1.25rem;
  }
`;
