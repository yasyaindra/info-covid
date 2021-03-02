import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import PersonIcon from '@material-ui/icons/Person';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Summary from '../pages/Summary'
import Welcome from '../pages/Welcome'
import Preface from '../components/Preface'
import Rank from '../pages/Rank'
import Graph from '../pages/Graph'
import Me from '../pages/Me'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    {...other}
  >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  body:{
    display: "block",
  overflow: "auto",
  height: "300px"
  }
}));



export default function ScrollableTabsButtonForce() {
  const theme = useTheme();
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered={true}
        >
            <Tab label="Welcome" icon={<MeetingRoomRoundedIcon />} />
            <Tab label="Ringkasan" icon={<LibraryBooksRoundedIcon />}/>
            <Tab label="Peringkat" icon={<FormatListNumberedRoundedIcon />} {...a11yProps(2)} />
            <Tab label="Grafik" icon={<TimelineRoundedIcon />} {...a11yProps(3)} />
            <Tab label="Tentang" icon={<PersonIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Welcome/>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Preface/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Summary/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Rank/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Graph/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Me/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

