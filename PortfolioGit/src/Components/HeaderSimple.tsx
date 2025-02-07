// Import necessary hooks and components from React, Mantine, and React Router
import { useState, useEffect } from 'react';
import { Burger, Container, Group, Transition, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import classes from './HeaderSimple.module.css'; // Import custom CSS module for styling

// Define navigation links with their respective routes and labels
const links = [
  { link: '/', label: 'Home' },
  { link: '/details', label: 'Details' },
  { link: '/Hobbies', label: 'Hobbies' },
  { link: '/GetInTouch', label: 'Contact Me' },
];

// Functional component for the header
export function HeaderSimple() {
  // State for toggling the mobile navigation menu (burger menu)
  const [opened, { toggle }] = useDisclosure(false);

  // React Router hook to get the current location (path)
  const location = useLocation();

  // State to track the currently active link
  const [active, setActive] = useState(location.pathname);

  // Effect to update the active link whenever the location changes
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  // Map over the links array to generate navigation items
  const items = links.map((link) => (
    <Link
      key={link.label} // Unique key for each item
      to={link.link} // Route for the link
      className={classes.link} // Apply custom styling from CSS module
      data-active={active === link.link || undefined} // Add a `data-active` attribute if the link is active
      onClick={() => {
        setActive(link.link); // Update the active state when the link is clicked
      }}
    >
      {link.label} {/* Display the label for the link */}
    </Link>
  ));

  // Render the header component
  return (
    <header className={classes.header}>
      {/* Main container for the header */}
      <Container size="md" className={classes.inner}>
        {/* Group navigation links for desktop view */}
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        {/* Burger menu button for mobile view */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

        {/* Transition for showing/hiding the mobile menu */}
        <Transition
          mounted={opened} // Only mount the menu when `opened` is true
          transition="pop-top-right" // Animation type for the menu
          duration={200} // Duration of the transition in milliseconds
          timingFunction="ease" // Easing function for smooth animation
        >
          {(styles) => (
            // Paper component for the dropdown menu background
            <Paper style={styles} className={classes.dropdown}>
              {/* Group navigation links for mobile view */}
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
