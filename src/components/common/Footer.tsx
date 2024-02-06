import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import velogLogo from "@/assets/velog-logo.svg";
import * as Styled from "./Footer.styles";
import Typography from "./Typography";
import { LogoWhite } from "./Navigation.styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Styled.FooterWrap>
      <Typography.H2 align="center" color="white">
        Contacts
      </Typography.H2>
      <Styled.FooterLinks>
        <li>
          <a
            href="https://github.com/skyeome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography fontSize={60} lineHeight={1} color="white">
              <IoLogoGithub />
            </Typography>
            Github
          </a>
        </li>
        <li>
          <a href="mailto:tjru7230@gmail.com">
            <Typography fontSize={60} lineHeight={1} color="white">
              <MdOutlineEmail />
            </Typography>
            Email
          </a>
        </li>
        <li>
          <a
            href="https://velog.io/@skyome1223/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={velogLogo} alt="velog logo" />
            Velog
          </a>
        </li>
      </Styled.FooterLinks>
      <LogoWhite>
        <Link to="/">Skyome</Link>
      </LogoWhite>
    </Styled.FooterWrap>
  );
}

export default Footer;
