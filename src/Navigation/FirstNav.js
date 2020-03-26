import React,{Component} from 'react';
import {Route, BrowserRouter as Router, Switch,NavLink} from 'react-router-dom';
import  '../css/TopNav.css';
import SideDrawerBar from './SideDrawerBar';
import AccLogo from '../accenture-logo.png' ;


export default class TopNav extends Component {
    state = {
        apps: []
    }


    componentDidMount() {
        this.fetchUsers();
    }

   fetchUsers() {
       fetch(`http://localhost:5000/api/getAppName`)
         .then(response => response.json())
         .then(data =>
           this.setState({
             apps: data
           })
         )
       }

    render() {
        return (
               <div style ={{width : "100%"}}>       
                            <img className = "App-logo" src={AccLogo} alt="accenture"/>       
                        {/* <div style ={{textAlign: "center"}}>  */}
                            <b style={{marginLeft : "370px", fontSize : "35px", fontFamily : "Trebuchet MS",  paddingBottom : "0px"}}>DEV WEEKLY DASHBOARD</b>
                        {/* </div> */}
                        <div style={{float : "right"}}>
                               <Router>
                                    <NavLink activeStyle= {{color :"rgb(205, 11, 253)"}} className ="link"  to = "/home">
                                        <i class="material-icons">home</i>
                                    </NavLink>
                            
                                    <NavLink activeStyle= {{color :"rgb(205, 11, 253)"}}  className = "link" to = "/login">
                                        <i class="material-icons">person</i>
                                    </NavLink>
                                </Router>
                        </div>
                               
                         <SideDrawerBar apps = {this.state.apps}/>
                   
                </div>
               
        );
    }
}