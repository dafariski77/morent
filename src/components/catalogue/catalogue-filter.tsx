import { ActionIcon, Box, Group, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { LuArrowUpDown } from "react-icons/lu";

export default function CatalogueFilter() {
  return (
    <Box pos="relative">
      <Group justify="space-between" align="center">
        <Box
          h={132}
          w={552}
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
            <Text fz={"base"} fw={"bold"}>
              Date
            </Text>
            <Text fz={"base"} fw={"bold"}>
              Time
            </Text>
          </SimpleGrid>
        </Box>

        {/* Inline middle top of two boxes */}
        <ActionIcon
          w={60}
          h={60}
          radius={"md"}
          variant="filled"
          color="blue"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: 1,
          }}
        >
          <LuArrowUpDown />
        </ActionIcon>

        <Box
          h={132}
          w={552}
          bg={"white"}
          style={{
            borderRadius: "10px",
          }}
          px={48}
          py={24}
        >
          <Text fz={"base"} fw={"bold"}>
            Drop - Off
          </Text>
          <SimpleGrid cols={3} mt={16}>
            <Text fz={"base"} fw={"bold"}>
              Locations
            </Text>
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
