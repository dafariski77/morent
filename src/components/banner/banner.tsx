import {
  BackgroundImage,
  Box,
  Button,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import BannerFilter from "./banner-filter";

export default function Banner() {
  return (
    <Box py={32}>
      <SimpleGrid cols={2} spacing={32}>
        <BackgroundImage src="/images/banner/banner-1.png" radius={"md"}>
          <Box
            w={640}
            h={360}
            style={{
              color: "white",
            }}
            p={24}
          >
            <Stack w={284}>
              <Title fw={"normal"}>The Best Platform for Car Rental</Title>
              <Text fz={"base"}>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </Text>
              <Box>
                <Button fw={"normal"} size="md" fz={"sm"}>
                  Rental Car
                </Button>
              </Box>
            </Stack>
          </Box>
        </BackgroundImage>
        <BackgroundImage src="/images/banner/banner-2.png" radius={"md"}>
          <Box
            w={640}
            h={360}
            style={{
              color: "white",
            }}
            p={24}
          >
            <Stack w={284}>
              <Title fw={"normal"}>Easy way to rent a car at a low price</Title>
              <Text fz={"base"}>
                Providing cheap car rental services and safe and comfortable
                facilities.
              </Text>
              <Box>
                <Button fw={"normal"} size="md" fz={"sm"} bg={"information.5"}>
                  Rental Car
                </Button>
              </Box>
            </Stack>
          </Box>
        </BackgroundImage>
      </SimpleGrid>
      <BannerFilter />
    </Box>
  );
}
