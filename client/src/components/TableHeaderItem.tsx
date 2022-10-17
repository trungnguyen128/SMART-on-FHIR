export interface Props {
  item: string;
}

const TableHeaderItem = ({ item }: Props) => {
  return <td title={item}>{item}</td>;
};

export default TableHeaderItem;
