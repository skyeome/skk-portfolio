import Typography from "@/components/common/Typography";
import * as Styled from "./Ability.styles";

function Ability() {
  return (
    <Styled.AbilityContainer>
      <Styled.AbilityList>
        <Typography tag="li">
          다수의 프로젝트에서 디자이너, 개발자, 기획자와의 커뮤니케이션 및 협업
          경험이 있습니다.
        </Typography>
        <Typography tag="li">
          도전해보고 싶은 기술이라면 빠르게 도전하고 학습합니다.
        </Typography>
        <Typography tag="li">
          기획 의도를 캐치하고 유저의 입장에서 바라보는 UI&UX를 지향합니다.
        </Typography>
        <Typography tag="li">
          팀원들과의 원활한 협업을 위한 읽기 좋고 유지보수가 쉬운 코드를
          지향합니다.
        </Typography>
      </Styled.AbilityList>
    </Styled.AbilityContainer>
  );
}

export default Ability;
