import { Patient } from "./Table";
import "./tableRow.css";

const TableRow = ({ row }: { row: Patient }) => {
  return (
    <tr className="table-row">
      <td>{row.name}</td>
      <td>{row.gender}</td>
      <td>{row.birthDate}</td>
    </tr>
  );
};

export default TableRow;
