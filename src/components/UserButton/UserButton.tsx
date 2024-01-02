import { UnstyledButton, Group, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
// eslint-disable-next-line import/no-unresolved
import { Link } from 'react-router-dom';

export function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>
        <Link to="/login" >
          <IconLogout className={classes.logout} stroke={1.5} />
        </Link>
      </Group>
    </UnstyledButton>
  );
}
