import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  aspect-ratio: 2;
  background-color: #131313;
  padding: 8% 0 10%;
  box-sizing: border-box;
`;

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;

  li {
    width: 31.25%;
    font-size: 2.5rem;
    color: #fff;

    border-radius: 20px;
    border: 1px solid #333;

    box-sizing: border-box;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.625rem;
      padding: 13.33% 2%;

      img {
        width: 3.75rem;
      }
    }
  }
`;
