import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import Select from '@mui/material/Select';
import { Divider, FormHelperText, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PhotoCamera } from '@mui/icons-material';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const Subheader = () => {
  const [open, setOpen] = React.useState(false);

  //Token and user data
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));


  //New Auction Form Details
  const [NewAuctionDetails, setNewAuctionDetails] = React.useState({
    auctionName: '',
    auctionType: '',
    auctionStartingDate: '',
    auctionStartingTime: '',
    auctionEndingDate: '',
    auctionEndingTime: '',
    productName: '',
    productDescription: '',
    productCategory: '',
    productBasePrice: '',
    productAge: '',
    noOfProduct: 1,
    noOfRegistration: 0,
  });

  const [productImage, setProductImage] = useState('');
  const [otherCategory, setOtherCategory] = useState('');

  let isError = false;

  const [NewAuctionError, setNewAuctionError] = useState({
    auctionName: '',
    auctionType: '',
    auctionStartingDate: '',
    auctionStartingTime: '',
    auctionEndingDate: '',
    auctionEndingTime: '',
    productName: '',
    productDescription: '',
    productCategory: '',
    otherCategory: '',
    productBasePrice: '',
    productAge: '',
    productImage: ''
  });

  const checkError = () => {
    isError = false;
    if (NewAuctionDetails.auctionName == '') { setNewAuctionError((values) => ({ ...values, auctionName: 'Auction name is required' })); isError = true; }
    if (NewAuctionDetails.auctionType == '') { setNewAuctionError((values) => ({ ...values, auctionType: 'Please select auction type' })); isError = true; }
    if (NewAuctionDetails.auctionEndingDate == '' && NewAuctionDetails.auctionType != 'Live Auction') { setNewAuctionError((values) => ({ ...values, auctionEndingDate: 'Please select auction ending date' })); isError = true; }
    if (NewAuctionDetails.auctionEndingTime == '' && NewAuctionDetails.auctionType != 'Live Auction') { setNewAuctionError((values) => ({ ...values, auctionEndingTime: 'Please select auction ending time' })); isError = true; }
    if (NewAuctionDetails.auctionStartingDate == '') { setNewAuctionError((values) => ({ ...values, auctionStartingDate: 'Please select auction starting date' })); isError = true; }
    if (NewAuctionDetails.auctionStartingTime == '') { setNewAuctionError((values) => ({ ...values, auctionStartingTime: 'Please select auction starting time' })); isError = true; }
    if (productImage == '') { setNewAuctionError((values) => ({ ...values, productImage: 'Please select product image' })); isError = true; }
    if (NewAuctionDetails.productAge == '') { setNewAuctionError((values) => ({ ...values, productAge: 'Please enter the age of product' })); isError = true; }
    if (NewAuctionDetails.productName == '') { setNewAuctionError((values) => ({ ...values, productName: 'Please enter the name of product' })); isError = true; }
    if (NewAuctionDetails.productCategory == '') { setNewAuctionError((values) => ({ ...values, productCategory: 'Please select the category of product' })); isError = true; }
    if (NewAuctionDetails.productDescription == '') { setNewAuctionError((values) => ({ ...values, productDescription: 'Please enter the description of product' })); isError = true; }
    if (NewAuctionDetails.productBasePrice == '') { setNewAuctionError((values) => ({ ...values, productBasePrice: 'Please enter the base price of product' })); isError = true; }
    if (NewAuctionDetails.productAge < 0) { setNewAuctionError((values) => ({ ...values, productAge: 'Product age can\'t be negative' })); isError = true; }
    if (NewAuctionDetails.productBasePrice < 0) { setNewAuctionError((values) => ({ ...values, productBasePrice: 'Product price can\'t be negative' })); isError = true; }
    if (NewAuctionDetails.productCategory == 'Other' && otherCategory == '') { setNewAuctionError((values) => ({ ...values, otherCategory: 'Specify other catergory' })); isError = true; }
  }

  const detailsChanged = (e) => {
    setNewAuctionDetails(values => ({ ...values, [e.target.name]: e.target.value }))
    setNewAuctionError((values) => ({ ...values, [e.target.name]: '' }))
  }

  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]);
    setNewAuctionError((values) => ({ ...values, productImage: '' }));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    checkError();

    if (!isError) {
      if (!token || !user)
        toast.error("Something went wrong!! Login again", { position: "bottom-right" });

      if (NewAuctionDetails.auctionType == 'Live Auction') {
        NewAuctionDetails.auctionEndingDate = NewAuctionDetails.auctionStartingDate;
        NewAuctionDetails.auctionEndingTime = NewAuctionDetails.auctionStartingTime;
      }

      let formData = new FormData();
      let data = NewAuctionDetails;
      if (NewAuctionDetails.productCategory == 'Other') {
        data.productCategory = otherCategory;
        formData.append("auctionProductData", JSON.stringify(data));
      }
      else {
        formData.append("auctionProductData", JSON.stringify(NewAuctionDetails));
      }
      formData.append("productImage", productImage);


      axios.post(`${apis.createAuction}/${user.id}`, formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          toast.success("Auction created successfully", { position: "bottom-right" });
        })
        .catch((err) => { toast.error("Some error while creating auction", { position: "bottom-right" }) });

      setOpen(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <>
      <div className='flex flex-row justify-between items-center bg-primary-yellow-1 p-[1%] border-b sticky top-0 z-0'>
        <div className='grid grid-cols-3 gap-3 divide-solid divide-x'>
          {/* for New */}
          <div className='min-w-max dropdown inline-block mx-4'>
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 cursor-pointer hover:text-primary-white-1'>
              <p className='py-1 px-3'>Auction</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div>
              <ul className='dropdown-menu hidden py-3 px-3 bg-primary-white-1/90 absolute rounded-t rounded-b min-w-max left-[2.5%] divide-y divide-solid'>
                {/* <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Register</li> */}
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 cursor-pointer whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm' onClick={handleClickOpen}>New Auction</li>
                <Dialog open={open} onClose={handleClose} maxWidth={'lg'}>
                  <DialogTitle>New Auction</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please enter the valid given details to register your new auction.
                    </DialogContentText>
                    {/* {/* <div className='flex flex-row'> */}
                    <Stack
                      direction="row"
                      spacing={2}
                      divider={<Divider orientation='vertical' flexItem />}>
                      <Stack direction='column' spacing={2}>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="AuctionName"
                          label="Auction Name"
                          type="text"
                          variant="standard"
                          name='auctionName'
                          value={NewAuctionDetails.auctionName}
                          onChange={detailsChanged}
                          required
                        />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionName}</span>
                        {/* <FormControl sx={{minWidth: 120}}> */}
                        <InputLabel id="Type-Selector">Type</InputLabel>
                        <Select
                          labelId="Type-Selector"
                          id="Select-Type"
                          value={NewAuctionDetails.auctionType}
                          label="Type"
                          variant="standard"
                          name='auctionType'
                          onChange={detailsChanged}
                          required
                        >
                          <MenuItem value={'Long Open Bid'}>Long Open Bid</MenuItem>
                          <MenuItem value={'Long Closed Bid'}>Long Closed Bid</MenuItem>
                          <MenuItem value={'Live Auction'}>Live Auction</MenuItem>
                        </Select>
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionType}</span>

                        <Typography variant='subtitle1'>Starting Date : </Typography>
                        <DatePicker disablePast name="auctionStartingDate"
                          onChange={(value) => {
                            const month = ((value.$M + 1) > 9) ? `${value.$M + 1}` : `0${value.$M + 1}`;
                            const day = ((value.$D) > 9) ? `${value.$D}` : `0${value.$D}`;
                            const startDate = value.$y + "-" + month + "-" + day;

                            setNewAuctionDetails((values) => ({ ...values, auctionStartingDate: startDate }));
                          }}
                          required />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionStartingDate}</span>
                        <Typography variant='subtitle1'>Starting Time : </Typography>
                        <TimeClock name="auctionStartingTime"
                          onChange={(value) => {
                            const hours = (value.$d.getHours() > 9) ? `${value.$d.getHours()}` : `0${value.$d.getHours()}`;
                            const mins = (value.$d.getMinutes() > 9) ? `${value.$d.getMinutes()}` : `0${value.$d.getMinutes()}`;
                            const secs = (value.$d.getSeconds() > 9) ? `${value.$d.getSeconds()}` : `0${value.$d.getSeconds()}`;
                            const startTime = hours + ":" + mins + ":" + secs;
                            setNewAuctionDetails(values => ({ ...values, auctionStartingTime: startTime }));
                          }}
                          required />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionStartingTime}</span>

                        {
                          NewAuctionDetails.auctionType == 'Long Open Bid' || NewAuctionDetails.auctionType == 'Long Closed Bid' ?
                            <>
                              <Typography variant='subtitle1'>Ending Date : </Typography>
                              <DatePicker disablePast name="auctionEndingDate"
                                onChange={(value) => {
                                  const month = ((value.$M + 1) > 9) ? `${value.$M + 1}` : `0${value.$M + 1}`;
                                  const day = ((value.$D) > 9) ? `${value.$D}` : `0${value.$D}`;
                                  const endDate = value.$y + "-" + month + "-" + day;

                                  setNewAuctionDetails((values) => ({ ...values, auctionEndingDate: endDate }));
                                }}
                                required />
                              <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionEndingDate}</span>

                              <Typography variant='subtitle1'>Ending Time : </Typography>
                              <TimeClock name="auctionEndingTime"
                                onChange={(value) => {
                                  const hours = (value.$d.getHours() > 9) ? `${value.$d.getHours()}` : `0${value.$d.getHours()}`;
                                  const mins = (value.$d.getMinutes() > 9) ? `${value.$d.getMinutes()}` : `0${value.$d.getMinutes()}`;
                                  const secs = (value.$d.getSeconds() > 9) ? `${value.$d.getSeconds()}` : `0${value.$d.getSeconds()}`;
                                  const endTime = hours + ":" + mins + ":" + secs;
                                  setNewAuctionDetails(values => ({ ...values, auctionEndingTime: endTime }));
                                }}
                                required />
                              <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.auctionEndingTime}</span>
                            </> :
                            <>

                            </>
                        }
                      </Stack>
                      <Stack direction='column' spacing={3}>
                        <Typography variant='h5'>Product Details : </Typography>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="ProductName"
                          label="Product Name"
                          name='productName'
                          value={NewAuctionDetails.productName}
                          fullWidth
                          type="text"
                          variant="standard"
                          onChange={detailsChanged}
                          required
                        />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productName}</span>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="Description"
                          label="Description"
                          name='productDescription'
                          value={NewAuctionDetails.productDescription}
                          multiline
                          rows={2}
                          type="text"
                          variant="standard"
                          onChange={detailsChanged}
                          required
                        />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productDescription}</span>
                        <InputLabel id="Category-selector">Category</InputLabel>
                        <Select
                          labelId="Category-selector"
                          id="Select-category"
                          value={NewAuctionDetails.productCategory}
                          label="Category"
                          name='productCategory'
                          variant="standard"
                          fullWidth
                          onChange={detailsChanged}
                          required
                        >
                          <MenuItem value={'Antique'}>Antique</MenuItem>
                          <MenuItem value={'Cars'}>Cars</MenuItem>
                          <MenuItem value={'Real Estate'}>Real Estate</MenuItem>
                          <MenuItem value={'Other'}>Other</MenuItem>

                        </Select>

                        {
                          (NewAuctionDetails.productCategory == 'Other') ?
                            <>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="Category"
                                label="Specify other"
                                name='otherCategory'
                                value={otherCategory}
                                multiline
                                rows={2}
                                type="text"
                                variant="standard"
                                onChange={(e) => { setOtherCategory(e.target.value) }}
                                required
                              />
                              <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.otherCategory}</span>
                            </>
                            : null
                        }
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productCategory}</span>

                        <Button variant="contained" component="label">
                          <PhotoCamera />
                          Upload Image
                          <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} required />
                        </Button>
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productImage}</span>

                        <TextField
                          autoFocus
                          margin="dense"
                          id="Age"
                          label="Product Age (in yrs)"
                          value={NewAuctionDetails.productAge}
                          name="productAge"
                          fullWidth
                          type="number"
                          variant="standard"
                          helperText='Enter value in decimal if age is less than an year'
                          onChange={detailsChanged}
                          required
                        />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productAge}</span>

                        <TextField
                          autoFocus
                          margin="dense"
                          id="productBasePrice"
                          label="Base Price (in Rs.)"
                          value={NewAuctionDetails.productBasePrice}
                          name="productBasePrice"
                          fullWidth
                          type="number"
                          variant="standard"
                          helperText='Provide the base price'
                          onChange={detailsChanged}
                          required
                        />
                        <span style={{ color: "red", fontSize: "12px" }}>{NewAuctionError.productBasePrice}</span>

                      </Stack>
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                  </DialogActions>
                </Dialog>
              </ul>
            </div>
          </div>
          {/* For Categories */}
          <div className='min-w-max dropdown inline-block'>
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 hover:text-primary-white-1 cursor-pointer'>
              <p className='py-1 px-3'>Categories</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div className='z-10'>
              <ul className='dropdown-menu hidden py-3 px-3 bg-primary-white-1/90 absolute rounded-t rounded-b min-w-max left-[12.5%] divide-y divide-solid'>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Cars</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Antique</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Real Estate</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <input type="text" name='search' className='focus:outline-none border-2 border-primary-dark-1/50 p-1 w-80 mt-0 mr-10 rounded-sm focus:border-b-2 text-sm' placeholder='Search...'></input>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Subheader