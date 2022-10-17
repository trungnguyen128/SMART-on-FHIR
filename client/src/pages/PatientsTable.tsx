import { useState, useEffect } from "react";
import Table from "../components/Table";

function PatientsTable() {
  const [patients, setPatients] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsFetching(true);
      const response = await fetch("/patients");
      const data = await response.json();
      const tableData = (data.entry || []).map((item: any) => {
        const officialName = item.resource.name.find((n: any) => n.use === "official");
        return {
          id: item.resource.id,
          name: `${officialName.given.join(" ")} ${officialName.family}`,
          gender: item.resource.gender,
          birthDate: item.resource.birthDate,
        };
      });
      setPatients(tableData);
      setIsFetching(false);
    } catch (err) {
      console.log("Error in Fetching patient data:", err);
      setIsFetching(false);
    }
  };

  if (isFetching) return <div>Loading...</div>

  return <Table theadData={["Name", "Gender", "Birth Date"]} tbodyData={patients} perPage={20} />;
}

export default PatientsTable;
