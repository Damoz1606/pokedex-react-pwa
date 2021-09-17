import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core'
import { ExpandMoreOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import logo from '../../assets/logo.png';

interface Props {
    generations: any[],
    eventButton: (args: any) => void,
    eventSelection: (args: any) => void
}

function Appbar(props: Props) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleSelected = (args: any) => {
        handleClose();
        props.eventSelection(args.url)
    }

    return (
        <AppBar position="static" elevation={1} color="inherit" className="appbar appbar-height">
            <Toolbar>
                <IconButton edge="start" onClick={() => props.eventButton(null)}>
                    <img src={logo} width={25} alt="poke-logo" />
                </IconButton>
                <div className="w-100 d-flex justify-content-end">
                    <Button color="inherit" onClick={handleClick}>Generations <ExpandMoreOutlined /> </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {
                            props.generations.map((element: any, key: any) => {
                                const data = element.name.split('-');
                                return <MenuItem className="text-uppercase" onClick={() => handleSelected(element)} key={key}>{data[0] + " " + data[1]}</MenuItem>
                            })
                        }
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
