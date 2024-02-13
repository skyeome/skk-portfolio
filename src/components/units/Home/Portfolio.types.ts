import { WorkInfo } from "@/apis/works";

export interface PortfolioProps {
  data?: WorkInfo[];
  isLoading: boolean;
}
