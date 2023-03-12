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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Subheader = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
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
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 hover:text-primary-white-1'>
              <p className='py-1 px-3'>Auction</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div>
              <ul className='dropdown-menu hidden py-3 px-3 bg-primary-white-1/90 absolute rounded-t rounded-b min-w-max left-[2.5%] divide-y divide-solid'>
                {/* <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Register</li> */}
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm' onClick={handleClickOpen}>New Auction</li>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>New Auction</DialogTitle>
                  <DialogContent>
                    {/* <DialogContentText>
                      Please enter the valid given details to register your new auction.
                    </DialogContentText> */}
                    {/* <div className='flex flex-row'> */}
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of the Auction"
                        type="text"
                        variant="standard"
                      />
                      {/* <FormControl > */}
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select-label"
                          value={type}
                          label="Type"
                          variant="standard"
                          fullWidth
                          onChange={handleChange}
                        >
                          <MenuItem value={'Long Open Bid'}>Long Open Bid</MenuItem>
                          <MenuItem value={'Long Closed Bid'}>Long Closed Bid</MenuItem>
                          <MenuItem value={'Live Auction'}>Live Auction</MenuItem>
                        </Select>
                      {/* </FormControl> */}
                    {/* </div> */}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                  </DialogActions>
                </Dialog>
              </ul>
            </div>
          </div>
          {/* For Categories */}
          <div className='min-w-max dropdown inline-block'>
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 hover:text-primary-white-1'>
              <p className='py-1 px-3'>Categories</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div className='z-10'>
              <ul className='dropdown-menu hidden py-3 px-3 bg-primary-white-1/90 absolute rounded-t rounded-b min-w-max left-[12.5%] divide-y divide-solid'>
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Auction</li>
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-primary-dark-1 hover:text-primary-white-1 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
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