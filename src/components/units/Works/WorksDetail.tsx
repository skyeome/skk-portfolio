import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Typography from "@/components/common/Typography";
import { IoHome, IoLogoGithub } from "react-icons/io5";
import { WorksDetailProps } from "./WorksDetail.types";
import * as Styled from "./WorksDetail.styles";

function WorksDetail({ detail }: WorksDetailProps) {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickGoBack = () => {
    navigate(-1);
  };
  useOnClickOutside(modalRef, onClickGoBack);

  return (
    <AnimatePresence>
      {detail && (
        <>
          <Styled.WorkDetailModalDim $isopen={`${Boolean(detail)}`} />
          <Styled.WorkDetailModal>
            <Styled.WorkDetailModalBox layoutId={detail.name} ref={modalRef}>
              <Styled.WorkDetailThumb>
                <img src={detail.image} alt={detail.name} />
              </Styled.WorkDetailThumb>
              <div className="desc">
                <Typography.H3 fontWeight="bold">{detail.title}</Typography.H3>
                <Typography color="gray" mt={16} mb={16}>
                  {detail.desc}
                </Typography>
                <Typography color="gray" mb={16}>
                  {detail.period}
                </Typography>
                <Typography color="gray">{detail.member}</Typography>
                <Styled.WorkDetailLinks>
                  {detail.link && (
                    <li>
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography align="center" fontSize={40}>
                          <IoHome />
                        </Typography>
                        <Typography
                          tag="h4"
                          align="center"
                          fontWeight="bold"
                          mt={16}
                        >
                          배포 주소
                        </Typography>
                      </a>
                    </li>
                  )}
                  {detail.fe_github && (
                    <li>
                      <a
                        href={detail.fe_github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography align="center" fontSize={40}>
                          <IoLogoGithub />
                        </Typography>
                        <Typography
                          tag="h4"
                          align="center"
                          fontWeight="bold"
                          mt={16}
                        >
                          FE 깃허브
                        </Typography>
                      </a>
                    </li>
                  )}
                  {detail.be_github && (
                    <li>
                      <a
                        href={detail.be_github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography align="center" fontSize={40}>
                          <IoLogoGithub />
                        </Typography>
                        <Typography
                          tag="h4"
                          align="center"
                          fontWeight="bold"
                          mt={16}
                        >
                          BE 깃허브
                        </Typography>
                      </a>
                    </li>
                  )}
                </Styled.WorkDetailLinks>
                <Typography.H3 mb={24}>주요 개발 기능</Typography.H3>
                <Styled.WorkDetailFeatures>
                  {detail.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </Styled.WorkDetailFeatures>
                <Typography.H3 mt={48} mb={24}>
                  개발 Stacks
                </Typography.H3>
                <Styled.WorkDetailFeatures>
                  {detail.stacks.map((stack, index) => (
                    <li key={index}>{stack}</li>
                  ))}
                </Styled.WorkDetailFeatures>
              </div>
            </Styled.WorkDetailModalBox>
          </Styled.WorkDetailModal>
        </>
      )}
    </AnimatePresence>
  );
}

export default WorksDetail;
