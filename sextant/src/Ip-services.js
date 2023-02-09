import React, {Component} from 'react';


class IpServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        url: props.url,
        ipAddress: null};
    }

componentDidMount(){
    fetch(this.state.url)
    .then(res => res.json())
    .then(data => this.setState({ipAddress: data.ip}));
}

    render(){
        return(
            <div><p>{this.state.ipAddress}</p></div>
        );
    };
}

export default IpServices;
