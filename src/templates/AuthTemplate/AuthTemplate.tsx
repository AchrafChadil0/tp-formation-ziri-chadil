/* eslint-disable import/no-unresolved */
import { AppShell, Group } from "@mantine/core";
import { IconBrandStorytel } from "@tabler/icons-react";

import ToggleControl from "../../components/ToggleControl/ToggleControl";
import classes from "./AuthTemplate.module.css";


export function AuthTemplate(props: ComponentChild) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <IconBrandStorytel stroke={2} />
          <ToggleControl />
        </Group>
      </AppShell.Header>
      <AppShell.Main className={classes.main}>{props?.children}</AppShell.Main>
    </AppShell>
  );
}

export default AuthTemplate;
