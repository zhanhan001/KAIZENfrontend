import * as React from 'react';
import data from "layouts/categories/components/CategoriesTable/data";
import styles from "./styles";

import MUIDataTable from "mui-datatables";
import SuiTypography from 'components/SuiTypography';
import SuiBox from 'components/SuiBox';

export default function CategoriesTable() {
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
        title={
          <SuiBox py={3}>
            <SuiTypography variant="h4" textColor="info" fontWeight="bold" textGradient textTransform="uppercase">
              Welding
            </SuiTypography>
          </SuiBox>
        }
        data={rows}
        columns={columns}
        options={options}
      />
  );
}
