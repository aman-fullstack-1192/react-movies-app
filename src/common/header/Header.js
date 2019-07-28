import React, { component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends component {
    render() {
        return (
            <div>
                <Button variant="contained" color = "default">
                    Default
                </Button>
            </div>
        )
    }
}

export default Header;