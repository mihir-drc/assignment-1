import * as React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows, columns }) {
  return (
    <Paper sx={{ maxHeight: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        hideFooterSelectedRowCount
        rowSelection={false}
      />
    </Paper>
  );
}
