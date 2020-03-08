import React, { Component } from 'react';
import './app.css';
import ReactDom from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// Components
import Home from './home/home';
import Register from './form/form';
import Err from './404/error';
import UserList from './users/users';
import Comments from './comments/comment';
import NewComment from './comments/newComment';
import io from "socket.io-client";
import Formulario from './form'

export default class  Router extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
        this.socket = io('localhost:3200');
    }
  render(){
  return (
    <BrowserRouter>
      <div>
        <Home exact path="/" />
        <Formulario socket = {this.socket} />
        <Route path="/c" component={Comments} />
        <Route path="/nc" component={NewComment} />
        <Route path="/r" component={Register} />
        <Route path="/e" component={Err} />
        <Route path="/u" component={UserList} />
      </div>
    </BrowserRouter>
  );
    }
}

