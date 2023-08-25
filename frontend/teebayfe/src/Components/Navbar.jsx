import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    //navigate("/"); // Redirect the user to the login page
  };

  return (
    <Box pb={120}>
      <Header height={60} px="md" style={{ background: theme.colors.gray[3] }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Group position="apart" sx={{ alignItems: "center" }}>
            <span className={classes.link}>
              <span style={{ fontSize: theme.fontSizes.xl, fontWeight: 800 }}>
                Teebay
              </span>
            </span>
          </Group>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavLink to="/allproducts" className={classes.link}>
              All Products
            </NavLink>
            <NavLink to="/myproducts" className={classes.link}>
              My products
            </NavLink>
            <NavLink to="/bought" className={classes.link}>
              My History
            </NavLink>
          </Group>
          <Group className={classes.hiddenMobile}>
            <Button>LOGOUT</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <NavLink to="/allproducts" className={classes.link}>
            All Products
          </NavLink>
          <NavLink to="/myproducts" className={classes.link}>
            My products
          </NavLink>
          <NavLink to="/bought" className={classes.link}>
            My History
          </NavLink>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group position="center" grow pb="xl" px="md">
            <Button onClick={handleLogout}>LOGOUT</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;
