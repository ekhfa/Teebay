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
  Button,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaTrash } from "react-icons/fa";
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

function MyProducts() {
  const location = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
    right: "225px",
  };

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  let userData = JSON.parse(localStorage.getItem("user"));
  // console.log(userData);

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/products/user/${userData.user_id}`
        );
        const products = await response.json();

        console.log("Here Products", products);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleCardClick = (id) => {
    navigate(`/editproducts/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:9090/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
            <NavLink
              to="/allproducts"
              className={`${classes.link} ${
                location.pathname === "/allproducts" ? classes.active : ""
              }`}
            >
              All Products
            </NavLink>
            <NavLink
              to="/myproducts"
              className={`${classes.link} ${
                location.pathname === "/myproducts" ? classes.active : ""
              }`}
            >
              My Products
            </NavLink>
            <NavLink
              to="/bought"
              className={`${classes.link} ${
                location.pathname === "/bought" ? classes.active : ""
              }`}
            >
              My History
            </NavLink>
          </Group>
          <Group className={classes.hiddenMobile}>
            <Button onClick={handleLogout}>LOGOUT</Button>
          </Group>
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
            My Products!
          </Title>
          <div style={{ ...cardContainerStyle, gridTemplateColumns: "1fr" }}>
            {products.map((product) => (
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
                }} // Grey background color
                onClick={() => handleCardClick(product.id)}
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
                <ActionIcon
                  position="absolute"
                  right="10px"
                  top="10px"
                  size="md"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: 0,
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event propagation
                    handleDelete(product.id);
                  }}
                >
                  <FaTrash />
                </ActionIcon>
              </Card>
            ))}
          </div>
          <NavLink to="/rootform">
            <Button size="sm" variant="light" style={buttonStyle}>
              Add Product
            </Button>
          </NavLink>
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

export default MyProducts;
