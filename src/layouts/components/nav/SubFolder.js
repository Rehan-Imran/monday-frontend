import React from "react";
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
  useHover,
  useRef,
  Search,
  ExpandCollapse,
  EditableText,
  useSetFocus,
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
  Menu as MenuIcon,
  Edit,
  ExternalPage,
  Embed,
} from "monday-ui-react-core/icons";
import BoardItem from "./BoardItem";

const SubFolder = ({ title, children }) => {
  const [boardsList, setBoardsList] = React.useState([]);
  const [hoverRef, isHovered] = useHover();
  const [isEdit, setIsEdit] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const toggleEdit = () => {
    setIsEdit((prevState) => !prevState);
  };



  return (
    <ExpandCollapse
      title={
        <ListItem className="nav-list-item p-0 w-100" ref={hoverRef}>
          <div className="d-flex align-items-center justify-content-start w-100 p-0">
            <div
              className="w-100"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <Flex>
                {isEdit ? (
                  <EditableText
                    className={
                      isEdit ? "side-nav-editable-active" : "side-nav-editable"
                    }
                    onChange={(e) => {
                      setNewTitle(e);
                    }}
                    value={title || "New subfolder"}
                  />
                ) : (
                  <Text type={Text.types.TEXT2}>
                    {newTitle || title || "New subfolder"}
                  </Text>
                )}
              </Flex>
            </div>
            <MenuButton
              className="p-0"
              size={MenuButton.sizes.XS}
              closeDialogOnContentClick
              onMenuHide={function noRefCheck() {}}
              onMenuShow={function noRefCheck() {}}
              triggerElement={(props) => (
                <Icon
                  icon={MenuIcon}
                  style={{ color: !isHovered && "transparent" }}
                />
              )}
            >
              <Menu id="menu" size="medium">
                <MenuItem
                  disabled
                  icon={Embed}
                  iconType="SVG"
                  onClick={toggleEdit}
                  title="Folder ID: 683018"
                />

                <MenuDivider />
                <MenuItem
                  icon={Edit}
                  iconType="SVG"
                  onClick={toggleEdit}
                  title="Rename subfolder"
                />

                <MenuItem
                  icon={Edit}
                  iconType="SVG"
                  onClick={() => {
                    setBoardsList([...boardsList, <BoardItem />]);
                  }}
                  title="New board"
                />

                <MenuDivider />
                <MenuItem
                  icon={Delete}
                  iconType="SVG"
                  onClick={function noRefCheck() {}}
                  title="Delete"
                />
              </Menu>
            </MenuButton>
          </div>
        </ListItem>
      }
      headerClassName="m-0 p-0 folder-expand-header px-2"
      contentClassName="custom-collapse-content pr-3"
      hideBorder
      iconSize={15}
    >
      {
        <div className="m-0 p-0">
          {boardsList.map((board, index) => (
            <div key={index}>{board}</div>
          ))}
        </div>
      }
    </ExpandCollapse>
  );
};

export default SubFolder;
