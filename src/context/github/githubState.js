import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //Search Users
    const searchUsers = async text => {
        setLoading();

        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}`
        );

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items,
        });
    }


    //Get User
    const getUser = async username => {
        setLoading();

        const res = await axios.get(
            `https://api.github.com/users/${username}`
        );

        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    };

    //Get Repos
    const getUserRepos = async username => {
        setLoading();

        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
        );

        dispatch({
            type: GET_REPOS,
            payload: res.data,
        })
    }

    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    //Set Loading 
    const setLoading = () => dispatch({ type: SET_LOADING });


    return <githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUser,
            getUserRepos,
            clearUsers,
        }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState;