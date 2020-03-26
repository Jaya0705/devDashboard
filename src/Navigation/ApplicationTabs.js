import React from 'react'
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import SecondGrid from "../Grid/SecondGrid";
import WarrantySupport from '../Grid/WarrantySupportStatus'
import Highlights from  '../Grid/Highlights'
import PropTypes from 'prop-types';
import PDFRenderComponent from '../Components/GeneratePDF';

const drawerWidth = 220;

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        maxWidth: 50,
        width: '100%',
        backgroundColor: 'red',
      },
    },
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
  
  const StyledTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      color: 'black',
      textDecoration: "bold",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(5),
      '&:focus': {
        opacity: 1,
      },
    },
  }))(props => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width : "100%",
    },
    padding: {
      padding: theme.spacing(4),
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
        {value === index && <div style = {{width : "1200px"}}>{children}</div>}
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
  
  export default function ApplicationTabs({match}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    let applicationName = match.params.appName;
    return (
    <Router>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >

        <div className={classes.drawerHeader}>
          {/* <div style = {{position : "absolute", left : "0px", padding: "15px", width : "50%"}}>       */}
          <div style = {{margin : "-35px"}}>            
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs" className = {classes.root}>
                        <StyledTab label="Highlights" {...a11yProps(2)} component = {Link} to = {`/highlights/${applicationName}`}  />
                        <StyledTab label="Delivery Status" {...a11yProps(0)} component = {Link} to = {`/deliverystatus/${applicationName}`} />
                        <StyledTab label="Warranty Support Status" {...a11yProps(1)} component = {Link} to = {`/warrantysupportstatus/${applicationName}`}  />
                    </StyledTabs>
                    <Typography className={classes.padding}> 
                               <TabPanel value={value} index={0}>
                                            <Route exact path = "/:app" exact component = {Highlights}/>
                                            <Route exact path = "/highlights/:app"  component = {Highlights}/>
                                </TabPanel>                
                                <TabPanel value={value} index={1}>
                                            <Route exact path = "/deliverystatus/:app" exact component = {SecondGrid}/>
                                </TabPanel> 
                                <TabPanel value={value} index={2}>
                                            <Route exact path = "/warrantysupportstatus/:app" component = {WarrantySupport}/>
                                </TabPanel>
                              
                    </Typography> 
          </div>
        </div>
      </main>
    </Router>
    );
  }

  