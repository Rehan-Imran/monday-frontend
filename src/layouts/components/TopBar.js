import React from 'react'
import {
  IconButton,
  Divider,
  Avatar,
  Button,
} from "monday-ui-react-core";
import {
  Notifications,
  Inbox,
  Invite,
  Apps,
  Workflow,
  Help,
  Guest,
  DropdownChevronDown,
} from "monday-ui-react-core/icons";
import { Heading } from "monday-ui-react-core/next";


const TopBar = () => {
  return (
    <div className="header-wrapper py-2 px-3 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-start">
        <Heading type={Heading.types.H3}>Flexliving</Heading>
        <div className="mx-3" style={{ width: "100px" }}>
          <Button
            leftIcon={Guest}
            rightIcon={DropdownChevronDown}
            kind={Button.kinds.SECONDARY}
            size={Button.sizes.SMALL}
          >
            Guest
          </Button>
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
  );
}

export default TopBar