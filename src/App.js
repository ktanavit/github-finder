import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';

//ก่อนที่จะมี Hook เกิดขึ้น เราจะใช้ function base component ใน การทำ stateless component
//แล้วจะใช้ class base component ในการทำ stateful component

const App = () => {

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  // จะ run เมื่อ component เริ่ม(ถูก mount)
  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  // }

  //Search Github User
  // const searchUser = async text => {
  //   // console(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}`
  //   );

  //   setUsers(res.data.items);
  //   setLoading(false);
  //   // this.setState({
  //   //   users: res.data.items,
  //   //   loading: false,
  //   // });
  // };

  //Get Single GitHub User
  // const getUser = async username => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}`
  //   );

  //   setUser(res.data);
  //   setLoading(false);
  //   // this.setState({
  //   //   user: res.data,
  //   //   loading: false,
  //   // });
  // };

  //Get Users Repos
  // const getUserRepos = async username => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
  //   );
  //   setRepos(res.data);
  //   setLoading(false);
  // }

  //clear users from the state
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  //Alert msg when null
  // const showAlert = (msg, type) => {
  //   setAlert(msg, type);
  //   setTimeout(() => setAlert(null), 2000);
  // };

  return (
    // Prop คือ การส่งข่้อมูลไปยัง Component นึง
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
