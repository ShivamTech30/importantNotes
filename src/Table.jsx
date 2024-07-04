import React, {useEffect, useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import DataTable from 'react-data-table-component'
// import getTableData from '../apis/api.table'
// import '../style/table.css'

const Table = () => {

  const [tableData, setTableData] = useState([]);
  // const navigate = useNavigate();

  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      cell: row => <div style={{fontWeight: 'bold'}}>{row.name}</div>,
    },
    {
      name: 'Date Created',
      selector: row => row.dateCreated,
      sortable: false
    },
    {
      name: 'Role',
      selector: row => row.role,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: "Action",
      sortable: false,
      selector: row => '⚙️  ❌',
    }
  ];

  useEffect(() => {
    // getTableData().then((data) => {
      setTableData([
        {
          "id": "1",
          "name": "John Doe",
          "dateCreated": "01/05/2024",
          "role": "Admin",
          "status": "Active"
        },
        {
          "id": "2",
          "name": "Jane Smith",
          "dateCreated": "02/05/2024",
          "role": "Publisher",
          "status": "Suspended"
        },
        {
          "id": "3",
          "name": "Bob Johnson",
          "dateCreated": "03/05/2024",
          "role": "Reviewer",
          "status": "Inactive"
        },
        {
          "id": "4",
          "name": "Alice Williams",
          "dateCreated": "04/05/2024",
          "role": "Moderator",
          "status": "Active"
        },
        {
            "id": "5",
            "name": "Charlie Brown",
            "dateCreated": "05/05/2024",
            "role": "Admin",
            "status": "Suspended"
          },
          {
            "id": "6",
            "name": "Lucy Van Pelt",
            "dateCreated": "06/05/2024",
            "role": "Publisher",
            "status": "Active"
          },
          {
            "id": "7",
            "name": "Linus Van Pelt",
            "dateCreated": "07/05/2024",
            "role": "Reviewer",
            "status": "Inactive"
          },
          {
            "id": "8",
            "name": "Peppermint Patty",
            "dateCreated": "08/05/2024",
            "role": "Moderator",
            "status": "Active"
          },
          {
            "id": "9",
            "name": "Sally Brown",
            "dateCreated": "09/05/2024",
            "role": "Admin",
            "status": "Suspended"
          },
          {
            "id": "10",
            "name": "Schroeder",
            "dateCreated": "10/05/2024",
            "role": "Publisher",
            "status": "Active"
          },
          {
            "id": "11",
            "name": "Woodstock",
            "dateCreated": "11/05/2024",
            "role": "Reviewer",
            "status": "Inactive"
          },
          {
            "id": "12",
            "name": "Pig Pen",
            "dateCreated": "12/05/2024",
            "role": "Moderator",
            "status": "Active"
          },
          {
            "id": "13",
            "name": "Marcie",
            "dateCreated": "13/05/2024",
            "role": "Admin",
            "status": "Suspended"
          },
          {
            "id": "14",
            "name": "Franklin",
            "dateCreated": "14/05/2024",
            "role": "Publisher",
            "status": "Active"
          },
          {
            "id": "15",
            "name": "Violet Gray",
            "dateCreated": "15/05/2024",
            "role": "Reviewer",
            "status": "Inactive"
          },
          {
            "id": "16",
            "name": "Shermy",
            "dateCreated": "16/05/2024",
            "role": "Moderator",
            "status": "Active"
          },
          {
            "id": "17",
            "name": "Patty",
            "dateCreated": "17/05/2024",
            "role": "Admin",
            "status": "Suspended"
          }
      ]);
    // })
    // .catch((error) => {
    //   console.error('Error fetching data:', error);
    //   navigate('/signin');
    // });
  }, []);

  return (
    <div className="table-container">
      <DataTable
        className='my-table'
        title="All Users"
        columns={columns}
        data={tableData}
        noHeader
        pagination
        defaultSortField="id"
        defaultSortAsc={true}
        highlightOnHover
        fixedHeader
      />
      <div className='logout-btn'>
        <button>
          logout
        </button>
      </div>
    </div>
  )
}

export default Table