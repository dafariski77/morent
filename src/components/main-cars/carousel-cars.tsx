import { Box, Group, Text } from "@mantine/core";
import React from "react";
import CarCard from "./car-card";

export default function CarouselCars() {
  return (
    <Box>
      <Group justify="end">
        <Text c={"primary"} fz={"base"}>
          View All
        </Text>
      </Group>
      <Group justify="space-between" mt={20}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Group>
    </Box>
  );
}
