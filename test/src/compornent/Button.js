import React from "react";

class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <a href={this.props.href}>{this.props.value}</a>;
    }
}

export default Button;