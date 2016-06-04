import React from 'react';

import SiteScoutService from '../../services/SiteScoutService';
import AudienceStore from '../../stores/AudienceStore';

class Home extends React.Component {
    constructor () {
        super ();    
        
        this.state = {
            audienceId : '',
            name : '',
            description : '',
            price : '',
            reach : '',
            parentName : '',
            parentId : ''
        };
        
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
        this.changeListener = this._onChange.bind(this);
    }
    
    componentWillMount () {
        console.log('app mounting');
    }

    componentDidMount() {
        AudienceStore.addChangeListener(this.changeListener);
    }
    
    componentWillUnmount () {
        console.log('app unmount');
    }
    
    _onChange () {
        var resp = AudienceStore.audience();
        
        if (typeof resp != 'string') {
            this.setState({
                name : resp.name,
                description : resp.description,
                price : resp.price,
                reach : resp.reach,
                parentName : resp.parentName,
                parentId : resp.parentId
            });
        } else {
            this.setState({
                name : resp
            });
        }
        console.log(this.state);
    }
    
    update (e) {
        this.setState({
            audienceId : e.target.value
        })
    }
    
    submit (e) {
        console.log(this.state);
        SiteScoutService.audience(this.state);
    }
    
    render () {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Audience Id</label>
                    <input type="text" className="form-control" onChange={this.update}/>
                </div>
                <div className="form-group">
                    <button className="btn" onClick={this.submit}>Submit</button>
                </div>
                <div>
                    <table className="table table-bordered">
                        <tbody>
                        <tr><th style={{width:150}}>Audience Id</th><td>{this.state.audienceId}</td></tr>
                        <tr><th>Name</th><td>{this.state.name}</td></tr>
                        <tr><th>Description</th><td>{this.state.description}</td></tr>
                        <tr><th>Price</th><td>{this.state.price}</td></tr>
                        <tr><th>Reach</th><td>{this.state.reach}</td></tr>
                        <tr><th>Parent</th><td>{this.state.parentName}</td></tr>
                        <tr><th>Parent Id</th><td>{this.state.parentId}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;