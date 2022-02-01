import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const order_id = props.item.order_id;
  const name = props.item.name;
  const brand = props.item.brand;
  const model = props.item.model;
  const color = props.item.color;
  const phone = props.item.phone;
  const email = props.item.email;
  const date = props.item.date;
  const img = '/images/'+brand+'_'+model+'.png';

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
            ORDER DETAILS
          </Typography>
          <img alt={img} class="object-cover object-center w-full h-full block" src={img} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ORDER ID: {order_id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            CUSTOMER: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            PHONE NO: {phone}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EMAIL: {email}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            BRAND: {brand}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            MODEL: {model}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            COLOR: {color}
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            DATE: {date}
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
