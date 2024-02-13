import Typography from "@/components/common/Typography";
import * as Styled from "./Career.styles";

function Awards() {
  return (
    <Styled.CareerContainer>
      <Typography.H2 align="center" mb={36}>
        Awards
      </Typography.H2>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">웹어워드코리아</Typography.H3>
          <Typography color="gray" mt={10}>
            2021.11
          </Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold">전문의료분야 최우수상</Typography.H3>
          <Typography.H3 color="gray" mt={10} mb={36}>
            닥터스피부과
          </Typography.H3>
        </div>
      </Styled.CareerItem>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">GDWEB 어워드</Typography.H3>
          <Typography color="gray" mt={10}>
            2020.11
          </Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold">WINNER PRIZE</Typography.H3>
          <Typography.H3 color="gray" mt={10} mb={36}>
            미미치과
          </Typography.H3>
        </div>
      </Styled.CareerItem>
      <Styled.CareerItem>
        <div className="info">
          <Typography.H3 fontWeight="bold">웹어워드코리아</Typography.H3>
          <Typography color="gray" mt={10}>
            2020.11
          </Typography>
        </div>
        <div className="desc">
          <Typography.H3 fontWeight="bold">전문의료분야 최우수상</Typography.H3>
          <Typography.H3 color="gray" mt={10} mb={36}>
            미미치과
          </Typography.H3>
        </div>
      </Styled.CareerItem>
    </Styled.CareerContainer>
  );
}

export default Awards;
