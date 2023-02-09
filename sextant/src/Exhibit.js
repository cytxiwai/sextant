import React, {Component} from 'react';
import './Exhibit.css';


class Exhibit extends Component {
    render(){
        return(
            <div className="Exhibit m-2 w-25 bg-secondary d-inline-block float-start rounded">
            <h2 className="ExhibitHeading">{this.props.name}</h2>
            <h3 className="ExhibitContent"> {this.props.children}</h3>
            </div>
            );
    }

}
export default Exhibit;