import { IconHeart } from '@tabler/icons-react'; // Importing a heart icon from Tabler Icons
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core'; // Importing UI components from Mantine
import { useNavigate } from 'react-router-dom'; // Importing the navigation hook from React Router
import classes from './BadgeCard.module.css'; // Importing CSS module for custom styles

// Defining the interface for the BadgeCard props
interface BadgeCardProps {
  image: string; // URL of the image to display
  title: string; // Title of the card
  country: string; // Country label for the card
  description: string; // Description of the content
  badges: { emoji: string; label: string }[]; // Array of badges, each with an emoji and a label
  url: string; // URL to navigate to when the button is clicked
}

// BadgeCard functional component
export function BadgeCard({
  image,
  title,
  country,
  description,
  badges,
  url,
}: BadgeCardProps) {
  const navigate = useNavigate(); // React Router hook for navigation

  // Mapping over badges to generate individual Badge components
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    // Card component from Mantine for the main container
    <Card withBorder radius="md" p="md" className={classes.card}>
      {/* Card section to display the image */}
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      {/* Card section to display title, country, and description */}
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title} {/* Displaying the title */}
          </Text>
          <Badge size="sm" variant="light">
            {country} {/* Displaying the country as a badge */}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description} {/* Displaying the description */}
        </Text>
      </Card.Section>

      {/* Card section to display the list of badges */}
      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy {/* Introductory text for badges */}
        </Text>
        <Group gap={7} mt={5}>
          {features} {/* Rendering the badges */}
        </Group>
      </Card.Section>

      {/* Group for the action buttons */}
      <Group mt="xs">
        {/* Button to navigate to the specified URL */}
        <Button radius="md" style={{ flex: 1 }} onClick={() => navigate(url)}>
          Show details
        </Button>
        {/* Action icon for the heart (like) feature */}
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
