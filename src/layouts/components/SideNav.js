import React from 'react'
import { useNavigate, useMatch } from "react-router-dom";
import {
  IconButton,
  Box,
  MenuButton,
  MenuItem,
  Menu,
  Dialog,
  DialogContentContainer,
  Flex,
  ListItemIcon,
  ListItem,
  Divider,
  Avatar,
  Text,
  Button,
  MenuDivider,
  Search,
  Icon,
} from "monday-ui-react-core";
import {
  Home,
  Work,
  Delete,
  AddSmall,
  Workspace,
  Board,
  DropdownChevronDown,
  DropdownChevronLeft,
  Favorite,
  Archive,
  Edit,
  Folder,
} from "monday-ui-react-core/icons";
import { Heading } from "monday-ui-react-core/next";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import BoardItem from "../components/nav/BoardItem";
import FolderItem from "../components/nav/FolderItem";
import SubFolder from "../components/nav/SubFolder";


const SideNav = () => {
    const navigate = useNavigate();
    const [boardsList, setBoardsList] = React.useState([
      <BoardItem color={Avatar.colors.DARK_ORANGE} title="Reservations" />,
      <BoardItem color={Avatar.colors.GRASS_GREEN} title="Bookings" />,
    ]);
    const [addWorkspaceModalShow, setAddWorkspaceModalShow] = React.useState(false);
    const [foldersList, setFoldersList] = React.useState([]);


  return (
    <>
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
                        <BoardItem noMenu />
                      </div>
                      <Text className="opacity-75 mb-2">My workspaces</Text>

                      <BoardItem
                        noMenu
                        color={Avatar.colors.BERRY}
                        title="Bookings"
                      />
                      <BoardItem
                        noMenu
                        color={Avatar.colors.BUBBLE}
                        title="Test Board"
                      />
                      <BoardItem
                        noMenu
                        color={Avatar.colors.EGG_YOLK}
                        title="Reservations"
                      />

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
                  <BoardItem noMenu />
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

              <MenuButton
                triggerElement={(props) => (
                  <IconButton
                    kind={IconButton.kinds.PRIMARY}
                    icon={AddSmall}
                    size="small"
                  />
                )}
                size="small"
                ariaLabel="Add items to workspace"
                closeDialogOnContentClick
                onMenuHide={function noRefCheck() {}}
                onMenuShow={function noRefCheck() {}}
              >
                <Menu id="menu" size="medium">
                  <MenuItem
                    icon={Board}
                    iconType="SVG"
                    onClick={() => {
                      setBoardsList([...boardsList, <BoardItem />]);
                    }}
                    title="New board"
                  />

                  <MenuDivider />
                  <MenuItem
                    icon={Folder}
                    iconType="SVG"
                    onClick={() => {
                      setFoldersList([...foldersList, <FolderItem />]);
                    }}
                    title="New folder"
                  />
                </Menu>
              </MenuButton>
            </Flex>

            <div className="mt-3">
              {boardsList.map((board, index) => (
                <div key={index}>{board}</div>
              ))}
              {foldersList.map((folder, index) => (
                <div key={index}>{folder}</div>
              ))}
            </div>
          </div>
        </Box>
      </div>

      <CreateWorkspaceModal
        show={addWorkspaceModalShow}
        closeModal={setAddWorkspaceModalShow}
      />
    </>
  );
}

export default SideNav