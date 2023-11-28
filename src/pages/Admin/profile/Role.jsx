import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "sr", headerName: "S No", width: 70 },
  { field: "role", headerName: "Role Name", width: 180 },
  { field: "status", headerName: "Status", width: 180 },
  {
    field: "createdAt",
    headerName: "Created Date",
    type: "number",
    width: 180,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    sr: 1,
    role: "Snow",
    status: "Active",
    createdBy: "super admin",
    createdAt: "30-12-2022",
  },
  {
    id: 2,
    sr: 2,
    role: "White",
    status: "Active",
    createdBy: "super admin",
    createdAt: "28-11-2023",
  },
  {
    id: 3,
    sr: 3,
    role: "Grumpy",
    status: "Inactive",
    createdBy: "super admin",
    createdAt: "28-11-2023",
  },
  {
    id: 4,
    sr: 4,
    role: "Happy",
    status: "Pending",
    createdBy: "super admin",
    createdAt: "28-11-2023",
  },
  {
    id: 5,
    sr: 5,
    role: "Sleepy",
    status: "Active",
    createdBy: "super admin",
    createdAt: "28-11-2023",
  },
  {
    id: 6,
    sr: 6,
    role: "Bashful",
    status: "Inactive",
    createdBy: "super admin",
    createdAt: "28-11-2023",
  },

];

export default function Role() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
