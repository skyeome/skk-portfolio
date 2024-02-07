import { motion } from "framer-motion";
import styled from "styled-components";

export const WorksListWrap = styled.div`
  width: 91.111%;
  margin: 5rem auto 5rem;
`;

export const WorksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.44%;
`;

export const WorksListItem = styled(motion.li)`
  margin-bottom: 4%;
  .desc {
    padding: 0 1rem;
  }
  &.sm {
    width: 24.4%;
    .thumbnail {
      aspect-ratio: 2/3;
    }
  }
  &.md {
    width: 48.78%;
    .thumbnail {
      aspect-ratio: 4/3;
    }
  }
  &.lg {
    width: 73.16%;
    .thumbnail {
      aspect-ratio: 2;
    }
  }
`;

export const WorksListThumb = styled(motion.div)`
  border-radius: 1.25rem;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
