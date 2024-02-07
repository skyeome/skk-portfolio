import { WorkInfo } from "@/apis/works";

export interface WorksItemsProps {
  data?: WorkInfo[];
  isLoading: boolean;
}
