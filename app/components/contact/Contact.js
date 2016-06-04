import React from 'react';

class Contact extends React.Component {
    constructor () {
        super();
    }
    
    componentWillMount () {
        console.log('contact mounting');
    }
    
    componentDidMount () {
        console.log('contact mounted');
    }
    
    componentWillUnmount () {
        console.log('contact unmount');
    }
    
    render () {
        return (
            <div>Contact</div>
        )
    }
};

export default Contact;