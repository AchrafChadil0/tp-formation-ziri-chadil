/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconCalendarStats } from "@tabler/icons-react";
import NavBarLink from "../NavBarLink/index.ts";
type NavBarLinkGroupProps = {
  user: string;
};

// this  the navbars that will be created
// just add an onject here [based on role] and the navbar  will be added.
const FormateurData = [
  {
    key: 1,
    label: "Releases",
    icon: IconCalendarStats,
    link: "/Releases",
  },
  {
    key: 2,
    label: "dada",
    icon: IconCalendarStats,
    link: "/dada",
  },
  {
    key: 3,
    label: "mama",
    icon: IconCalendarStats,
    link: "/mama",
  },
  {
    key: 4,
    label: "dano",
    icon: IconCalendarStats,
    link: "/mama",
  },
];

const ParticipantData = [
  {
    key: 1,
    label: "dashboard",
    icon: IconCalendarStats,
    link: "/dashboard",
  },
  {
    key: 2,
    label: "Courses",
    icon: IconCalendarStats,
    link: "/Courses",
  },
  {
    key: 3,
    label: "Cartel",
    icon: IconCalendarStats,
    link: "/Cartel",
  },
];

// ---- 

const NavBarLinkGroup: React.FC<any> = (props: NavBarLinkGroupProps) => {
  let navBarsData: any = [];
  switch (props.user) {
    case "Formateur":
      navBarsData = FormateurData;
      break;
    case "Participant":
      navBarsData = ParticipantData;
      break;
    default:
      navBarsData = [];
  }
  const navBars = navBarsData.map((navBarData: any) => (
    <NavBarLink {...navBarData} />
  ));

  return navBars;
};

export default NavBarLinkGroup;
