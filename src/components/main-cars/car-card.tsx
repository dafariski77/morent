import { Box, Button, Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { IoIosHeart } from "react-icons/io";

export default function CarCard() {
  return (
    <Card radius={10} w={304} h={388} p={24}>
      <Group align="center" justify="space-between">
        <Text fw={"bold"}>Keonigsegg</Text>
        <Text fz={"lg"}>
          <IoIosHeart color="red" />
        </Text>
      </Group>

      <Box m={"auto"}>
        <img src={"/images/cars/car.png"} alt="car" />
      </Box>

      {/* <Box h={24} w={"full"} mb={24}></Box> */}

      <Group justify="space-between">
        <Text fw={"bold"}>$99.00/</Text>
        <Button fw={"normal"} fz={"base"} size="md">
          Rent Now
        </Button>
      </Group>
    </Card>
  );
}
