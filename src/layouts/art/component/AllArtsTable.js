import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SuiBox from "components/SuiBox";
import SuiBadge from "components/SuiBadge";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import TestForm from "../data/TestForm";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react';

/**
 * {@code AllArtsTable} creates the table for all ART results.
 *
 * @author Teo Keng Swee
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-28
 */

function AllArtsTable() {

    const [results, setResults] = useState([]);
    const empty = {};

    function objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
            );
        }
        return keyValuePairs.join("&");
    }

    const FetchData = async () => {
        await Auth.currentSession().then(res => {
            const queryString = objToQueryString({
                compId: res.getIdToken().payload['cognito:groups'][0],
            });
            fetch('/api/covidTest' + `?${queryString}`, {
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
                }
            })
                .then(response => response.json())
                .then(data => setResults(data))
                .then(data => console.log(data));
        })
    }

    useEffect(() => {
        FetchData()
    }, []);


    const options = {
        filterType: "checkbox",
        rowsPerPage: [3],
        rowsPerPageOptions: [1, 3, 5, 6],
        jumpToPage: true,
        textLabels: {
            pagination: {
                next: "Next >",
                previous: "< Previous",
                rowsPerPage: "Total items Per Page",
                displayRows: "OF",
            },
        },
        onChangePage(currentPage) {
            console.log({ currentPage });
        },
        onChangeRowsPerPage(numberOfRows) {
            console.log({ numberOfRows });
        },
    };

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const remove = (testid) => {
        Auth.currentSession().then((res) => {
            fetch(`/api/covidTest/${testid}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + res.getIdToken().getJwtToken(),
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            window.location.reload();
        });
    };

    //   status: (
    //     <SuiBadge variant="gradient" badgeContent="hired" color="secondary" size="extra-small" />
    //   ),

    const columns = [
        { name: "employeeWP", label: "Work Permit Number" },
        { name: "employeeName", label: "Name" },
        { name: "dateOfTest", label: " Date of Test Adminstered" },
        { name: "expiryDate", label: "Test Expiry Date" },
        {
            name: "result",
            options: {
                filter: true,
                customBodyRender: (dataIndex) => {
                    console.log(dataIndex);

                    return dataIndex? (
                        <SuiBadge variant="gradient" badgeContent="Postive" color="error" size="extra-small" />
                    ): (
                        <SuiBadge variant="gradient" badgeContent="Negative" color="success" size="extra-small" />

                    );
                },
            },
            label: "Covid Test Result"
        },
        { name: "id", label: "AutoGenerated ID" },
        {
            name: "Delete",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updatedValue) => {
                    return (
                        <SuiButton onClick={() => remove(tableMeta.rowData[5])}>
                            Delete
                        </SuiButton>
                    );
                },
            },
        },
    ];

    return (
        <MUIDataTable
            title={
                <div>
                    <SuiBox py={3}>
                        <SuiTypography
                            variant="h4"
                            textColor="info"
                            fontWeight="bold"
                            textGradient
                        >
                            ART Result Database
                        </SuiTypography>
                    </SuiBox>
                    <SuiBox pt={1}>
                        <SuiButton
                            size="large"
                            variant="text"
                            buttonColor="success"
                            onClick={handleClickOpen("paper")}
                        >
                            Add Result
                        </SuiButton>
                    </SuiBox>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">
                            <SuiTypography
                                variant="h5"
                                textColor="info"
                                fontWeight="bold"
                                textGradient
                            >
                                Add Result
                            </SuiTypography>
                        </DialogTitle>
                        <DialogContent dividers={scroll === "paper"}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                //ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                {<TestForm />}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            }
            data={results}
            columns={columns}
            options={options}
        ></MUIDataTable>
    );


} export default AllArtsTable;