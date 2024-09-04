import {
  Avatar,
  Box,
  Group,
  Indicator,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

export default function Navbar() {
  return (
    <Box
      pl={60}
      py={40}
      pr={32}
      style={{
        borderBottom: "1px solid #C3D4E9",
      }}
    >
      <Group justify="space-between">
        <Group>
          <Text c={"primary"} fz={"twoXl"} fw={"bold"}>
            MORENT
          </Text>
          <TextInput
            radius={"xl"}
            size="md"
            w={492}
            ml={64}
            placeholder="Search something here"
            rightSectionWidth={42}
            leftSection={<CiSearch />}
            rightSection={<VscSettings />}
          />
        </Group>
        <Group gap={20}>
          <Avatar bg={"white"}>
            <IoMdHeart fontSize={20} />
          </Avatar>
          <Indicator color="red" offset={7} size={12} inline withBorder>
            <Avatar bg={"white"}>
              <IoMdNotifications fontSize={20} />
            </Avatar>
          </Indicator>
          <Avatar bg={"white"}>
            <IoMdSettings fontSize={20} />
          </Avatar>
          <Avatar src={"/images/profile.png"} />
        </Group>
      </Group>
    </Box>
  );
}
