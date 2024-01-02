/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./NavBarLink.module.css";
import { Group, Box, ThemeIcon } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

interface NavBarLinkProps  {
  key?: number
  icon: React.FC<any>;
  label: string;
  link?: string;
};

const NavBarLink: React.FC<any> = ({
  icon: Icon,
  label,
  link,
}: NavBarLinkProps) => {
  const location = useLocation();
  return (
    <>
      <Link to={link? link : location.pathname}>
        <div className={classes.link}>
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </div>
      </Link>
    </>
  );
};

export default NavBarLink;
