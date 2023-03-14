import React, { useEffect, useState } from 'react'
import '../Styles/Auctions.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import zIndex from '@mui/material/styles/zIndex';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ImageListItem from '@mui/material/ImageListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Image } from 'mui-image'
import { Box, Stack, Tooltip } from '@mui/material';
import axios from "axios";
import { apis } from "../../../Config/api";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'type', label: 'Type', minWidth: 100 },
    {
        id: 'category',
        label: 'Category',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'startingDate',
        label: 'Starts at',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'endingDate',
        label: 'Ends at',
        minWidth: 170,
        align: 'right',
    },
];

function createData(name, type, category, startingDate, endingDate) {
    return { name, type, category, startingDate, endingDate };
}



const Auctions = () => {
    const [rows, setRows] = useState([createData('asdfcasdf', 'Long', 'Cars', '23/06/2023', '12/07/2023')]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));

    let loadAllAuctions = async () => {
        await axios.get(apis.getAllAuctions, { headers: { Authorization: token } })
            .then((res) => {
                setRows(res.data);
            })
            .catch((err) => { });
    }


    // useEffect(() => {
    //         loadAllAuctions();
    // }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const showAuctionDetails = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative', bgcolor: '#004d91' }}>
                        <Toolbar>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Auction Id : 2321143
                            </Typography>
                            {/* <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button> */}
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    {/* <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText
                                primary="Default notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItem>
                    </List> */}
                    {/* <Stack direction='row' spacing={4} sx={{ marginX: 3, marginY: 3 }} divider={<Divider orientation='vertical' flexItem />}>
                        <Stack direction='column' divider={<Divider orientation='horizontal' flexItem />} spacing={3} sx={{width:500}}>
                            <Typography variant='h5' fontWeight='bold' gutterBottom>Product Details</Typography>
                            <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={1}>
                                <Image src='/images/arrow.png' height={400} width={300}></Image>
                                <Stack direction='column' divider={<Divider orientation='horizontal' flexItem />} spacing={1}>
                                    <div>
                                        <Typography variant='h6' fontWeight={'bold'}>Name : </Typography>
                                        <Typography variant='subtitle1' gutterBottom>Maruti Suzuki</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='h6' fontWeight={'bold'}>Description : </Typography>
                                        <Typography variant='subtitle1' gutterBottom sx={{overflow:'scroll'}}>Swift Dzire asfasdgsdafbzdxvfsdahsfvdadfbsdgfvdsav xz ZVdfasfasdfasdvgsdfhgbdafb zcx vasdgsdav ZXCbdsafvg</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='h6' fontWeight={'bold'}>Category : </Typography>
                                        <Typography variant='subtitle1' gutterBottom>Cars</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='h6' fontWeight={'bold'}>Age : </Typography>
                                        <Typography variant='subtitle1' gutterBottom>4 yrs</Typography>
                                    </div>
                                    <div>
                                        <Typography variant='h6' fontWeight={'bold'}>Base Price : </Typography>
                                        <Typography variant='subtitle1' gutterBottom>370000</Typography>
                                    </div>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction='column' divider={<Divider orientation='horizontal' flexItem />} spacing={3} sx={{minWidth:400}}>
                            <Typography variant='h5' fontWeight='bold'>Auction Details</Typography>
                                <div className='hover:bg-secondary-sup-gray-1'>
                                    <Typography variant='h6' fontWeight={'bold'}>Name : </Typography>
                                    <Typography variant='subtitle1' gutterBottom>abcsafdsv</Typography>
                                </div>
                                {/* <Divider orientation='horizontal'/> */}
                    {/* <div>
                                    <Typography variant='h6' fontWeight={'bold'}>Name : </Typography>
                                    <Typography variant='subtitle1' gutterBottom>abcsafdsv</Typography>
                                </div> */}
                    {/* </Stack>
                    </Stack> */}
                    <div className='m-3'>
                        <div className='flex flex-row'>
                            <div className='bg-primary-yellow-1 basis-2/5'>
                                Hii
                            </div>
                            <div className='bg-primary-gray-1 basis-2/5'>
                                Hii
                            </div>
                            <div className='basis-2/8 bg-secondary-sup-gray-1 basis-1/5'>
                                Hii
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
            <div className='z-0'>
                <div className='font-bold text-2xl'>
                    <h1>All Auctions</h1>
                    <hr className='mb-2'></hr>
                </div>
                <div>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table aria-label="sticky table">
                                <TableHead >
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth, fontWeight: "bold", zIndex: 0 }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <Tooltip title='Click to view more details'>
                                                                <TableCell key={column.id} align={column.align} onClick={showAuctionDetails}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            </Tooltip>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Auctions