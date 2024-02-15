import styled, { css } from "styled-components";
import device from "@/styles/media";

export const KeyVisualBox = styled.div`
  position: relative;
  aspect-ratio: 1.575;
  overflow: hidden;
  @media ${device.phone} {
    aspect-ratio: 3/4;
  }
`;

const kvitem = css`
  position: absolute;

  border-radius: 20px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const KeyVisualItem = styled.div`
  ${kvitem};

  &.tripcometrue {
    top: 3%;
    left: 20.5%;

    width: 27%;
    aspect-ratio: 0.85;
  }
  &.langchat {
    top: -4%;
    left: 60%;

    width: 30%;
    aspect-ratio: 1;
  }
  &.skk-blog {
    top: 60%;
    left: 0;

    width: 24%;
    aspect-ratio: 1.13;
  }
  &.netflix {
    top: 70%;
    left: 33%;

    width: 30%;
    aspect-ratio: 1.6;
  }
  &.samas {
    top: 52%;
    left: 70%;

    width: 30%;
    aspect-ratio: 1.08;
  }
  @media ${device.phone} {
    &.tripcometrue {
      top: 6%;
      left: 15.5%;

      width: 35%;
    }
    &.langchat {
      top: 2%;
      left: 62%;

      width: 34%;
    }
    &.skk-blog {
      top: 60%;
      left: -4%;

      width: 32%;
      aspect-ratio: 3/4;
    }
    &.netflix {
      top: 70%;
      left: 36%;

      width: 30%;
      aspect-ratio: 3/4;
    }
    &.samas {
      top: 56%;
      left: 74%;

      width: 40%;
    }
  }
`;

export const KeyVisualTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 53.5%;

  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;

  h2 {
    font-size: 4rem;
    b {
      font-weight: 700;
    }
    margin-bottom: 20px;
  }
  p {
    font-size: 1.5rem;
  }
  @media ${device.phone} {
    width: 100%;
    h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;
