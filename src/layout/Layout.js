import React, { Component } from 'react';

class Layout extends Component {
    //TODO: include left menu toolbar

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default Layout;
