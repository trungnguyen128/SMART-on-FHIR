import React, { useState, useEffect } from "react";
import TableHeaderItem from "./TableHeaderItem";
import TableRow from "./TableRow";
import "./table.css";

export interface Props {
  theadData: Array<string>;
  tbodyData: Patient[];
  perPage: number;
}

export interface Patient {
  id: string;
  name: string;
  gender: string;
  birthDate: string;
}

function Table({ theadData, tbodyData, perPage = 20 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(tbodyData.length / perPage));

  useEffect(() => {
    setTotalPage(Math.ceil(tbodyData.length / perPage));
  }, [perPage, tbodyData.length]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  return (
    <React.Fragment>
      <table className="patient-table">
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHeaderItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {(tbodyData.slice((currentPage - 1) * perPage, currentPage * perPage) || []).map(
            (row) => {
              return <TableRow key={row.id} row={row} />;
            }
          )}
        </tbody>
      </table>
      <div className="table-pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          {currentPage} of {totalPage}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPage}>
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Table;
