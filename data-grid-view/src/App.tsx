import React, { useState, useEffect } from "react";
import "./App.css";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridFilterModel,
  GridSortModel,
} from "@mui/x-data-grid";
import IUniversityData from "./Components/types";
import { createFakeServer } from "@mui/x-data-grid-generator";

const { columns, useQuery } = createFakeServer();
// type  GridColDef =  { id: string; field: string; headerName: string; width: number; }

function App() {
  const [universityData, setIUniversityData] = useState<IUniversityData[]>([]);
  const [queryOptions, setQueryOptions] = useState({});
  const [queryOptionsSorting, setQueryOptionsSorting] = useState<any>({});

  let apiUrl: string = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    getApiUrl(apiUrl);
  }, []);

  async function getApiUrl(url: string) {
    const response = await fetch(url);
    var uniData = await response.json();
    setIUniversityData(uniData);
  }

  const columns: GridColDef<any, any, any>[] = [
    {
      field: "alpha_two_code",
      headerName: "Alpha Two Code",
      width: 180,
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "country", headerName: "Country", width: 160 },
    { field: "web_pages", headerName: "Web Pages", width: 210 },
    { field: "domains", headerName: "Domains", width: 160 },
  ];

  const rows: GridRowsProp = universityData.map((row, id) => {
    return {
      id: id,
      alpha_two_code: row.alpha_two_code,
      name: row.name,
      country: row.country,
      web_pages: row.web_pages,
      domains: row.domains[0],
    };
  });

  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    getApiUrl(apiUrl);
    // console.log(filterModel);
    setQueryOptions(filterModel);
    console.log("working");
  }, []);

  const handleSortModelChange = React.useCallback(
    (sortModel: GridSortModel) => {
      setQueryOptionsSorting({ sortModel: { ...sortModel } });
      sortingFn(sortModel);
      console.log(sortModel);
    },
    []
  );
  function sortingFn(sortModel: any) {
    apiUrl += `&_sort=${sortModel[0].field}&_order=${sortModel[0].sort}`;
    getApiUrl(apiUrl);
    setQueryOptionsSorting(sortModel);
    // universityData.sort();

    console.log(queryOptionsSorting);
  }
  // console.log(queryOptionsSorting);

  const { isLoading } = useQuery(queryOptionsSorting);
  return (
    <div className="App" style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        filterMode="server"
        sortingMode="server"
        onFilterModelChange={onFilterChange}
        onSortModelChange={handleSortModelChange}
        loading={isLoading}
      />
    </div>
  );
}

export default App;
