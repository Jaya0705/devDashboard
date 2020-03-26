import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Route, BrowserRouter as Router, Switch, NavLink, Link} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Pie from '../Components/Pie';
import CustomSummaryTable from "../Grid/CustomSummaryTable";
import ApplicationTabs from './ApplicationTabs'
import FrontGrid from '../Grid/FrontGrid';
import Wsr from "../Components/Wsr"

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  changeColor : {
    background : "black",
    color : "white",
    fontFamily : "graphik-bold"
  },
  paper : {
    top: 50,
    width : "250px",
    background : "white",
    position : 'absolute'
  },
  dropheight: {
    top: 50,
  },
  appBar: {
      position : 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'left',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: - drawerWidth + 1,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SideDrawerBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
        <div className={classes.root}>
            <CssBaseline />
            <Router>
            <AppBar
                className={clsx(classes.appBar, classes.changeColor, classes.dropheight, {
                [classes.appBarShift]: open,
                })}
            >
              <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>   
                  <Tabs value={value} onChange={handleChange} aria-label="tabsInfo">
                        <Tab label="Project Summary" {...a11yProps(0)} component = {Link} to = "/summary"/>
                        <Tab label="Dashboard" {...a11yProps(1)} component = {Link} to = "/dashboard"/>
                        <Tab label="Generate WSR" {...a11yProps(2)} component = {Link} to = "/generatewsr"/>
                  </Tabs>
              </Toolbar>             
            </AppBar>
              <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="left"
                  open={open}
                  classes={{
                  paper: classes.paper,
                  }}
              >

                <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                </div>
                        
                <Divider />
                <List component = "nav">
                        <ListItem alignItems="flex-start">
                                <ListItemText primary = {<b>Applications</b>}/>
                        </ListItem>
                        <Divider/>
                            {props.apps.map(({appName,id}) => (
                                <li key={id}>
                                  <ListItem button component={NavLink} style={{fontSize : "13px"}} to = {`/${appName}`}>
                                          <ListItemText primary={appName} /> 
                                  </ListItem> 
                                </li>                         
                                  )
                            )}
                        <Divider/>                                 
                </List>             
            </Drawer>

            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >

<div className={classes.drawerHeader}>
                            <TabPanel value={value} index={0}>  
                                <Switch>
                                  <Route exact path = "/" component = {FrontGrid}/>
                                  <Route exact path = "/summary" component = {FrontGrid}/>
                                  <Route exact path = "/:appName" exact component = {ApplicationTabs}/>                               
                                </Switch>
                            </TabPanel>                          
                            <TabPanel value={value} index={1}>
                                <Switch>
                                  <Route exact path = "/dashboard" component = {Pie}/>
                                  <Route exact path = "/:appName" exact component ={ApplicationTabs}/>                        
                                </Switch>
                            </TabPanel> 
                            <TabPanel value={value} index={2}>
                                <Switch>
                                  <Route exact path = "/generatewsr" component ={Wsr}/>
                                  <Route exact path = "/:appName" exact component ={ApplicationTabs}/>                        
                                </Switch>
                            </TabPanel>
                    </div>
          </main>
        </Router>             
    </div>
  );
}

export default SideDrawerBar;



