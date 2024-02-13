import styled, { css } from "styled-components";
import { wrapCss } from "@/components/units/Home/Skills.styles";
import device from "@/styles/media";

export const listCss = css`
  list-style: disc;
  padding-left: 1.25rem;

  & li {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  @media ${device.phone} {
    & li {
      font-size: 1rem;
    }
  }
`;

export const AbilityContainer = styled.div`
  ${wrapCss}
  margin-bottom: 6.25rem;
  @media ${device.phone} {
    margin-bottom: 3rem;
  }
`;

export const AbilityList = styled.ul`
  margin-top: 2rem;
  ${listCss};
`;
