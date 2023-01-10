import React, { useState, useEffect } from "react";
import "./App.css";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridFilterModel,
} from "@mui/x-data-grid";
import IUniversityData from "./Components/types";
import { createFakeServer } from "@mui/x-data-grid-generator";

const { columns, useQuery } = createFakeServer();

function App() {
  const [universityData, setIUniversityData] = useState<IUniversityData[]>([]);
  const [queryOptions, setQueryOptions] = React.useState({});
  const [filteredData, setFilteredData] = useState<IUniversityData[]>([]);

  let apiUrl: string = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    getApiUrl(apiUrl);
  }, []);

  async function getApiUrl(url: string) {
    const response = await fetch(url);
    var uniData = await response.json();
    setIUniversityData(uniData);
  }

  const columns = [
    {
      id: "id",
      field: "alpha_two_code",
      headerName: "Alpha Two Code",
      width: 180,
    },
    { id: "id", field: "name", headerName: "Name", width: 200 },
    { id: "id", field: "country", headerName: "Country", width: 160 },
    { id: "id", field: "web_pages", headerName: "Web Pages", width: 210 },
    { id: "id", field: "domains", headerName: "Domains", width: 160 },
  ];

  const rows = universityData.map((row, id) => {
    return {
      id: id,
      alpha_two_code: row.alpha_two_code,
      name: row.name,
      country: row.country,
      web_pages: row.web_pages,
      domains: row.domains[0],
    };
  });

  // const onFilterChange = React.useCallback(
  //   (filterModel: GridFilterModel) => {
  //     // Here you save the data you need from the filter model
  //     setQueryOptions({ filterModel: { ...filterModel } });
  //     console.log("working");
  //   },
  //   [universityData]
  // );

  // const onFilterChange = () => {
  //   getApiUrl(apiUrl);
  //   return console.log("Working");
  // };

  // const onFilterChange = React.useCallback(
  //   ()=>{
  //     console.log("Working");
  //   }
  // );

  const { isLoading, data } = useQuery(queryOptions);

  return (
    <div className="App" style={{ height: "90vh", width: "100%" }}>
      {/* Filter by Name:
      <input type="text" onChange={(e) => filtering(e.target.value)} /> */}
      <DataGrid
        rows={rows}
        columns={columns}
        filterMode="server"
        // onFilterModelChange={onFilterChange}
        loading={isLoading}
        // components={{
        //   FilterPanel: onFilterChange,
        // }}
        // onStateChange={onFilterChange}
      />
    </div>
  );
}

export default App;
