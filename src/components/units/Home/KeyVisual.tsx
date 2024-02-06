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
      tl.current = gsap
        .timeline()
        .fromTo(".tripcometrue", { opacity: 0 }, { opacity: 1 })
        .fromTo(".langchat", { opacity: 0 }, { opacity: 1 })
        .fromTo(".doctors365", { opacity: 0 }, { opacity: 1 })
        .fromTo(".netflix", { opacity: 0 }, { opacity: 1 })
        .fromTo(".samas", { opacity: 0 }, { opacity: 1 });
    },
    { scope: kv }
  );

  return (
    <Styled.KeyVisualBox ref={kv}>
      {KEY_VISUALS.map((item, index) => (
        <Styled.KeyVisualItem key={index} className={item.name}>
          <img src={item.src} alt={item.alt} />
        </Styled.KeyVisualItem>
      ))}
      <Styled.KeyVisualTitle>
        <h2>
          SKyome’s <b>works</b>
        </h2>
        <p>FrontEnd-Developer portfolio</p>
      </Styled.KeyVisualTitle>
    </Styled.KeyVisualBox>
  );
}

export default KeyVisual;
