import React from 'react'
import { useNavigate , useMatch } from "react-router-dom";
import { IconButton , Box ,MenuButton,MenuItem,Menu,TextField,Dialog,DialogContentContainer,Flex,ListItemIcon,ListItem, Divider,Avatar,Text, Button, Search, Icon} from "monday-ui-react-core";
import {
  Notifications,
  Inbox,
  Invite,
  Apps,
  Workflow,
  Help,
  Home,
  Work,
  Favorite,
  Delete,
  AddSmall,
  Search as SearchIcon,
  Workspace,
  Add,
  Board,
  Guest,
  DropdownChevronDown,
  DropdownChevronLeft
} from "monday-ui-react-core/icons";
import { Heading } from "monday-ui-react-core/next";
import boardColoredImg from '../assets/img/BoardColored.svg'
import "./style.css"
import CreateWorkspaceModal from './components/CreateWorkspaceModal'

const Dashboard = ({children , header}) => {
  const navigate = useNavigate();
  const [addWorkspaceModalShow, setAddWorkspaceModalShow ] = React.useState(false);


  return (
    <div className="dashboard">
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

      <div className="layout-row">
        <div className="side-nav">
          <Box
            className="side-col"
            backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          >
            <div className="d-flex justify-content-between">
              <div className="top-side-items-wrapper w-100">
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
              </div>
              <Text className="nav-collapse-btn opacity-50">
                <Icon icon={DropdownChevronLeft} />
              </Text>
            </div>

            <Divider className="m-0 p-0" />

            <div className="top-side-items-wrapper w-100">
              <div className="d-flex justify-content-between mt-2">
                <div style={{ width: "80%" }}>
                  <Dialog
                    zIndex={99999}
                    position="bottom"
                    hideWhenReferenceHidden
                    animationType={Dialog.animationTypes.OPACITY_AND_SLIDE}
                    modifiers={[]}
                    showTrigger={[Dialog.hideShowTriggers.CLICK]}
                    hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
                    content={
                      <DialogContentContainer className="p-3 mt-3">
                        <Search
                          placeholder="Search for a workspace"
                          size="small"
                        />
                        <div className="mt-2">
                          <ListItem size="medium" className="mb-2">
                            <div className="d-flex align-items-center">
                              <Avatar
                                withoutBorder
                                customSize={20}
                                type={Avatar.types.TEXT}
                                text="T"
                                backgroundColor={Avatar.colors.BRIGHT_BLUE}
                                square
                                ariaLabel="Ron"
                              />
                              <span className="mx-1"></span>
                              <Text type={Text.types.TEXT2}>Bookings</Text>
                            </div>
                          </ListItem>
                        </div>
                        <Text className="opacity-75 mb-2">My workspaces</Text>

                        <ListItem selected size="small">
                          <div className="d-flex align-items-center">
                            <Avatar
                              withoutBorder
                              customSize={20}
                              type={Avatar.types.TEXT}
                              text="T"
                              backgroundColor={Avatar.colors.AQUAMARINE}
                              square
                              ariaLabel="Ron"
                            />
                            <span className="mx-1"></span>
                            <Text type={Text.types.TEXT2}>Test board 1</Text>
                          </div>
                        </ListItem>
                        <ListItem size="small">
                          <div className="d-flex align-items-center">
                            <Avatar
                              withoutBorder
                              customSize={20}
                              type={Avatar.types.TEXT}
                              text="M"
                              backgroundColor={Avatar.colors.BUBBLE}
                              square
                              ariaLabel="Ron"
                            />
                            <span className="mx-1"></span>
                            <Text type={Text.types.TEXT2}>Test board 2</Text>
                          </div>
                        </ListItem>
                        <ListItem size="small">
                          <div className="d-flex align-items-center">
                            <Avatar
                              withoutBorder
                              customSize={20}
                              type={Avatar.types.TEXT}
                              text="S"
                              backgroundColor={Avatar.colors.BERRY}
                              square
                              ariaLabel="Ron"
                            />
                            <span className="mx-1"></span>
                            <Text type={Text.types.TEXT2}>Test board 3</Text>
                          </div>
                        </ListItem>

                        <Divider />

                        <Flex>
                          <Button
                            kind={Button.kinds.TERTIARY}
                            size="small"
                            leftIcon={AddSmall}
                          >
                            Add workspace
                          </Button>
                          <Button
                            kind={Button.kinds.TERTIARY}
                            size="small"
                            leftIcon={Workspace}
                          >
                            Browse all
                          </Button>
                        </Flex>
                      </DialogContentContainer>
                    }
                  >
                    <ListItem className="nav-list-item px-2">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <Flex>
                          <Avatar
                            withoutBorder
                            customSize={20}
                            type={Avatar.types.TEXT}
                            text="T"
                            backgroundColor={Avatar.colors.BRIGHT_BLUE}
                            square
                            ariaLabel="Ron"
                          />
                          <span className="mx-1"></span>
                          <Text
                            type={Text.types.TEXT1}
                            weight={Text.weights.MEDIUM}
                          >
                            All Boards
                          </Text>
                        </Flex>
                        <Icon icon={DropdownChevronDown} />
                      </div>
                    </ListItem>
                  </Dialog>
                </div>

                <MenuButton
                  closeDialogOnContentClick
                  size={MenuButton.sizes.SMALL}
                >
                  <Menu id="menu" size={Menu.sizes.SMALL}>
                    <MenuItem
                      icon={AddSmall}
                      iconType={MenuItem.iconType.SVG}
                      onClick={() => setAddWorkspaceModalShow(true)}
                      title="Add new workspace"
                    />
                    <MenuItem
                      icon={Delete}
                      iconType={MenuItem.iconType.SVG}
                      title="Delete workspace"
                    />
                  </Menu>
                </MenuButton>
              </div>

              <Flex className="d-flex justify-content-between mt-2">
                <div style={{ width: "80%" }}>
                  <Search size={Search.sizes.SMALL} placeholder="Search" />
                </div>
                <IconButton
                  kind={IconButton.kinds.PRIMARY}
                  ariaLabel="Add items to workspace"
                  icon={AddSmall}
                  size="small"
                />
              </Flex>

              <div className="mt-3">
                <ListItem
                  className="nav-list-item px-2"
                  onClick={() => navigate("/board")}
                  selected={useMatch("/board") != null}
                >
                  <ListItemIcon icon={Board} />
                  Abdul Rehman
                </ListItem>
                <ListItem className="nav-list-item px-2">
                  <ListItemIcon icon={Board} />
                  Abdul Rehman 2
                </ListItem>
                <ListItem className="nav-list-item px-2">
                  <ListItemIcon icon={Board} />
                  Pending Work
                </ListItem>
              </div>
            </div>
          </Box>
        </div>
        <div className="main-content">
          <Box className="childeren-col">
            {header}
            <div className="custom-container">{children}</div>
          </Box>
        </div>
      </div>
      <CreateWorkspaceModal
        show={addWorkspaceModalShow}
        closeModal={setAddWorkspaceModalShow}
      />
    </div>
  );
}

export default Dashboard