import { useLayoutEffect, useState } from "react";
import { WorkInfo, getWorksList } from "@/apis/works";
import Typography from "@/components/common/Typography";
import WorksItems from "@/components/units/Works/WorksItems";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import WorksDetail from "@/components/units/Works/WorksDetail";

function Works() {
  const { id } = useParams();
  const [detail, setDetail] = useState<WorkInfo>();
  const { data, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: getWorksList,
  });

  useLayoutEffect(() => {
    if (data && id) {
      const foundItem = data.find((obj) => obj.name === id);
      setDetail(foundItem);
      document.body.classList.add("modal-open");
    } else if (!id) {
      setDetail(undefined);
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [data, id]);

  return (
    <div>
      <Typography.H2 align="center" mt={70}>
        Portfolio
      </Typography.H2>
      <WorksItems data={data} isLoading={isLoading} />
      <WorksDetail detail={detail} />
    </div>
  );
}

export default Works;
