import { getWorksList } from "@/apis/works";
import { useQuery } from "@tanstack/react-query";
import KeyVisual from "@/components/units/Home/KeyVisual";
import Portfolio from "@/components/units/Home/Portfolio";
import Skills from "@/components/units/Home/Skills";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: getWorksList,
  });
  return (
    <div>
      <KeyVisual />
      <Portfolio data={data} isLoading={isLoading} />
      <Skills />
    </div>
  );
}

export default Home;
