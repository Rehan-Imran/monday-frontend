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
  useHover,
  useRef,
  Search,
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
} from "monday-ui-react-core/icons";

const BoardItem = ({title , iconOnly , noMenu , color}) => {
  const navigate = useNavigate();
    const [hoverRef, isHovered] = useHover();
      const [isEdit, setIsEdit] = React.useState(false);
      const [newTitle, setNewTitle] = React.useState("");
      const toggleEdit = () => {
        setIsEdit((prevState) => !prevState); 
      };
  return (
    <ListItem className="nav-list-item px-2" ref={hoverRef}>
      <div className="d-flex align-items-center justify-content-between w-100">
        <Flex onClick={() => !isEdit && navigate("/board")}>
          {iconOnly ? (
            <Icon icon={Board} />
          ) : (
            <Avatar
              withoutBorder
              customSize={20}
              type={Avatar.types.TEXT}
              text={title ? title.charAt(0).toUpperCase() : "N"}
              backgroundColor={color || Avatar.colors.BRIGHT_BLUE}
              square
              ariaLabel={newTitle || title || "New board"}
            />
          )}
          <span className="mx-1"></span>
          {isEdit ? (
            <EditableText
              className={
                isEdit ? "side-nav-editable-active" : "side-nav-editable"
              }
              onChange={(e) => {
                setNewTitle(e);
              }}
              value={title || "New board"}
            />
          ) : (
            <Text type={Text.types.TEXT2}>
              {newTitle || title || "New board"}
            </Text>
          )}
        </Flex>
        {!noMenu && (
          <MenuButton
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
                icon={ExternalPage}
                iconType="SVG"
                onClick={function noRefCheck() {}}
                title="Open board in new tab"
              />
              <MenuDivider />
              <MenuItem
                icon={Edit}
                iconType="SVG"
                onClick={toggleEdit}
                title="Rename board"
              />
              <MenuItem
                icon={Favorite}
                iconType="SVG"
                onClick={function noRefCheck() {}}
                title="Add to favourite"
              />
              <MenuDivider />
              <MenuItem
                icon={Delete}
                iconType="SVG"
                onClick={function noRefCheck() {}}
                title="Delete"
              />
              <MenuItem
                icon={Archive}
                iconType="SVG"
                onClick={function noRefCheck() {}}
                title="Archive"
              />
            </Menu>
          </MenuButton>
        )}
      </div>
    </ListItem>
  );
}

export default BoardItem