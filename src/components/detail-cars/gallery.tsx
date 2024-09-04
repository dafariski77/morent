import {
  BackgroundImage,
  Box,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <Box>
      <BackgroundImage src="/images/detail/detail-1.png" radius={"md"}>
        <Box
          w={492}
          h={360}
          style={{
            color: "white",
          }}
          p={24}
        >
          <Stack>
            <Title fw={"normal"}>
              Sports car with the best design and acceleration
            </Title>
            <Text fz={"base"}>
              Safety and comfort while driving a futuristic and elegant sports
              car
            </Text>
          </Stack>
        </Box>
      </BackgroundImage>
      <Group mt={24} justify="space-between">
        <Flex
          p={4}
          style={{
            borderRadius: "10px",
            border: "solid 3px blue",
          }}
        >
          <Image
            src={"/images/detail/detail-1.png"}
            alt="detail"
            width={140}
            height={116}
            style={{
              borderRadius: "8px",
            }}
          />
        </Flex>
        <Flex>
          <Image
            src={"/images/detail/detail-2.png"}
            alt="detail"
            width={148}
            height={124}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Flex>
        <Flex>
          <Image
            src={"/images/detail/detail-3.png"}
            alt="detail"
            width={148}
            height={124}
            style={{
              borderRadius: "8px",
            }}
          />
        </Flex>
      </Group>
    </Box>
  );
}
