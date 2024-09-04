import { categoryFilters, seatFilters } from "@/data/filters";
import { Box, Checkbox, Flex, Group, Slider, Stack, Text } from "@mantine/core";
import React from "react";

const sliderValue = [
  { value: 0, label: "$0" },
  { value: 25, label: "$25" },
  { value: 50, label: "$50" },
  { value: 75, label: "$75" },
  { value: 100, label: "$100" },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <Flex align="start">
      <Stack w={360} gap={56} p={32}>
        <Stack pt={48}>
          {categoryFilters.map((label, i) => (
            <Checkbox label={label} key={i} />
          ))}
        </Stack>
        <Stack pt={48}>
          {seatFilters.map((label, i) => (
            <Checkbox label={label} key={i} />
          ))}
        </Stack>
        <Stack pt={48}>
          <Slider
            defaultValue={0}
            min={0}
            max={100}
            label={(value) => value.toFixed(1)}
            step={0.1}
            styles={{ markLabel: { display: "none" } }}
          />
          <Text fw={"bold"} fz={"base"}>
            Max. $100.00
          </Text>
        </Stack>
      </Stack>
      <Box p={42} bg={"#F6F7F9"} w={"100%"} mih={"100vh"}>
        {children}
      </Box>
    </Flex>
  );
}
