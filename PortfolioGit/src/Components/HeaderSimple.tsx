import { useState } from 'react';
import { useEffect } from 'react';
import { Burger, Container, Group, Transition, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/details', label: 'Details' },
  { link: '/Hobbies', label: 'Hobbies' },
  { link: '/ContactMe', label: 'Contact Me' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);


  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Transition
          mounted={opened}
          transition="pop-top-right"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <Paper style={styles} className={classes.dropdown}>
              <Group justify='' gap="sm">
                {items}
              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
}

