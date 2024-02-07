import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Typography from "@/components/common/Typography";
import { WorksItemsProps } from "./WorksItems.types";
import * as Styled from "./WorksItems.styles";

function WorksItems({ data, isLoading }: WorksItemsProps) {
  if (isLoading) return null;
  return (
    <Styled.WorksListWrap>
      <Styled.WorksList>
        {data?.map((portfolio) => (
          <Styled.WorksListItem className="md" key={portfolio.name}>
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
