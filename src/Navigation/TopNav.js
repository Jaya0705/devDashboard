import React,{Component} from 'react';
import { BrowserRouter as Router, Switch,NavLink} from 'react-router-dom';
import  '../css/TopNav.css';
import SideDrawerBar from './SideDrawerBar';
import AccLogo from '../accenture-logo.png' ;


const styleHead = {
    width : "100%",
    backgroundColor : "white",
    height : "50px",
   
}

const styleLogo = {
    width : "20%",
    display: "inline-block",
    backgroundColor : "white",
    height :"50px",
    
}

export default class TopNav extends Component {
    state = {
        apps: []
    }

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchUsers();
    }

   fetchUsers() {
       fetch(`http://localhost:5000/api/getAppName`)
         .then(response => response.json())
         .then(data => {
           if(this._isMounted) {
                this.setState({
                    apps: data
                })
          }
        }
         )
       }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render() {
        return (
                <div>
                    <Router> 
                        <div style = {styleHead}>              
                                <img className = "App-logo" src={AccLogo} alt="accenture"/>
                                <b style={{marginLeft : "370px", fontSize : "30px", fontFamily : "Trebuchet MS",  paddingBottom : "0px"}}>DEV WEEKLY DASHBOARD</b>
                                <NavLink activeStyle= {{color :"rgb(205, 11, 253)"}} className ="link" to = "/home">
                                    <i class="material-icons">home</i>
                                </NavLink>
                        
                                <NavLink activeStyle= {{color :"rgb(205, 11, 253)"}} className ="link"  to = "/login">
                                    <i class="material-icons">person</i>
                                </NavLink>
                         </div>
                         <div style= {styleLogo} >
                              {/* {<img className = "App-logo" src={AccLogo} alt="accenture"/>                  */}
                         </div>    
                               
                         <SideDrawerBar apps = {this.state.apps}/>

                         <Switch>     
                                    {/* <Route path='/'  exact component = {SideDrawerBar}></Route>
                                    <Route path='/home' exact component= {SideDrawerBar}></Route>   
                                    <Route path='/' exact component={FrontGrid}></Route>                                                 */}
                         </Switch>
                    </Router>  
                </div>
               
        );
    }
}