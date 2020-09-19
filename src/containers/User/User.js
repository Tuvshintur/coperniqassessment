import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../../components/UI/Loader/Loader';
import CardList from '../../components/CardList/CardList';
import Pagination from '../../components/UI/Pagination/Pagination';

import classes from './User.module.css';

class UserContainer extends Component {
    state = {
        error: false,
        errorCode: '',
        users: [],
        currentPage: 0,
        perUserOnePage: 4,
        offset: 0,
        maxPage: 1,
        loading: true,
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios
            .get(process.env.REACT_APP_ENDPOINT)
            .then((res) => {
                const result = res.data.slice(this.state.offset, this.state.offset + this.state.perUserOnePage);
                const maxPage = Math.ceil(res.data.length / this.state.perUserOnePage);
                this.setState({ loading: false, users: result, maxPage: maxPage });
            })
            .catch((error) => {
                let errorCode = '';
                if (error.response) errorCode = error.response.status;
                this.setState({ loading: false, error: true, errorCode: errorCode });
            });
    };

    onPageClickHandler = (e) => {
        const selectedPage = e.selected;
        const { perUserOnePage } = this.state;
        const offset = selectedPage * perUserOnePage;

        this.setState(
            {
                currentPage: selectedPage,
                offset: offset,
            },
            () => {
                this.getData();
            }
        );
    };

    render() {
        const { loading, users, maxPage } = this.state;
        let returnVal = loading ? <Loader /> : <CardList list={users} />;
        return (
            <div className={classes.User}>
                {returnVal}
                <Pagination maxPage={maxPage} pageClick={this.onPageClickHandler} />
            </div>
        );
    }
}

export default UserContainer;
