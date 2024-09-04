import { Box, Group, Text } from "@mantine/core";
import React from "react";
import CarCard from "../main-cars/car-card";

export default function Recommendation() {
  return (
    <Box mt={32}>
      <Group justify="end">
        <Text c={"primary"} fz={"base"}>
          View All
        </Text>
      </Group>
      <Group justify="space-between" mt={20}>
        <CarCard />
        <CarCard />
        <CarCard />
      </Group>
    </Box>
  );
}
