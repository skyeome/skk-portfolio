import Typography from "@/components/common/Typography";
import * as Styled from "./Career.styles";

function Career() {
  return (
    <Styled.CareerContainer>
      <Typography.H2 align="center" mb={36}>
        Career
      </Typography.H2>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">㈜비스톤스</Typography.H3>
          <Typography mt={10} mb={10} color="gray">
            서울 강남구 소재
          </Typography>
          <Typography color="gray">2022.08 - 2023.05</Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold" mb={10}>
            웹 퍼블리셔
          </Typography.H3>
          <Typography color="gray" mb={24}>
            삼성닷컴 언팩행사 상세페이지 제작 업무를 맡았었고 언팩 종료 이후
            이전 회사에서 다수의 JS 문제 해결 경험을 인정받아 삼성전자 일본
            사이트 AEM(Adobe Experience Manager) 마이그레이션 작업을
            진행했습니다.
          </Typography>
          <ul>
            <li>HTML, CSS, JS(ES6) 웹표준 준수한 웹사이트 제작 업무</li>
            <li>Raw 코드를 CMS로 이식하는 마이그레이션 및 트러블 슈팅 업무</li>
          </ul>
        </div>
      </Styled.CareerItem>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">파인애플피티엘</Typography.H3>
          <Typography mt={10} mb={10} color="gray">
            서울 강남구 소재
          </Typography>
          <Typography color="gray">2018.08 - 2021.07</Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold" mb={10}>
            웹 퍼블리셔
          </Typography.H3>
          <Typography color="gray" mb={24}>
            기획 의도를 고려하고 서비스를 최대한 유저의 입장에서 생각하며
            개발하였으며, 또한 광고주의 많은 요청에 대응하기 위해서 수정 및
            유지보수가 쉽고 최대한 효율적인 코드를 작성하려고 노력하였습니다.
          </Typography>
          <ul>
            <li>HTML, CSS, JS(ES6) 웹표준 준수한 웹사이트 제작 업무</li>
            <li>php - 그누보드, XE, 워드프레스 스킨제작 및 간단한 개발 업무</li>
            <li>웹 UI&UX 디자인 업무</li>
          </ul>
        </div>
      </Styled.CareerItem>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">이미지톡</Typography.H3>
          <Typography mt={10} mb={10} color="gray">
            서울 강서구 소재
          </Typography>
          <Typography color="gray">2015.09 - 2017.09</Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold" mb={10}>
            디자이너
          </Typography.H3>
          <Typography color="gray" mb={24}>
            디자인팀의 팀원으로서 오픈마켓 제품 상세페이지를 디자인하고, 포스터,
            3단 접지, 패키지 디자인과 같은 인쇄물 디자인 하는 업무를 맡았습니다.
          </Typography>
          <ul>
            <li>오픈마켓 납품용 상세페이지 디자인</li>
            <li>포스터, 3단 접지 등 인쇄물 디자인</li>
          </ul>
        </div>
      </Styled.CareerItem>
    </Styled.CareerContainer>
  );
}

export default Career;
