import {
    createStyles,
    Header,
    Group,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { NavLink, useNavigate } from "react-router-dom";
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  

    function ProductHistory() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
    return (
      <Box pb={120}>
        <Header height={60} px="md" style={{ background: theme.colors.gray[3] }}>
          <Group position="apart" sx={{ height: '100%' }}>
          <Group position="apart" sx={{ alignItems: 'center' }}>
            <span className={classes.link}>
             <span style={{ fontSize: theme.fontSizes.xl, fontWeight: 800 }}>Teebay</span>
            </span>
            </Group>
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <a href="#" className={classes.link}>
            Bought
            </a>
            <a href="#" className={classes.link}>
            Sold
           </a>
           <a href="#" className={classes.link}>
            Borrowed
            </a>
            <a href="#" className={classes.link}>
            Lent
            </a>
            </Group>
            <Group className={classes.hiddenMobile}>
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
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
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            <a href="#" className={classes.link}>
            Bought
            </a>
            <a href="#" className={classes.link}>
            Sold
           </a>
           <a href="#" className={classes.link}>
            Borrowed
            </a>
            <a href="#" className={classes.link}>
            Lent
            </a>
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            <Group position="center" grow pb="xl" px="md">   
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }

export default ProductHistory;