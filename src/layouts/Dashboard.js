import React from 'react'
import { useNavigate , useMatch } from "react-router-dom";
import { IconButton , Dropdown,ListItemIcon,ListItem, Divider,Avatar,Search} from "monday-ui-react-core";
import { Notifications, Inbox, Invite, Apps ,Workflow,Help, Home,Work , Favorite , Board} from "monday-ui-react-core/icons";
import { Heading } from "monday-ui-react-core/next";
import "./style.css"

const Dashboard = ({children}) => {
  const navigate = useNavigate();

  const optionsIcons = [
    {
      value: "email",
      label: "All Boards",
      leftIcon: Board,
    },
    {
      value: "attach",
      label: "Favourite",
      leftIcon: Favorite,
    },
  ];

  return (
    <div className="dashboard dark-app-theme">
      <div className="header-wrapper py-2 px-3 d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-start">
          <Heading>FLEXLIVING</Heading>
          <div className="mx-3" style={{ width: "100px" }}>
            <Dropdown
              className="dropdown-stories-styles_spacing"
              onBlur={function noRefCheck() {}}
              onChange={function noRefCheck() {}}
              onClear={function noRefCheck() {}}
              onFocus={function noRefCheck() {}}
              onInputChange={function noRefCheck() {}}
              onKeyDown={function noRefCheck() {}}
              onMenuClose={function noRefCheck() {}}
              onMenuOpen={function noRefCheck() {}}
              onOptionRemove={function noRefCheck() {}}
              onOptionSelect={function noRefCheck() {}}
              openMenuOnFocus={function noRefCheck() {}}
              options={[
                {
                  label: "Option 1",
                  value: 1,
                },
                {
                  label: "Option 2",
                  value: 2,
                },
                {
                  label: "Option 3",
                  value: 3,
                },
              ]}
              placeholder="Guests"
            />
          </div>
        </div>
        <div className="header-icons-wrapper d-flex align-items-center justify-content-end">
          <IconButton
            ariaLabel="Notifications"
            icon={Notifications}
            size="large"
          />

          <IconButton ariaLabel="Inbox" icon={Inbox} size="large" />

          <IconButton ariaLabel="Invite" icon={Invite} size="large" />
          <IconButton ariaLabel="Apps" icon={Apps} size="large" />

          <IconButton ariaLabel="Workflow" icon={Workflow} size="large" />
          <IconButton ariaLabel="Help" icon={Help} size="large" />

          <Divider direction="vertical" className="mx-3" />
          <Avatar
            ariaLabel="Hadas Fahri"
            customSize={40}
            src="https://style.monday.com/static/media/person1.de30c8ee.png"
            type="img"
          />
        </div>
      </div>

      <div className="row gx-2">
        <div className="col-lg-2">
          <div className="side-col">
            <ListItem
              className="nav-list-item"
              selected={useMatch("/") != null}
              onClick={() => navigate("/")}
            >
              <ListItemIcon icon={Home} />
              Home
            </ListItem>
            <ListItem className="nav-list-item">
              <ListItemIcon icon={Work} />
              My Work
            </ListItem>

            <Divider />

            <Dropdown
              clearable={false}
              defaultValue={[optionsIcons[0]]}
              options={optionsIcons}
              className="dropdown-stories-styles_with-chips mt-3 mb-2"
            />

            <div className="mt-3">
              <ListItem
                className="nav-list-item"
                onClick={() => navigate("/board")}
                selected={useMatch("/board") != null}
              >
                <ListItemIcon icon={Board} />
                Abdul Rehman
              </ListItem>
              <ListItem className="nav-list-item">
                <ListItemIcon icon={Board} />
                Abdul Rehman 2
              </ListItem>
              <ListItem className="nav-list-item">
                <ListItemIcon icon={Board} />
                Pending Work
              </ListItem>
            </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="childeren-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard