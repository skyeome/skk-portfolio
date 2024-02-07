import { KEY_VISUALS } from "@/constants/keyvisual";
import * as Styled from "./KeyVisual.styles";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function KeyVisual() {
  const kv = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      gsap.from(".kv__image", { duration: 0.8, opacity: 0, stagger: 0.4 });

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: kv.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        })
        .to(".kv__title", { y: 50 })
        .to(".tripcometrue", { y: -50 })
        .to(".langchat", { y: -30 })
        .to(".doctors365", { y: 30 })
        .to(".netflix", { y: -60 })
        .to(".samas", { y: -30 });
    },
    { scope: kv }
  );

  return (
    <Styled.KeyVisualBox ref={kv}>
      {KEY_VISUALS.map((item, index) => (
        <Styled.KeyVisualItem key={index} className={`kv__image ${item.name}`}>
          <img src={item.src} alt={item.alt} />
        </Styled.KeyVisualItem>
      ))}
      <Styled.KeyVisualTitle className="kv__title">
        <h2>
          SKyome’s <b>works</b>
        </h2>
        <p>FrontEnd-Developer portfolio</p>
      </Styled.KeyVisualTitle>
    </Styled.KeyVisualBox>
  );
}

export default KeyVisual;
