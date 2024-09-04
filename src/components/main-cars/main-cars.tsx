import { Box, Button, Center, Group } from "@mantine/core";
import React from "react";
import CarouselCars from "./carousel-cars";
import CarCard from "./car-card";

export default function MainCars() {
  return (
    <Box>
      <CarouselCars />

      <Group gap={54} wrap="wrap" mt={32} pt={64} justify="space-between">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Group>

      <Center py={64}>
        <Button fw={"normal"} size="lg" fz={"base"}>
          Show more car
        </Button>
      </Center>
    </Box>
  );
}
