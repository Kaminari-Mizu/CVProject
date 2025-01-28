import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react'; // Importing icons from Tabler Icons
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core'; // Importing components from Mantine library
import classes from './FeaturesTitle.module.css'; // Importing custom CSS module for styling

// Defining the features array with each feature having an icon, title, and description
const features = [
  {
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

// FeaturesTitle functional component
export function FeaturesTitle() {
  // Mapping through the features array to create feature items
  const items = features.map((feature) => (
    <div key={feature.title}> {/* Creating a div for each feature with a unique key */}
      <ThemeIcon
        size={44} // Setting the size of the icon
        radius="md" // Medium radius for rounded corners
        variant="gradient" // Using a gradient background for the icon
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }} // Gradient color settings for the icon
      >
        <feature.icon size={26} stroke={1.5} /> {/* Rendering the feature's icon with specific size and stroke */}
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}> {/* Large font size, margin-top, and bold font weight for the title */}
        {feature.title} {/* Displaying the feature's title */}
      </Text>
      <Text c="dimmed" fz="sm"> {/* Dimmed color and small font size for the description */}
        {feature.description} {/* Displaying the feature's description */}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}> {/* Wrapping the section with custom CSS class */}
      <Grid gutter={80}> {/* Grid layout with gutter spacing */}
        <Grid.Col span={{ base: 12, md: 5 }}> {/* Grid column for left content */}
          <Title className={classes.title} order={2}> {/* Title with custom styling */}
            A fully featured React components library for your next project
          </Title>
          <Text c="dimmed"> {/* Description text with dimmed color */}
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <Button
            variant="gradient" // Gradient button style
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }} // Gradient color scheme for the button
            size="lg" // Large button size
            radius="md" // Medium rounded corners for the button
            mt="xl" // Extra-large margin-top for spacing
          >
            Get started {/* Button label */}
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}> {/* Grid column for feature items */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}> {/* Simple grid layout */}
            {items} {/* Rendering the feature items */}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
