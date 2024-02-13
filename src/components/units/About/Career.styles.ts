import styled from "styled-components";
import device from "@/styles/media";
import { wrapCss } from "@/components/units/Home/Skills.styles";
import { listCss } from "./Ability.styles";

export const CareerContainer = styled.div`
  ${wrapCss};
  margin-bottom: 6.25rem;
  @media ${device.phone} {
    margin-bottom: 4rem;
  }
`;

export const CareerItem = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-bottom: 3rem;

  border-bottom: 1px solid #c3c3c3;
  & .info {
    flex: 1;
    margin-bottom: 1rem;
  }
  & .desc {
    flex: 2;
  }
  @media ${device.phone} {
    display: block;
  }
  ul {
    ${listCss};
    margin-bottom: 2.5rem;
  }
`;
