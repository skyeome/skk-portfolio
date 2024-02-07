import { motion } from "framer-motion";
import styled from "styled-components";
import { WorksModalProps } from "./WorksDetail.types";

export const WorkDetailModalDim = styled.div<WorksModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ $isopen }) => ($isopen === "true" ? 10 : -1)};

  background-color: #00000033;
  opacity: ${({ $isopen }) => ($isopen === "true" ? 1 : 0)};

  transition: 0.3s;
`;

export const WorkDetailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkDetailModalBox = styled(motion.div)`
  width: 100%;
  max-width: 33.75rem;
  height: 90vh;
  background-color: #fff;

  border-radius: 1.25rem;
  overflow: auto;

  .desc {
    padding: 2.5rem;
  }
`;

export const WorkDetailThumb = styled(motion.div)`
  overflow: hidden;
  aspect-ratio: 4/3;

  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const WorkDetailLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;

  margin: 2.25rem 0;

  li {
    width: 25%;
  }
`;

export const WorkDetailFeatures = styled.ul`
  li {
    line-height: 1.3;
    margin-bottom: 1rem;
    list-style: disc;
  }
`;
