import React, { Component } from 'react'
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme} from "@material-ui/core";
import TabPanel from './components/TabPanel'
// import Summary from './pages/Summary'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
        <TabPanel/>
    </ThemeProvider>
  );
}


export default App;
