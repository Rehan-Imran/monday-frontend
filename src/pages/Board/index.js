import React from 'react'
import Dashboard from "../../layouts/Dashboard";
import {EditableHeading , Heading} from 'monday-ui-react-core/next';
import EmptyState from '../../components/common/EmptySate'
import Table from '../../components/boards/Table'
import {
  IconButton,
  Divider,
  TabList,Tab,
  TabsContext,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  SplitButton,
  MenuItem,
  Menu,
  Button,
  Icon,
  Search
} from "monday-ui-react-core";
import {
  Workflow,
  Add,
  Favorite,
  Board,
  Info,
  Person,
  DropdownChevronDown,
  Filter,
  Sort,
  Hide,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "monday-ui-react-core/icons";


const Index = () => {
  return (
    <Dashboard>
      <div className="board-header d-flex align-items-center">
        <IconButton ariaLabel="Inbox" icon={Board} size="medium" />
        <EditableHeading
          className="mx-1"
          onChange={function noRefCheck() {}}
          type="h1"
          value="Abdul Rehman"
        />
        <IconButton ariaLabel="Inbox" icon={Favorite} size="medium" />

        <IconButton ariaLabel="Invite" icon={Info} size="medium" />
      </div>

      <div>
        <TabsContext>
          <div className="d-flex justify-content-between mt-3">
            <TabList className="board-tabs">
              <Tab icon={Workflow}>First Item</Tab>
              <Tab icon={Workflow}>Second item</Tab>
              <Tab icon={Workflow}>Third Item</Tab>
            </TabList>

            <IconButton ariaLabel="Add" icon={Add} size="medium" />
          </div>

          <Divider className="m-0 p-0" />

          <div className="mt-3 d-flex">
            <SplitButton
              marginRight
              secondaryDialogContent={
                <Menu>
                  <MenuItem icon={function noRefCheck() {}} title="Watch out" />
                  <MenuItem icon={function noRefCheck() {}} title="History" />
                </Menu>
              }
            >
              New Item
            </SplitButton>
            <div style={{ width: "200px" }}>
              <Search
                iconName={SearchIcon}
                placeholder="Search"
                secondaryIconName={SearchIcon}
                size="medium"
              />
            </div>

            <Button
              kind={Button.kinds.TERTIARY}
              leftIcon={Person}
              className="mx-1"
            >
              Person
            </Button>
            <Button
              kind={Button.kinds.TERTIARY}
              leftIcon={Filter}
              rightIcon={DropdownChevronDown}
              className="mx-1"
            >
              Filter
            </Button>

            <Button
              kind={Button.kinds.TERTIARY}
              leftIcon={Sort}
              className="mx-1"
            >
              Sort
            </Button>

            <Button
              kind={Button.kinds.TERTIARY}
              leftIcon={Hide}
              className="mx-1"
            >
              Hide
            </Button>

            <Button kind="tertiary" marginLeft>
              <Icon icon={MenuIcon} ignoreFocusStyle />
            </Button>
          </div>

          <TabPanels className="mt-4">
            <TabPanel className="monday-storybook-tabs_bg-color">
              <Accordion
                allowMultiple
                className="monday-storybook-accordion_small-wrapepr"
                defaultIndex={[1]}
              >
                <AccordionItem hideBorder title="Group 1">
                  <Table />
                </AccordionItem>
                <AccordionItem hideBorder title="Group 2">
                  <Table />
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel className="monday-storybook-tabs_bg-color">
              Second slide
            </TabPanel>
            <TabPanel className="monday-storybook-tabs_bg-color">
              Third slide
            </TabPanel>
          </TabPanels>
        </TabsContext>
      </div>
    </Dashboard>
  );
}

export default Index