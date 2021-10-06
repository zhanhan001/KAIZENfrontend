import * as React from 'react';
import data from "layouts/labour-sharing/components/SkillMarketTable/data";
import styles from "./styles";

import MUIDataTable from "mui-datatables";

export default function SkillMarketTable() {
  const classes = styles();

  const options = {
    filterType: "checkbox",
    rowsPerPage: [5],
    rowsPerPageOptions: [],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF"
      }
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    }
  };

  const { columns, rows } = data;

  return (
      <MUIDataTable
        title={"Discovery Panel"}
        data={rows}
        columns={columns}
        options={options}
      />
  );
}
