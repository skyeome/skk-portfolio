interface PortfolioData {
  title: string;
  desc: string;
  image: string;
  stacks: string;
  link: string;
}

export const PORTFOLIO_DATA: PortfolioData[] = [
  {
    title: "Tripcometrue",
    desc: "여행 계획을 세우고 여행 후기를 작성할 수 있는 여행 여정 공유 플랫폼",
    image: "/tripcometrue.jpg",
    stacks: "React / Typescript / React Query / Styled-component",
    link: "tripcometrue",
  },
  {
    title: "LANGCHAT",
    desc: "관심사를 토대로 언어를 교환할 수 있는 채팅앱입니다👫",
    image: "/langchat.jpg",
    stacks: "React / Typescript / Styled-component",
    link: "LANGCHAT",
  },
  {
    title: "SAMAS Electronics",
    desc: "자동차 WIRE HARNESS 사업을 30년동안 지속해온 자동차 Wire Harness 제조 업체 홈페이지",
    image: "/samas-pc.webp",
    stacks: "PHP / MySQL / 그누보드 / Webpack / ES6",
    link: "samas",
  },
  {
    title: "Netflix Clone App",
    desc: "넷플릭스 화면과 유사하게 영화 상세 정보를 확인할수 있는 앱",
    image: "/netflix-clone-app-detail01.jpg",
    stacks: "React / Typescript / Styled-component",
    link: "netflix-clone-app",
  },
  {
    title: "닥터스피부과",
    desc: "닥터스피부과 홈페이지 퍼블리싱 작업을 진행하였습니다",
    image: "/doctors365-pc.jpg",
    stacks: "PHP / MySQL / 그누보드 / Webpack / ES6",
    link: "doctors365",
  },
];
