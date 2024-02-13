import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Typography from "@/components/common/Typography";
import { WorksItemsProps } from "./WorksItems.types";
import * as Styled from "./WorksItems.styles";
import { useEffect } from "react";

function WorksItems({ data, isLoading }: WorksItemsProps) {
  const [searchParams] = useSearchParams();
  const pos = searchParams.get("position");
  useEffect(() => {
    if (pos) window.scrollTo(0, 0);
  }, [pos]);

  if (isLoading) return null;
  return (
    <Styled.WorksListWrap>
      <Styled.WorksList>
        {data?.map((portfolio) => (
          <Styled.WorksListItem className={portfolio.size} key={portfolio.name}>
            <motion.div layoutId={portfolio.name}>
              <Styled.WorksListThumb className="thumbnail">
                <img src={portfolio.image} alt={portfolio.name} />
              </Styled.WorksListThumb>
              <div className="desc">
                <Link to={`/works/${portfolio.name}`}>
                  <Typography.H3 fontWeight="bold" mt={24}>
                    {portfolio.title} &nbsp;
                    <IoArrowForward />
                  </Typography.H3>
                </Link>
                <Typography mt={16} color="gray">
                  {portfolio.desc}
                </Typography>
              </div>
            </motion.div>
          </Styled.WorksListItem>
        ))}
      </Styled.WorksList>
    </Styled.WorksListWrap>
  );
}

export default WorksItems;
