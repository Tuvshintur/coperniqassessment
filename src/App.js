import React, { Component } from 'react';
import Layout from './layout/Layout';
import UserContainer from './containers/User/User';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <UserContainer />
                </Layout>
            </div>
        );
    }
}

export default App;
