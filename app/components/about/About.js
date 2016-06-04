import React from 'react';

class About extends React.Component {
    constructor () {
        super();
    }
    
    componentWillMount () {
        console.log('about mounting');
    }
    
    componentDidMount () {
        console.log('about mounted');
    }
    
    componentWillUnmount () {
        console.log('about unmount');
    }
    
    render () {
        return (
            <div>About Us</div>
        )
    }
};

export default About;