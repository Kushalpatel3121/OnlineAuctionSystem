import React, {useContext, useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./Auction/Components/ProductDetails";
import Divider from "@mui/material/Divider";
import AuctionDetails from "./Auction/Components/AuctionDetails";
import Timer from "./Timer";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogContentText, Tooltip} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import LiveAuction from "./Auction/Components/LiveAuction";
import CloseBid from "./Auction/Components/CloseBid";
import LongOpenBid from "./Auction/Components/LongOpenBid";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {ToastContainer} from "react-toastify";
import {AuctionContext} from "../../../Context/Context";
import Slide from "@mui/material/Slide";
import Draggable from "react-draggable";
import axios from "axios";
import {apis} from "../../../Utils/api";
import {useParams} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

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


const MyListing = () => {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [regOpen, setRegOpen] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
    const [rows, setRows] = useState([]);
    const [completedRows, setCompletedRows] = useState([]);
    const [product, setProduct] = useState(null);
    const [countDownTs, setCountDownTs] = useState(0);
    const [isAuctionCompleted, setIsAuctionCompleted] = useState(false);
    const [isAuctionRunning, setIsAuctionRunning] = useState(false);
    const [isUserRegistered, setIsUserRegistered] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const handleRegClose = () => {
        setRegOpen(false);
    }

    const handleRegOpen = () => {
        setRegOpen(true);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const showAuctionDetails =  (id) => {
        axios.get(`${apis.getProductByAuctionId}/${id}`, {headers: {Authorization: token}})
            .then((res) => {

                const dt = new Date(Date.parse(res.data.auction.startingDate));
                const edt = new Date(Date.parse(res.data.auction.endingDate));
                res.data.auction.startingDate = dt.toString();
                res.data.auction.endingDate = edt.toString();

                setProduct(res.data);
                setIsAuctionCompleted(res.data.auction.isCompleted);

                if (dt.getTime() < new Date().getTime()) {
                    setIsAuctionRunning(true);
                } else {
                    setIsAuctionRunning(false);
                }
                //Converting UTC time to GMT
                setCountDownTs(dt.getTime());
            })
            .catch((err) => {
            });

        setOpen(true);
    }

    useEffect(()=>{
        axios.get(`${apis.getAllAuctionOfUser}/${userData.id}`, {headers: {Authorization: token}})
            .then((res)=>{
                setRows(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });

        axios.get(`${apis.getAllCompletedAuctionOfUser}/${userData.id}`, {headers: {Authorization: token}})
            .then((res)=>{
                setCompletedRows(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, []);

    return (
        <>
            <div>
                {(product == null) ? null :

                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative', bgcolor: '#004d91' }}>
                            <Toolbar>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Auction Id : {product.auction.id}
                                </Typography>

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
                                <ProductDetails product={product} />

                                <Divider orientation='vertical' />

                                <AuctionDetails product={product} />

                                <Divider orientation='vertical' />

                                <div className='bg-primary-yellow-1 basis-2/7'>
                                    <h3 className='m-2 font-bold text-3xl'>Status</h3>
                                    <hr />
                                    <div className='flex flex-col m-3'>
                                        {
                                            (isAuctionRunning == false) ?
                                                <>
                                                    <h3 className='font-bold text-lg'>Starts In : </h3>
                                                    <Timer countDownTs={countDownTs} />
                                                    <Divider orientation='horizontal' />
                                                    <div className='my-3 flex flex-col'>
                                                        <h3 className='font-bold text-lg'>Registrations : </h3>
                                                        <p>{product.auction.noOfRegistration}</p>
                                                    </div>
                                                    <Divider orientation='horizontal' />
                                                    <div className='text-center my-5'>

                                                                <Button variant='contained' sx={{bgcolor:"#004d91"}}>
                                                                    You are creator of the auction
                                                                </Button>

                                                    </div>
                                                </>
                                                :
                                                (product.auction.type == 'Live Auction') ?
                                                    <LiveAuction product={product} />
                                                    :
                                                    (product.auction.type == 'Long Closed Bid') ?
                                                        <CloseBid product={product} />
                                                        :
                                                        <LongOpenBid product={product} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                }
            </div>
            <div className='z-0'>
                <div className='font-bold text-2xl'>
                    <h1>Your Auctions</h1>
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
                                        .map((row, index) => {

                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => { showAuctionDetails(row.id)}}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <Tooltip title='Click to view more details'>
                                                                <TableCell key={column.id} align={column.align} >
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



            <div className='z-0 mt-8'>
                <div className='font-bold text-2xl'>
                    <h1>Your Completed Auctions</h1>
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
                                    {completedRows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {

                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => { showAuctionDetails(row.id)}}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <Tooltip title='Click to view more details'>
                                                                <TableCell key={column.id} align={column.align} >
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


            <ToastContainer />
        </>
    );
}

export default MyListing;