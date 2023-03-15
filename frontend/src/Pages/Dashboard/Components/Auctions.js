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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {Tooltip } from '@mui/material';
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
                    <div className='my-3'>
                        <div className='flex flex-row min-h-[85vh]'>
                            <div className='basis-3/7 bg-primary-yellow-1 max-w-[50%]'>
                                <h3 className='m-2 font-bold text-3xl'>Product Details</h3>
                                {/* <Divider orientation='horizontal'/> */}
                                <hr />
                                <div className='flex flex-col'>
                                    <div className='flex flex-row'>
                                        <img src='/images/Auction-bro.png' className='w-[50%] border m-2' alt='Product Image' />
                                        <Divider orientation='vertical' sx={{ marginX: '2px' }} />
                                        <div className='m-3 overflow-y-auto'>
                                            <div className='mb-3  flex flex-col'>
                                                <h3 className='font-bold text-lg'>Name : </h3>
                                                <p className='break-words'>Rolls Royce Fantom</p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                            <div className='my-3  flex flex-col'>
                                                <h3 className='font-bold text-lg'>Category : </h3>
                                                <p className='break-words'>Cars</p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                            <div className='my-3 flex flex-col'>
                                                <h3 className='font-bold text-lg'>Age : </h3>
                                                <p className='break-words'>4 years</p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                            <div className='my-3 flex flex-col'>
                                                <h3 className='font-bold text-lg'>Base Price : </h3>
                                                <p className='break-words'>$999999999</p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col m-2'>

                                        <div className='mb-3  flex flex-col'>
                                            <h3 className='font-bold text-lg'>Description : </h3>
                                            <p className='break-words'>Rolls Royce Fantom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Divider orientation='vertical' />
                            <div className='bg-primary-yellow-1 basis-2/7'>
                                <h3 className='m-2 font-bold text-3xl'>Auction Details</h3>
                                <hr />
                                <div className='flex flex-col m-3'>
                                    <div className='mb-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Name : </h3>
                                        <p>abcdefg</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Type : </h3>
                                        <p>Long Open Bid</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Starting Date : </h3>
                                        <p>18/4/23</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Starting Time : </h3>
                                        <p>5:00 pm</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Ending Date : </h3>
                                        <p>20/4/23</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Ending Time : </h3>
                                        <p>5:00 pm</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Created by : </h3>
                                        <p>SomeUsername</p>
                                    </div>
                                    <Divider orientation='horizontal' />
                                </div>
                            </div>
                            <Divider orientation='vertical' />
                            <div className='bg-primary-yellow-1 basis-2/7'>
                                <h3 className='m-2 font-bold text-3xl'>Status</h3>
                                <hr />
                                <div className='flex flex-col m-3'>
                                    <div className=''>
                                        Timer
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='my-3 flex flex-col'>
                                        <h3 className='font-bold text-lg'>Highest Bid : </h3>
                                        <p>$98766</p>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='flex flex-col my-3'>
                                        <h3 className='font-bold text-lg'>Recent bids : </h3>
                                        <Divider orientation='horizontal' />
                                        <div className='mx-5 my-2'>
                                            <div className='my-2'>
                                                <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                                                <p>User12001</p>
                                            </div>
                                            <Divider orientation='horizontal' />

                                            <div className='my-2'>
                                                <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                                                <p>User12001</p>
                                            </div>
                                            <Divider orientation='horizontal' />

                                            <div className='my-2'>
                                                <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                                                <p>User12001</p>
                                            </div>
                                            <Divider orientation='horizontal' />

                                            <div className='my-2'>
                                                <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                                                <p>User12001</p>
                                            </div>
                                            <Divider orientation='horizontal' />

                                            <div className='my-2'>
                                                <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                                                <p>User12001</p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                        </div>
                                    </div>
                                    <Divider orientation='horizontal' />

                                    <div className='flex flex-row my-4 justify-end'>
                                        <div className='mx-4'>
                                            <Button variant='contained' sx={{bgcolor:'#004d91'}}> Register </Button>
                                        </div>
                                        <div className='mx-6'>
                                            <Button variant='contained' sx={{bgcolor:'#004d91'}}> Bid </Button>
                                        </div>
                                    </div>
                                </div>
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