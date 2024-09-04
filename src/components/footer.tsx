import {
  Box,
  Divider,
  Grid,
  Group,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export default function Footer() {
  return (
    <Box px={60} pt={80}>
      <Grid>
        <Grid.Col span={3}>
          <Title c={"primary"} fz={"twoXl"}>
            MORENT
          </Title>
          <Text fz={"base"} mt={16}>
            Our vision is to provide convenience and help increase your sales
            business
          </Text>
        </Grid.Col>
        <Grid.Col span={2} offset={3}>
          <Title order={4}>About</Title>
          <List
            listStyleType="none"
            style={{
              fontWeight: "normal",
            }}
          >
            <Stack
              mt={24}
              gap={18}
              style={{
                fontSize: "14px",
              }}
            >
              <ListItem>How it works</ListItem>
              <ListItem>Featured</ListItem>
              <ListItem>Partnership</ListItem>
              <ListItem>Bussiness Relation</ListItem>
            </Stack>
          </List>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={4}>Community</Title>
          <List
            listStyleType="none"
            style={{
              fontWeight: "normal",
            }}
          >
            <Stack
              mt={24}
              gap={18}
              style={{
                fontSize: "14px",
              }}
            >
              <ListItem>Events</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Podcast</ListItem>
              <ListItem>Invite a friend</ListItem>
            </Stack>
          </List>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={4}>Socials</Title>
          <List
            listStyleType="none"
            style={{
              fontWeight: "normal",
            }}
          >
            <Stack
              mt={24}
              gap={18}
              style={{
                fontSize: "14px",
              }}
            >
              <ListItem>Discord</ListItem>
              <ListItem>Instagram</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
            </Stack>
          </List>
        </Grid.Col>
      </Grid>

      <Divider my={36} />

      <Group justify="space-between" mb={60}>
        <Text fz={"base"} fw={"bold"}>
          &copy;2022 MORENT. All rights reserved
        </Text>

        <Group gap={60}>
          <Text fz={"base"} fw={"bold"}>
            Privacy & Policy
          </Text>
          <Text fz={"base"} fw={"bold"}>
            Terms & Condition
          </Text>
        </Group>
      </Group>
    </Box>
  );
}
