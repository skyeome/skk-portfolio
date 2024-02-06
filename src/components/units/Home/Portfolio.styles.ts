import styled from "styled-components";

export const PortfolioBox = styled.div``;

export const PortfolioItem = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PortfolioItemBox = styled.div`
  position: relative;

  width: 60%;
  max-width: 1200px;
  aspect-ratio: 4/3;

  border-radius: 20px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PortfolioItemText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 2rem 0 0;
  height: 33.3334%;
  background: linear-gradient(
    0deg,
    rgba(19, 19, 19, 0.7),
    rgba(19, 19, 19, 0.3)
  );

  color: #fff;
  text-align: center;

  h3 {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
  }
`;
