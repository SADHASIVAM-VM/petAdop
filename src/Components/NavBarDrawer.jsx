import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavbarData } from '../Data/CommonData';
import { UserContext } from '../Contexts/MyContext';
import { Link } from 'react-scroll';

export default function TemporaryDrawer() {
const {isOpend,setIsOpend} = React.useContext(UserContext)

  const toggleDrawer = (newOpen) => () => {
    setIsOpend(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "200px",  bgcolor: 'transparent'}} role="presentation" onClick={toggleDrawer(false)} >
      <List className=''>
        {NavbarData.map((text, index) => (
          <ListItem key={text.id} disablePadding className=''>
            <ListItemButton sx={{':hover': {
      bgcolor: 'primary.light', 
      color: 'primary.contrastText' 
              }}} >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText  >
              <Link to={text.link}>{text.title}</Link>
             
              </ListItemText>
              
            </ListItemButton>
            <Divider/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      
      <Drawer open={isOpend} onClose={toggleDrawer(false)}  anchor='top'>
        {DrawerList}
      </Drawer>
    </div>
  );
}