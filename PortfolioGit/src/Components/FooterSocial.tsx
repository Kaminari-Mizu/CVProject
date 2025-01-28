// Import necessary icons and components
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'; // Social media icons
import { ActionIcon, Container, Group } from '@mantine/core'; // Mantine components for layout and interactivity
// import { MantineLogo } from '@mantinex/mantine-logo'; // Uncomment this line if you plan to use the Mantine logo
import classes from './FooterSocial.module.css'; // Import scoped CSS module for styling

// Functional component to display a footer with social media icons
export function FooterSocial() {
  return (
    // Outer wrapper for the footer section
    <div className={classes.footer}>
      {/* Container to align content and provide spacing */}
      <Container className={classes.inner}>
        {/* Group to align and organize social media icons */}
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {/* Twitter link */}
          <a
            href="https://twitter.com" // URL for Twitter
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent window.opener exploitation
          >
            {/* ActionIcon for an interactive clickable icon */}
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter size={18} stroke={1.5} /> {/* Twitter icon */}
            </ActionIcon>
          </a>

          {/* YouTube link */}
          <a
            href="https://youtube.com" // URL for YouTube
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent window.opener exploitation
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube size={18} stroke={1.5} /> {/* YouTube icon */}
            </ActionIcon>
          </a>

          {/* Instagram link */}
          <a
            href="https://instagram.com" // URL for Instagram
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent window.opener exploitation
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram size={18} stroke={1.5} /> {/* Instagram icon */}
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}
