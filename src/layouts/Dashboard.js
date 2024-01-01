import React from 'react'
import { IconButton , Dropdown,ListItemIcon,ListItem, Divider,Avatar} from "monday-ui-react-core";
import { Notifications, Inbox, Invite, Apps ,Workflow,Help, Home,Work} from "monday-ui-react-core/icons";
import "./style.css"

const dashboard = ({children}) => {
  return (
    <div className="dashboard dark-app-theme">
      <div className="header-wrapper py-2 px-3 d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-start">
          <h3 className="text-light">FLEXLIVING</h3>
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
            color="on-primary-color"
            icon={Notifications}
            size="large"
          />

          <IconButton
            ariaLabel="Inbox"
            color="on-primary-color"
            icon={Inbox}
            size="large"
          />

          <IconButton
            ariaLabel="Invite"
            color="on-primary-color"
            icon={Invite}
            size="large"
          />
          <IconButton
            ariaLabel="Apps"
            color="on-primary-color"
            icon={Apps}
            size="large"
          />

          <IconButton
            ariaLabel="Workflow"
            color="on-primary-color"
            icon={Workflow}
            size="large"
          />
          <IconButton
            ariaLabel="Help"
            color="on-primary-color"
            icon={Help}
            size="large"
          />

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
            <ListItem className="nav-list-item" selected>
              <ListItemIcon icon={Home} />
              Home
            </ListItem>
            <ListItem className="nav-list-item">
              <ListItemIcon icon={Work} />
              My Work
            </ListItem>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="childeren-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default dashboard