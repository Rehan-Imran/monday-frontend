import React from 'react'
import {
  IconButton,
  Box,
  MenuButton,
  MenuItem,
  Menu,
  TextField,
  ListItemIcon,
  Flex,
  RadioButton,
  ListItem,
  Divider,
  Avatar,
  Text,
  Button,
  ColorPicker,
  Modal,
  ModalContent,
  ModalFooterButtons,
  Dialog,
  DialogContentContainer,
  ModalHeader,
  useSwitch
} from "monday-ui-react-core";
import { Heading } from "monday-ui-react-core/next";
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
  Add,
  Board,
  Guest,
  Close,
} from "monday-ui-react-core/icons";

const CreateWorkspaceModal = ({
  show,
  closeModal,
  openAddworkspaceModalButtonRef,
}) => {
    const [color, setColor] = React.useState(Avatar.colors.WORKING_ORANGE);
    const [icon , setIcon] = React.useState();
    const [workspaceName , setWorkspaceName] = React.useState('New Workspace');
    const ref = React.useRef(null);
    const { isChecked: clickButtonActive, onChange: onClickClickButton } =
      useSwitch({
        defaultChecked: false,
      });
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false,
        },
      },
    ];

  return (
    <Modal
      show={show}
      onClose={closeModal}
      closeButtonAriaLabel={"close"}
      width={Modal.width.DEFAULT}
      contentSpacing
      description="Add new workspace"
      id="story-book-modal"
      title="Add new workspace"
      triggerElement={null}
    >
      <ModalHeader title={"Add new workspace"} />
      <ModalContent>
        <Flex justify={Flex.justify.CENTER} className="my-4">
          <Dialog
            zIndex={99999}
            position="bottom"
            hideWhenReferenceHidden
            animationType={Dialog.animationTypes.OPACITY_AND_SLIDE}
            modifiers={modifiers}
            showTrigger={[Dialog.hideShowTriggers.CLICK]}
            hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
            content={
              <DialogContentContainer className="p-3 mt-3">
                <Text>Background color</Text>
                <ColorPicker
                  className="custom-color-picker"
                  numberOfColorsInLine={8}
                  colorSize="small"
                  colorShape="circle"
                  onSave={(e) => {
                    setColor(e[0]);
                  }}
                />
              </DialogContentContainer>
            }
          >
            <Avatar
              onClick={onClickClickButton}
              className="workspace-create-icon"
              withoutBorder
              customSize={100}
              type={Avatar.types.TEXT}
              text={
                <Heading
                  style={{ fontSize: "50px" }}
                  color={Heading.colors.FIXED_LIGHT}
                >
                  {workspaceName.charAt(0).toUpperCase()}
                </Heading>
              }
              backgroundColor={color}
              square
              ariaLabel={workspaceName}
            />
          </Dialog>
        </Flex>
        <Text className="mb-1">Workspace name</Text>
        <TextField
          onChange={(e) => {
            setWorkspaceName(e);
          }}
          size={TextField.sizes.MEDIUM}
          placeholder="New workspace"
        />

        <Text className="mb-1 mt-3">Privacy</Text>
        <Flex>
          <RadioButton text="Open" checked />
          <span className="mx-2"></span>
          <RadioButton
            text="Closed"
            disabled
            disabledReason="Disabled reason"
          />
        </Flex>
        <Text className="mt-2 opacity-70">
          Every team member in the account can join
        </Text>
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={function noRefCheck() {}}
        onSecondaryButtonClick={function noRefCheck() {
          closeModal();
        }}
        primaryButtonText="Add workspace"
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};

export default CreateWorkspaceModal