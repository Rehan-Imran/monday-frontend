import React from 'react'
import {
  Link,
  Button,
  AvatarGroup,
  Text,
  Divider,
  BreadcrumbItem,
  Avatar,
  Icon,
  Box,
  useHover,
  BreadcrumbsBar,
  IconButton,
  ExpandCollapse,
  Counter,
} from "monday-ui-react-core";
import Dashboard from "../../layouts/Dashboard"
import "bootstrap/dist/css/bootstrap.css";
import Welecome from '../../components/common/Welcome'
import { Heading, } from "monday-ui-react-core/next";
import {
  Time,
  Folder,
  Workspace,
  Board,
  Favorite,
} from "monday-ui-react-core/icons";
import QuickSearchRecentBoardImage from '../../assets/img/quick_search_recent_board.svg'
import getStartedImg from '../../assets/img/get-started-2.svg'
import helpCenterImg from '../../assets/img/help-center.svg'

const Index = () => {
  const [hoverRef, isHovered] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  return (
    <Dashboard>
      <Welecome />

      <div className="row mt-3">
        <div className="col-9">
          <Box
            backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}
            rounded={Box.roundeds.MEDIUM}
            padding={Box.paddings.MEDIUM}
          >
            <ExpandCollapse
              headerClassName="custom-collapse-header"
              hideBorder
              iconSize={30}
              defaultOpenState
              title={<h5>Recently visited</h5>}
            >
              <div className="row">
                <div className="col-4">
                  <Box
                    padding={Box.paddings.SMALL}
                    border={Box.borders.DEFAULT}
                    rounded={Box.roundeds.SMALL}
                  >
                    <img
                      className="w-100"
                      src={QuickSearchRecentBoardImage}
                      alt=""
                    />
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="d-flex align-items-center">
                        <Icon icon={Board} iconSize={20} iconType="SVG" />
                        <Heading
                          className="mx-1"
                          weight={Heading.weights.BOLD}
                          type={Heading.types.H3}
                        >
                          Abdul Rehman
                        </Heading>
                      </div>
                      <IconButton
                        ariaLabel="Favorite"
                        icon={Favorite}
                        size="medium"
                      />
                    </div>
                  </Box>
                </div>
              </div>
            </ExpandCollapse>

            <ExpandCollapse
              hideBorder
              iconSize={30}
              defaultOpenState
              title={
                <>
                  <Counter className="mx-2" count={5} />{" "}
                  <h5>Update feed (Inbox)</h5>
                </>
              }
              headerClassName="custom-collapse-header"
            >
              <Box
                padding={Box.paddings.SMALL}
                border={Box.borders.DEFAULT}
                rounded={Box.roundeds.MEDIUM}
              >
                <Box
                  ref={hoverRef}
                  padding={Box.paddings.SMALL}
                  rounded={Box.roundeds.MEDIUM}
                  backgroundColor={
                    isHovered && Box.backgroundColors.PRIMARY_BACKGROUND_COLOR
                  }
                  className="updates-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <Avatar
                      withoutBorder
                      size={Avatar.sizes.LARGE}
                      type={Avatar.types.TEXT}
                      text="S"
                      backgroundColor={Avatar.colors.DONE_GREEN}
                      ariaLabel="Ron Meir"
                    />
                    <div className="mx-2">
                      <div className="d-flex">
                        <Text>Sid</Text>
                        <Text className="mx-2">|</Text>
                        <BreadcrumbsBar className="breadcrumb-custom">
                          <BreadcrumbItem
                            icon={Workspace}
                            text="Abdul Rehman"
                          />
                          <BreadcrumbItem icon={Folder} text="This week" />
                          <BreadcrumbItem
                            icon={Board}
                            text="Migration of scripts in Aws"
                          />
                        </BreadcrumbsBar>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          href="https://www.monday.com"
                          text="@Abdul Rehman"
                        />
                        <Text className="px-2">
                          check the description in "Description of the task"
                          column
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Icon
                      className="mx-1"
                      icon={Time}
                      iconSize={20}
                      iconType="SVG"
                    />
                    <Text>9h</Text>
                  </div>
                </Box>
                <Divider />

                <Box
                  ref={hoverRef2}
                  padding={Box.paddings.SMALL}
                  rounded={Box.roundeds.MEDIUM}
                  backgroundColor={
                    isHovered2 && Box.backgroundColors.PRIMARY_BACKGROUND_COLOR
                  }
                  className="updates-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <Avatar
                      withoutBorder
                      size={Avatar.sizes.LARGE}
                      type={Avatar.types.TEXT}
                      text="S"
                      backgroundColor={Avatar.colors.DONE_GREEN}
                      ariaLabel="Ron Meir"
                    />
                    <div className="mx-2">
                      <div className="d-flex">
                        <Text>Sid</Text>
                        <Text className="mx-2">|</Text>
                        <BreadcrumbsBar className="breadcrumb-custom">
                          <BreadcrumbItem
                            icon={Workspace}
                            text="Abdul Rehman"
                          />
                          <BreadcrumbItem icon={Folder} text="This week" />
                          <BreadcrumbItem
                            icon={Board}
                            text="Migration of scripts in Aws"
                          />
                        </BreadcrumbsBar>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          href="https://www.monday.com"
                          text="@Abdul Rehman"
                        />
                        <Text className="px-2">
                          check the description in "Description of the task"
                          column
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Icon
                      className="mx-1"
                      icon={Time}
                      iconSize={20}
                      iconType="SVG"
                    />
                    <Text>9h</Text>
                  </div>
                </Box>
                <Divider />

                <Box
                  ref={hoverRef3}
                  padding={Box.paddings.SMALL}
                  rounded={Box.roundeds.MEDIUM}
                  backgroundColor={
                    isHovered3 && Box.backgroundColors.PRIMARY_BACKGROUND_COLOR
                  }
                  className="updates-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <Avatar
                      withoutBorder
                      size={Avatar.sizes.LARGE}
                      type={Avatar.types.TEXT}
                      text="S"
                      backgroundColor={Avatar.colors.DONE_GREEN}
                      ariaLabel="Ron Meir"
                    />
                    <div className="mx-2">
                      <div className="d-flex">
                        <Text>Sid</Text>
                        <Text className="mx-2">|</Text>
                        <BreadcrumbsBar className="breadcrumb-custom">
                          <BreadcrumbItem
                            icon={Workspace}
                            text="Abdul Rehman"
                          />
                          <BreadcrumbItem icon={Folder} text="This week" />
                          <BreadcrumbItem
                            icon={Board}
                            text="Migration of scripts in Aws"
                          />
                        </BreadcrumbsBar>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          href="https://www.monday.com"
                          text="@Abdul Rehman"
                        />
                        <Text className="px-2">
                          check the description in "Description of the task"
                          column
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Icon
                      className="mx-1"
                      icon={Time}
                      iconSize={20}
                      iconType="SVG"
                    />
                    <Text>9h</Text>
                  </div>
                </Box>
                <Divider />

                <Box
                  padding={Box.paddings.SMALL}
                  rounded={Box.roundeds.MEDIUM}
                  className="updates-item d-flex align-items-center justify-content-between pulse-background-color"
                >
                  <div className="d-flex align-items-center">
                    <AvatarGroup max={3} size="large">
                      <Avatar
                        ariaLabel="Hadas Fahri"
                        src="https://style.monday.com/static/media/person1.de30c8ee.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Sergey Roytman"
                        src="https://style.monday.com/static/media/person2.24c7233e.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Yossi Saadi"
                        src="https://style.monday.com/static/media/person3.3661bfe5.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Hadas Fahri"
                        src="https://style.monday.com/static/media/person1.de30c8ee.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Sergey Roytman"
                        src="https://style.monday.com/static/media/person2.24c7233e.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Yossi Saadi"
                        src="https://style.monday.com/static/media/person3.3661bfe5.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Hadas Fahri"
                        src="https://style.monday.com/static/media/person1.de30c8ee.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Sergey Roytman"
                        src="https://style.monday.com/static/media/person2.24c7233e.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Yossi Saadi"
                        src="https://style.monday.com/static/media/person3.3661bfe5.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Hadas Fahri"
                        src="https://style.monday.com/static/media/person1.de30c8ee.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Sergey Roytman"
                        src="https://style.monday.com/static/media/person2.24c7233e.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Yossi Saadi"
                        src="https://style.monday.com/static/media/person3.3661bfe5.png"
                        type="img"
                      />
                      <Avatar
                        ariaLabel="Mark Roytstein"
                        text="MR"
                        type="text"
                      />
                    </AvatarGroup>
                    <div className="mx-2">
                      <Heading type={Heading.types.H3}>
                        Invite your teammates and start collaborating
                      </Heading>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Button className="mx-1" kind={Button.kinds.TERTIARY}>
                      No Thanks
                    </Button>
                    <Button>Invite</Button>
                  </div>
                </Box>
              </Box>
            </ExpandCollapse>
          </Box>
        </div>
        <div className="col-3">
          <Heading type={Heading.types.H3}>Learn & get inspired</Heading>
          <Box
            backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}
            rounded={Box.roundeds.MEDIUM}
            padding={Box.paddings.MEDIUM}
            marginTop={Box.marginTops.MEDIUM}
            marginBottom={Box.marginBottoms.MEDIUM}
            className="d-flex align-items-center"
          >
            <img src={getStartedImg} alt="" />
            <div className="px-3">
              <Heading className="mb-1" type={Heading.types.H3}>
                Getting started
              </Heading>
              <Text type={Text.types.TEXT1}>Learn how flexliving works.</Text>
            </div>
          </Box>

          <Box
            backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}
            rounded={Box.roundeds.MEDIUM}
            padding={Box.paddings.MEDIUM}
            marginTop={Box.marginTops.MEDIUM}
            marginBottom={Box.marginBottoms.MEDIUM}
            className="d-flex align-items-center"
          >
            <img src={helpCenterImg} alt="" />
            <div className="px-3">
              <Heading className="mb-1" type={Heading.types.H3}>
                Help Center
              </Heading>
              <Text type={Text.types.TEXT1}>Learn & get support</Text>
            </div>
          </Box>
        </div>
      </div>
    </Dashboard>
  );
}

export default Index