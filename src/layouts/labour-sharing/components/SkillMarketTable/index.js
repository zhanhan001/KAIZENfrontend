import * as React from 'react';
import data from "layouts/labour-sharing/components/SkillMarketTable/data";
import MUIDataTable from "mui-datatables";

/**
 * {@code SkillMarketTable} creates the component for the skill market table.
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

export default function SkillMarketTable() {

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
