import React from 'react'
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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider, FormHelperText, Stack } from '@mui/material';
import { margin, minWidth } from '@mui/system';
import Typography from '@mui/material/Typography';
import { PhotoCamera } from '@mui/icons-material';

const Subheader = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');

  //New Auction Form Details
  const [NewAuctionDetails, setNewAuctionDetails] = React.useState({
    AuctionName: '',
    Type: '',
    StartingDate: '',
    StartingTime: '',
    EndingDate: '',
    EndingTime: '',
    ProductName: '',
    ProductDescription: '',
    ProductCategory: '',
    BasePrice: 0,
    ProductAge: 0
  });

  const detailsChanged = (e) => {
    setNewAuctionDetails(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                          name='AuctionName'
                          value={NewAuctionDetails.AuctionName}
                          fullWidth
                          onChange={detailsChanged}
                          required
                        />
                        {/* <FormControl sx={{minWidth: 120}}> */}
                        <InputLabel id="Type-Selector">Type</InputLabel>
                        <Select
                          labelId="Type-Selector"
                          id="Select-Type"
                          value={NewAuctionDetails.Type}
                          label="Type"
                          variant="standard"
                          name='Type'
                          fullWidth
                          onChange={detailsChanged}
                          required
                        >
                          <MenuItem value={'Long Open Bid'}>Long Open Bid</MenuItem>
                          <MenuItem value={'Long Closed Bid'}>Long Closed Bid</MenuItem>
                          <MenuItem value={'Live Auction'}>Live Auction</MenuItem>
                        </Select>

                        <Typography variant='subtitle1'>Starting Date : </Typography>
                        <DatePicker disablePast name="StartingDate" required />

                        <Typography variant='subtitle1'>Starting Time : </Typography>
                        <TimeClock name="StartingTime" required />

                        {
                          NewAuctionDetails.Type == 'Long Open Bid' || NewAuctionDetails.Type == 'Long Closed Bid' ?
                            <>
                              <Typography variant='subtitle1'>Ending Date : </Typography>
                              <DatePicker disablePast name="EndingDate" required />

                              <Typography variant='subtitle1'>Ending Time : </Typography>
                              <TimeClock name="EndingTime" required />
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
                          name='ProductName'
                          value={NewAuctionDetails.ProductName}
                          fullWidth
                          type="text"
                          variant="standard"
                          onChange={detailsChanged}
                          required
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="Description"
                          label="Description"
                          name='ProductDescription'
                          value={NewAuctionDetails.ProductDescription}
                          multiline
                          rows={2}
                          type="text"
                          variant="standard"
                          onChange={detailsChanged}
                          required
                        />

                        <InputLabel id="Category-selector">Category</InputLabel>
                        <Select
                          labelId="Category-selector"
                          id="Select-category"
                          value={NewAuctionDetails.ProductCategory}
                          label="Category"
                          name='ProductCategory'
                          variant="standard"
                          fullWidth
                          onChange={detailsChanged}
                          required
                        >
                          <MenuItem value={'Antique'}>Antique</MenuItem>
                          <MenuItem value={'Cars'}>Cars</MenuItem>
                          <MenuItem value={'Real Estate'}>Real Estate</MenuItem>
                        </Select>

                        <Button variant="contained" component="label">
                          <PhotoCamera />
                          Upload Image
                          <input hidden accept="image/*" multiple type="file" required />
                        </Button>

                        <TextField
                          autoFocus
                          margin="dense"
                          id="Age"
                          label="Product Age (in yrs)"
                          value={NewAuctionDetails.ProductAge}
                          name="ProductAge"
                          fullWidth
                          type="number"
                          variant="standard"
                          helperText='Enter value in decimal if age is less than an year'
                          onChange={detailsChanged}
                          required
                        />

                        <TextField
                          autoFocus
                          margin="dense"
                          id="BasePrice"
                          label="Base Price (in Rs.)"
                          value={NewAuctionDetails.BasePrice}
                          name="BasePrice"
                          fullWidth
                          type="number"
                          variant="standard"
                          helperText='Provide the base price'
                          onChange={detailsChanged}
                          required
                        />

                      </Stack>
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
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
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Auction</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 cursor-pointer hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <input type="text" name='search' className='focus:outline-none border-2 border-primary-dark-1/50 p-1 w-80 mt-0 mr-10 rounded-sm focus:border-b-2 text-sm' placeholder='Search...'></input>
        </div>
      </div>
    </>
  )
}

export default Subheader