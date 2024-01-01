import React from 'react'
import { Button , Flex , Text,Divider,Search,Checkbox} from "monday-ui-react-core";
import Dashboard from "../../layouts/Dashboard"
import "bootstrap/dist/css/bootstrap.css";
import Welecome from '../../components/common/Welcome'
import { Heading, } from "monday-ui-react-core/next";
import Image from '../../assets/img/grip_light.svg'
import {
  Notifications,
  Inbox,
  Invite,
  Apps,
  Workflow,
  Help,
  Home,
  Work,
} from "monday-ui-react-core/icons";

const index = () => {
  return (
    <Dashboard>
      <Welecome />
      <div
        style={{
          width: "100%",
        }}
      >
        <Heading type={Heading.types.H1} id="my-work-id">
          My work
        </Heading>
        <Divider />
        <Flex
          align={Flex.align.CENTER}
          gap={Flex.gaps.SMALL}
          aria-labelledby="my-work-id"
          style={{
            width: "30%",
          }}
        >
          <Search placeholder="Search" />
          <Checkbox label="Hide done items" checked />
          <Button leftIcon={Apps} kind={Button.kinds.TERTIARY}>
            Customize
          </Button>
        </Flex>
      </div>


      <div className="row gx-2">
        <div className="col-lg-6">
          <div className="main-card mt-3">
            <div aria-labelledby="empty-state-id" className='d-flex flex-column align-items-center'>
              <img
                style={{
                  width: "290px",
                }}
                src={Image}
                alt=""
                className='mb-4'
              />
              <Heading type={Heading.types.H2} id="empty-state-id">
                No updates yet for this item
              </Heading>
              <Text
                element="span"
                type={Text.types.TEXT1}
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
                ellipsis={false}
              >
                Be the first one to update about progress, mention someone or upload
                files to share with your team members
              </Text>
            </div>
          </div>

        </div>
        <div className="col-lg-6">
          <div className="main-card mt-3">
            <div aria-labelledby="empty-state-id" className='d-flex flex-column align-items-center'>
              <img
                style={{
                  width: "290px",
                }}
                src={Image}
                alt=""
                className='mb-4'
              />
              <Heading type={Heading.types.H2} id="empty-state-id">
                No updates yet for this item
              </Heading>
              <Text
                element="span"
                type={Text.types.TEXT1}
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
                ellipsis={false}
              >
                Be the first one to update about progress, mention someone or upload
                files to share with your team members
              </Text>
            </div>
          </div>

        </div>
      </div>
    </Dashboard>
  );
}

export default index