import styled, { css } from "styled-components";
import logo from "@/assets/SKyome-logo.png";
import logoW from "@/assets/SKyome-logo-w.png";
import device from "@/styles/media";

export const NavigationWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 20px 40px;
  z-index: 10;

  @media ${device.phone} {
    padding: 1.1rem;
  }
`;

export const NavigationInner = styled.div`
  display: flex;
  align-items: center;
`;

const logoCss = css`
  text-indent: -9999em;

  & a {
    display: block;
    width: 139px;
    height: 44px;
  }
  @media ${device.phone} {
    & a {
      width: 8rem;
      height: auto;
      aspect-ratio: 3.16;
    }
  }
`;

export const LogoBlack = styled.h1`
  flex: 1;
  ${logoCss}

  & a {
    background: url(${logo}) 0 0/100% no-repeat;
  }
  @media ${device.phone} {
    width: 100%;
    height: auto;
    aspect-ratio: 3.16;
  }
`;

export const LogoWhite = styled.h1`
  ${logoCss}

  & a {
    background: url(${logoW}) 0 0/100% no-repeat;
  }
`;

export const NavList = styled.nav`
  flex: 3;
  font-size: 1.5rem;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .contacts {
    display: flex;
    a {
      margin: 0 10px;
    }
  }
  & li.active {
    position: relative;
  }
  & li.active::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 48%;

    width: 0.375rem;
    height: 0.375rem;
    border-radius: 100%;

    background-color: #131313;
  }
  @media ${device.phone} {
    font-size: 1.25rem;
    & ul {
      justify-content: space-evenly;
    }
    & .contacts {
      display: none;
    }
  }
`;
