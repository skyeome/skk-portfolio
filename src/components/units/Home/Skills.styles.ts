import styled from "styled-components";
import device from "@/styles/media";

export const SkillsWrap = styled.div`
  width: 100%;
  max-width: 984px;
  margin: 0 auto 5rem;
  padding: 0 20px;
  @media ${device.phone} {
    padding: 0;
  }
`;

export const SkillsBox = styled.div`
  padding: 3rem 0 0;
  margin: 3rem 0;
`;

export const SkillsContent = styled.div`
  display: flex;
`;

export const SkillsContentInner = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const SkillsTitleBar = styled.span`
  display: block;
  width: 10.625rem;
  height: 0.3125rem;

  background-color: #131313;
  margin: 1rem auto 0;
`;

export const SkillsList = styled.ul`
  font-size: 1.5rem;
  line-height: 1.3;
  li {
    margin-bottom: 2.25rem;
  }
  @media ${device.phone} {
    font-size: 1.125rem;
  }
  @media ${device.tablet} {
    font-size: 1.25rem;
  }
`;
