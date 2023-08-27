import React, { useState, useEffect } from "react";
import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  Card,
  ScrollArea,
  rem,
  Container,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

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

  active: {
    color: "red",
  },
}));

function SoldProduct() {
  const location = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  const [soldProducts, setSoldProducts] = useState([]);
  let userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchSoldProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/sold-products/user/${userData.user_id}`
        );
        const soldProductsData = await response.json();
        setSoldProducts(soldProductsData);
      } catch (error) {
        console.log("Error Fetching Bought Products", error);
      }
    };

    fetchSoldProducts();
  }, [userData.user_id]);

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
            <NavLink
              to="/bought"
              className={`${classes.link} ${
                location.pathname === "/bought" ? classes.active : ""
              }`}
            >
              Bought
            </NavLink>
            <NavLink
              to="/sold"
              className={`${classes.link} ${
                location.pathname === "/sold" ? classes.active : ""
              }`}
            >
              Sold
            </NavLink>
            <NavLink
              to="/borrowed"
              className={`${classes.link} ${
                location.pathname === "/borrowed" ? classes.active : ""
              }`}
            >
              Borrowed
            </NavLink>
            <NavLink
              to="/lent"
              className={`${classes.link} ${
                location.pathname === "/lent" ? classes.active : ""
              }`}
            >
              Lent
            </NavLink>
          </Group>
          <Group className={classes.hiddenMobile}></Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container size="xl" style={{ paddingTop: "60px", flex: 1 }}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Sold Products!
          </Title>
          <div style={{ ...cardContainerStyle, gridTemplateColumns: "1fr" }}>
            {soldProducts.map((product) => (
              <Card
                key={product.id}
                shadow="sm"
                padding="lg"
                style={{
                  cursor: "pointer",
                  marginBottom: "20px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Text size="xl" style={{ marginBottom: "0.5rem" }}>
                    {product.title}
                  </Text>
                  <Text style={{ marginBottom: "0.5rem" }}>
                    Categories: {product.categories.join(", ")}
                  </Text>
                  <Text style={{ marginBottom: "0.5rem" }}>
                    Price: ${product.price.toFixed(2)} | Rent: $
                    {product.rent_price.toFixed(2)} {" Per "}
                    {product.rent_period}
                  </Text>
                  <Text style={{ marginBottom: "0.5rem" }}>
                    {product.description}
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Text>
                      Date Posted:{" "}
                      {new Date(product.createdAt).toLocaleDateString()}
                    </Text>
                    <Text>Views: {product.views}</Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>

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
          <NavLink
            to="/bought"
            className={`${classes.link} ${
              location.pathname === "/bought" ? classes.active : ""
            }`}
          >
            Bought
          </NavLink>
          <NavLink
            to="/sold"
            className={`${classes.link} ${
              location.pathname === "/sold" ? classes.active : ""
            }`}
          >
            Sold
          </NavLink>
          <NavLink
            to="/borrowed"
            className={`${classes.link} ${
              location.pathname === "/borrowed" ? classes.active : ""
            }`}
          >
            Borrowed
          </NavLink>
          <NavLink
            to="/lent"
            className={`${classes.link} ${
              location.pathname === "/lent" ? classes.active : ""
            }`}
          >
            Lent
          </NavLink>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group position="center" grow pb="xl" px="md"></Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default SoldProduct;
