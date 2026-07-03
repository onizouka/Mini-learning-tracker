import type {CategoryInterface} from "./CategoryInterface.ts";

export interface ResourceInterface {
  id: string;
  title: string;
  description: string;
  url: string;
  type: string;
  status: string;
  createdAt: string;
  category: CategoryInterface;
}
