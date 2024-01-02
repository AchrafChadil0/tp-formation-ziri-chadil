import {  Group, ScrollArea } from "@mantine/core";
import { IconBrandStorytel } from "@tabler/icons-react";
import { UserButton } from "../../components/UserButton/UserButton.tsx";

import ToggleControl from "../../components/ToggleControl/ToggleControl.tsx";
import classes from "./AccueilTemplate.module.css";
import NavBarLinkGroup from "../../components/NavBarLinkGroup/index.ts";


export default function AccueilTemplate() {

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <IconBrandStorytel stroke={2} />
          <ToggleControl />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          <NavBarLinkGroup user="Formateur" />
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
