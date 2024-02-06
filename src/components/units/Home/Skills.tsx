import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Typography from "@/components/common/Typography";
import * as Styled from "./Skills.styles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Skills() {
  const skill = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: skill.current,
            start: "top center",
            end: "+=100%",
          },
        })
        .from(".hero__title", { opacity: 0, y: -50 })
        .from(".hero__list", { opacity: 0, y: -50 })
        .from(".hero__bar", { scaleX: 0 });
    },
    { scope: skill }
  );

  return (
    <Styled.SkillsWrap ref={skill}>
      <Styled.SkillsBox>
        <Typography.H2 align="center" className="hero__title">
          궁금하고 관심이 생기는 분야라면 <br />
          빠르게 도전하고 <br />
          끊임없이 성장하는 <br />
          프론트엔드 개발자 입니다.
        </Typography.H2>
      </Styled.SkillsBox>
      <div className="hero__list">
        <Styled.SkillsContent>
          <Styled.SkillsContentInner>
            <Typography.H3 align="center" fontWeight="bold">
              Front-End
            </Typography.H3>
            <Styled.SkillsTitleBar className="hero__bar" />
          </Styled.SkillsContentInner>
          <Styled.SkillsContentInner>
            <Styled.SkillsList>
              <li>HTML, CSS(SCSS), JS(ES6)</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Redux, Recoil, Context api</li>
            </Styled.SkillsList>
          </Styled.SkillsContentInner>
        </Styled.SkillsContent>
        <Styled.SkillsContent>
          <Styled.SkillsContentInner>
            <Typography.H3 align="center" fontWeight="bold">
              DevOps
            </Typography.H3>
            {/* <Styled.SkillsTitleBar className="hero__bar" /> */}
          </Styled.SkillsContentInner>
          <Styled.SkillsContentInner>
            <Styled.SkillsList>
              <li>AWS - EC2, S3</li>
              <li>Firebase</li>
            </Styled.SkillsList>
          </Styled.SkillsContentInner>
        </Styled.SkillsContent>
        <Styled.SkillsContent>
          <Styled.SkillsContentInner>
            <Typography.H3 align="center" fontWeight="bold">
              협업
            </Typography.H3>
            {/* <Styled.SkillsTitleBar className="hero__bar" /> */}
          </Styled.SkillsContentInner>
          <Styled.SkillsContentInner>
            <Styled.SkillsList>
              <li>Git / Github</li>
              <li>Figma</li>
              <li>Jira</li>
            </Styled.SkillsList>
          </Styled.SkillsContentInner>
        </Styled.SkillsContent>
      </div>
    </Styled.SkillsWrap>
  );
}

export default Skills;
