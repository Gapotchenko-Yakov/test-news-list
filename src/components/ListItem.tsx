import { News } from "../types";

interface listItemProps {
  news: News;
}

const ListItem = ({ news }: listItemProps) => {
  return <div>ListItem</div>;
};

export default ListItem;
