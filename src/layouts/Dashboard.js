import React from 'react'
import { Box} from "monday-ui-react-core";
import Topbar from './components/TopBar'
import SideNav from './components/SideNav'
import "./style.css"

const Dashboard = ({children , header}) => {
  return (
    <div className="dashboard">
      <Topbar/>
      <div className="layout-row">
        <SideNav/>
        <div className="main-content">
          <Box className="childeren-col">
            {header}
            <div className="custom-container">{children}</div>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Dashboard