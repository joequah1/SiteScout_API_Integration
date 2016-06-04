import React from 'react';
import NavLink from './utils/NavLink';

import Home from './components/home/Home';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            name : "World"
        };
        this.update = this.update.bind(this);
    }
    
    update (e) {
        this.setState({
            name : e.target.value 
        });
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink className="navbar-brand" to="/" onlyActiveOnIndex={true} >DSP</NavLink>
                        </div>
                    </div>
                </nav>
                
                {this.props.children || <Home />}
            </div>
        )
    }
}

export default App;