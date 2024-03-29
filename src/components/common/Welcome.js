import React from 'react'
import { Text, Divider } from "monday-ui-react-core";
import { Heading } from "monday-ui-react-core/next";
import WelcomeImage from '../../assets/img/welcome.svg'
import {
  Button,
} from "monday-ui-react-core";
import {
  Notifications,
  Inbox,
  Invite,
  Apps,
  Workflow,
  Help,
  Feedback,
  Bolt,
} from "monday-ui-react-core/icons";


const Welcome = () => {
  return (
    <>
      <div className="custom-container">
        <div className="row">
          <div className="col-6 d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              <Text>Good morning, Abdul!</Text>
              <Text type={Text.types.TEXT2}>
                Quickly access your recent boards, Inbox and workspaces
              </Text>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <img src={WelcomeImage} alt="" style={{ height: "76px" }} />
            <Button
              size={Button.sizes.MEDIUM}
              className="mx-1"
              leftIcon={Feedback}
              kind={Button.kinds.TERTIARY}
            >
              Give feedback
            </Button>
            <Button size={Button.sizes.MEDIUM} leftIcon={Bolt}>
              Quick Search
            </Button>
          </div>
        </div>
      </div>

      <Divider className="m-0 p-0" />
    </>
  );
}

export default Welcome