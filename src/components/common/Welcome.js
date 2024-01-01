import React from 'react'
import {
  Text
} from "monday-ui-react-core";
import { Heading } from "monday-ui-react-core/next";

const Welcome = () => {
  return (
    <div className="mb-3">

      <Heading>Good morning, Abdul!</Heading>
      <Text type={Text.types.TEXT2}>
        Quickly access your recent boards, Inbox and workspaces
      </Text>
    </div>
  );
}

export default Welcome