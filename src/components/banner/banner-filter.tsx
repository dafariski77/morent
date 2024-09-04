import { ActionIcon, Box, Group, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { LuArrowUpDown } from "react-icons/lu";

export default function BannerFilter() {
  return (
    <Box mt={32} mb={2}>
      <Group justify="space-between">
        <Box
          h={132}
          w={620}
          bg={"white"}
          style={{
            borderRadius: "10px",
          }}
          px={48}
          py={24}
        >
          <Text fz={"base"} fw={"bold"}>
            Pick - Up
          </Text>
          <SimpleGrid cols={3} mt={16}>
            <Text fz={"base"} fw={"bold"}>
              Locations
            </Text>
            {/* <Divider orientation="vertical" /> */}
            <Text fz={"base"} fw={"bold"}>
              Date
            </Text>
            <Text fz={"base"} fw={"bold"}>
              Time
            </Text>
          </SimpleGrid>
        </Box>

        <ActionIcon w={60} h={60} radius={"md"}>
          <LuArrowUpDown />
        </ActionIcon>

        <Box
          h={132}
          w={620}
          bg={"white"}
          style={{
            borderRadius: "10px",
          }}
          px={48}
          py={24}
        >
          <Text fz={"base"} fw={"bold"}>
            Pick - Up
          </Text>
          <SimpleGrid cols={3} mt={16}>
            <Text fz={"base"} fw={"bold"}>
              Locations
            </Text>
            {/* <Divider orientation="vertical" /> */}
            <Text fz={"base"} fw={"bold"}>
              Date
            </Text>
            <Text fz={"base"} fw={"bold"}>
              Time
            </Text>
          </SimpleGrid>
        </Box>
      </Group>
    </Box>
  );
}
