import { Box, Button, Center, Group } from "@mantine/core";
import React from "react";
import CarCard from "../main-cars/car-card";

export default function CatalogueBody() {
  return (
    <Box>
      <Group wrap="wrap" my={42} justify="space-between" gap={42}>
        <CarCard />
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
