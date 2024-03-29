import { Link, useLocation } from "react-router-dom";
import * as Styled from "./Navigation.styles";
import githubLogo from "@/assets/github-logo.svg";
import velogLogo from "@/assets/velog-logo.svg";

function Navigation() {
  const { pathname } = useLocation();

  return (
    <Styled.NavigationWrap>
      <Styled.NavigationInner>
        <Styled.LogoBlack>
          <Link to="/">Skyome</Link>
        </Styled.LogoBlack>
        <Styled.NavList>
          <ul>
            <li
              className={pathname.startsWith("/about") ? "active" : undefined}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={pathname.startsWith("/works") ? "active" : undefined}
            >
              <Link to="/works">Works</Link>
            </li>
            <li className="contacts">
              <a
                href="https://github.com/skyeome"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <img src={githubLogo} alt="Github logo" />
              </a>
              <a
                href="https://velog.io/@skyome1223/posts"
                target="_blank"
                rel="noopener noreferrer"
                title="Velog"
              >
                <img src={velogLogo} alt="Velog logo" />
              </a>
            </li>
          </ul>
        </Styled.NavList>
      </Styled.NavigationInner>
    </Styled.NavigationWrap>
  );
}

export default Navigation;
