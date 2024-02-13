import Typography from "@/components/common/Typography";
import Ability from "@/components/units/About/Ability";
import Awards from "@/components/units/About/Awards";
import Career from "@/components/units/About/Career";
import Skills from "@/components/units/Home/Skills";

function About() {
  return (
    <div>
      <Typography.H2 align="center" mt={70}>
        About
      </Typography.H2>
      <Ability />
      <Career />
      <Awards />
      <Skills />
    </div>
  );
}

export default About;
