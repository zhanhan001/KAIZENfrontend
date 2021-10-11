import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Availability from "../Availability"
import SuiButton from "components/SuiButton";
import SuiBox from 'components/SuiBox';
import { Grid } from '@mui/material';
import Checkout from '../Checkout';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <SuiBox>
            <Dialog onClose={handleClose} open={open}>
                <SuiBox p={1}>
                    <DialogTitle>Select Hire Sharing Duration</DialogTitle>
                    <SuiBox pr={3}>
                        <Availability />
                    </SuiBox>
                </SuiBox>
                <SuiBox p={3}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item p={3}>
                            <Checkout />
                        </Grid>
                    </Grid>
                </SuiBox>
            </Dialog>
        </SuiBox>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function HireDialog() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <SuiButton size="large" variant="gradient" buttonColor="success" onClick={handleClickOpen}>
                Check Availability
            </SuiButton>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}