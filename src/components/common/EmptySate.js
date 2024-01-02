import React from 'react'
import {Heading } from 'monday-ui-react-core/next';
import {
    Text
} from "monday-ui-react-core";


const EmptySate = () => {
  return (
    <div
      aria-labelledby="empty-state-id"
      className="d-flex flex-column align-items-center"
    >
      <img
        style={{
          width: "290px",
        }}
        src={Image}
        alt=""
        className="mb-4"
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
  );
}

export default EmptySate