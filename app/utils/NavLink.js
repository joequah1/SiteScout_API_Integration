import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
    constructor () {
        super ();
    }
    
    render () {
        return (
            <Link {...this.props} activeClassName="active" />
        )
    }
}

export default NavLink;