import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Typography from "@/components/common/Typography";
import { PortfolioProps } from "./Portfolio.types";
import * as Styled from "./Portfolio.styles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Portfolio({ data }: PortfolioProps) {
  const pf = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLDivElement>(".portfolio-item");
      boxes.forEach((box, index) => {
        const isLast = index === boxes.length - 1;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: box,
              start: "center center",
              end: "+=100%",
              scrub: true,
            },
          })
          .to(
            box,
            {
              ease: "none",
              scale: 0.6,
              opacity: 0,
              yPercent: isLast ? 33 : 75,
            },
            0
          );
      });
    },
    { dependencies: [data], scope: pf }
  );
  return (
    <Styled.PortfolioBox ref={pf}>
      {data?.map((item, index) => (
        <Styled.PortfolioItem className="portfolio-item" key={index}>
          <Styled.PortfolioItemBox>
            <Link to={`/works/${item.name}?position=top`}>
              <img src={item.image} alt={item.title} />
              <Styled.PortfolioItemText>
                <Typography.H3 color="white" align="center">
                  {item.title}
                </Typography.H3>
                <Typography color="white" align="center">
                  {item.desc}
                </Typography>
                <Typography color="white" align="center">
                  {item.stacks.join(", ")}
                </Typography>
              </Styled.PortfolioItemText>
            </Link>
          </Styled.PortfolioItemBox>
        </Styled.PortfolioItem>
      ))}
    </Styled.PortfolioBox>
  );
}

export default Portfolio;
