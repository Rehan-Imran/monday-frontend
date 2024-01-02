import React from 'react'
import EmptyState from "../../components/common/EmptySate";
import { EditableHeading, Heading } from "monday-ui-react-core/next";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Label,
  LinearProgressBar,
  EditableText,
} from "monday-ui-react-core";
import {
  Add,
} from "monday-ui-react-core/icons";

const TableCustom = () => {
  return (
    <Table
      columns={[
        {
          id: "col1",
          title: "Item",
        },
        {
          id: "col2",
          width: {
            max: 200,
            min: 120,
          },
        },
        {
          id: "col3",
          width: {
            max: 200,
            min: 120,
          },
        },
        {
          id: "col4",
          width: {
            max: 200,
            min: 120,
          },
        },
        {
          id: "col5",
          width: 150,
        },
        {
          id: "col6",
          width: 150,
        },
        {
          id: "col7",
          width: 80,
        },
      ]}
      emptyState={<EmptyState />}
      errorState={<EmptyState />}
    >
      <TableHeader>
        <TableHeaderCell
          title={
            <EditableText
              onChange={function noRefCheck() {}}
              value="Item"
              readOnly
            />
          }
        />
        <TableHeaderCell
          title={
            <EditableText
              onChange={function noRefCheck() {}}
              value="Description"
            />
          }
        />
        <TableHeaderCell
          title={
            <EditableText onChange={function noRefCheck() {}} value="Dev" />
          }
        />
        <TableHeaderCell
          title={
            <EditableText
              onChange={function noRefCheck() {}}
              value="Deadline"
            />
          }
        />
        <TableHeaderCell
          title={
            <EditableText onChange={function noRefCheck() {}} value="Status" />
          }
        />
        <TableHeaderCell
          title={
            <EditableText
              onChange={function noRefCheck() {}}
              value="Progress"
            />
          }
        />
        <TableHeaderCell
          title={<IconButton ariaLabel="Add" icon={Add} size="medium" />}
        />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <EditableText
              onChange={function noRefCheck() {}}
              value="Item name 1"
            />
          </TableCell>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>Lorem ipsum dolor</TableCell>
          <TableCell>xxx</TableCell>
          <TableCell>
            <Label color="positive" isAnimationDisabled text="Sent" />
          </TableCell>
          <TableCell>
            <LinearProgressBar
              className="linear-progress-bar_small-wrapper"
              size="large"
              value={70}
            />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <EditableText
              onChange={function noRefCheck() {}}
              value="Item name 2"
            />
          </TableCell>
          <TableCell>
            This is the subject This is the subject This is the subject This is
            the subject This is the subject This is the subject
          </TableCell>          
          <TableCell>
            This is the subject This is the subject This is the subject This is
            the subject This is the subject This is the subject
          </TableCell>
          <TableCell>xxx</TableCell>
          <TableCell>
            <Label color="positive" isAnimationDisabled text="Sent" />
          </TableCell>
          <TableCell>
            <LinearProgressBar
              className="linear-progress-bar_small-wrapper"
              size="large"
              value={50}
            />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <EditableText
              onChange={function noRefCheck() {}}
              value="Item name 3"
            />
          </TableCell>
          <TableCell>This is the subject</TableCell>
          <TableCell>xxx</TableCell>
          <TableCell>xxx</TableCell>
          <TableCell>
            <Label color="positive" isAnimationDisabled text="Sent" />
          </TableCell>
          <TableCell>
            <LinearProgressBar
              className="linear-progress-bar_small-wrapper"
              size="large"
              value={20}
            />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCustom;