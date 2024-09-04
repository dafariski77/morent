import {
  Box,
  Button,
  Group,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { IoIosHeart } from "react-icons/io";

export default function Description() {
  return (
    <Box
      bg={"white"}
      p={24}
      style={{
        borderRadius: "10px",
      }}
    >
      <Group align="start" justify="space-between">
        <Stack gap={10}>
          <Title order={3} fz={"xl"}>
            Nissan GT-R
          </Title>
          <Group>
            <Rating value={4} size={"sm"} readOnly />
            <Text fz={"sm"}>440+ Reviewer</Text>
          </Group>
        </Stack>
        <Text fz={"lg"}>
          <IoIosHeart color="red" />
        </Text>
      </Group>
      <Text size="lg" my={32}>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </Text>
      <SimpleGrid
        cols={2}
        style={{
          textAlign: "right",
        }}
      >
        <Text>Sport</Text>
        <Text>2 Person</Text>
        <Text>Manual</Text>
        <Text>70L</Text>
      </SimpleGrid>
      <Group justify="space-between" align="start" mt={68}>
        <Title order={3} fz={"xl"}>
          $80.00/
        </Title>
        <Button size="lg" fz={"sm"} fw={"unset"}>
          Rent Now
        </Button>
      </Group>
    </Box>
  );
}
