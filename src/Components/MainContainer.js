import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../styles/main.css";
import CardTable from "./CardTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    "& .MuiTab-root": {
      backgroundColor: "#575758",
      marginRight: "8px",
      color: "white !important",
      border: "1px solid #575758",
      fontWeight: "500",
      borderBottom: "0px",
      borderRadius: "6px",
      "&.Mui-selected": {
        backgroundColor: "#5670f5",
        border: "1px solid #5670f5",
      },
    },
  },
});
export default function MainContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="main">
      <div className="heading">
        <h3> SETTINGS</h3>
        <h4>Home / Settings</h4>
      </div>
      <div className="content">
        {" "}
        <div className={classes.root}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Configuration" />
            <Tab label="Webhooks" />
            <Tab label="API Keys" />
            <Tab label="Reminders" />
            <Tab label="Payment Methods" />
          </Tabs>

          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <div className="heading">
              <h4>Manage Payment Methods</h4>
              <a href="#" style={{ fontSize: "12px" }}>
                Know more
              </a>
            </div>
            <p style={{ fontSize: "14px" }}>
              We offer a host of Payment methods.Some of them available by
              default. While others require approval Raise a Request directly
              from hereto enable such payment methods.
            </p>
            <div className="upiBox">
              <div className="flexBox1">
                <aside className="asidebar2">
                  <ul className="ulList">
                    <li>
                      <a className="active" href="">
                        Cards
                      </a>
                    </li>
                    <li>
                      <a href="">UPI/QR</a>
                    </li>
                    <li>
                      <a href="">Net Banking</a>
                    </li>
                    <li>
                      <a href="">EMI</a>
                    </li>
                    <li>
                      <a href="">Wallet</a>
                    </li>
                    <li>
                      <a href="">Pay Later</a>
                    </li>
                    <li>
                      <a href="">International banks</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="flexBox2">
                <h5>Dometic cards</h5>
                <div className="cardBox">
                  <CardTable />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
