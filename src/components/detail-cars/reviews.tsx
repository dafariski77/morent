import {
  Avatar,
  Badge,
  Box,
  Flex,
  Group,
  Rating,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import React from "react";

export default function Review() {
  return (
    <Box
      p={"24 24 92 24"}
      bg={"white"}
      mt={32}
      style={{
        borderRadius: "10px",
      }}
    >
      <Group align="center">
        <Title order={3} fz={"lg"}>
          Reviews
        </Title>
        <ThemeIcon fz={"sm"}>13</ThemeIcon>
      </Group>
      <Stack>
        <Flex mt={32} align="start" gap={16}>
          <Avatar src={"/images/profile.png"} size={"lg"} />
          <Stack>
            <Title order={4} fz={"lg"}>
              Alex Stanton
            </Title>
            <Group justify="end">
              <Rating value={5} readOnly />
            </Group>
            <Text size="sm">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </Text>
          </Stack>
        </Flex>
        <Flex mt={32} align="start" gap={16}>
          <Avatar src={"/images/profile.png"} size={"lg"} />
          <Stack>
            <Title order={4} fz={"lg"}>
              Alex Stanton
            </Title>
            <Group justify="end">
              <Rating value={5} readOnly />
            </Group>
            <Text size="sm">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
