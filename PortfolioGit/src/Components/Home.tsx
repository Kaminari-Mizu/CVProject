import { Container, Grid, SimpleGrid, Group, Text } from '@mantine/core';
import TimeLine from './TimeLine'; // Importing a custom `TimeLine` component
import Carousel from './Carousel'; // Importing a custom `Carousel` component
import Data from '../assets/data.json'; // Importing data from a JSON file
import { BadgeCard } from './BadgeCard'; // Importing the reusable `BadgeCard` component

// The main `Home` component
function Home() {
  // Extracting the `images` array and `mockdata` object from the imported JSON file
  const images = Data.images;
  const dataCard = Data.mockdata;

  return (
    // Container to wrap and center the content with padding/margins
    <Container my="md">
      {/* SimpleGrid ensures layout is responsive with specified column settings */}
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="sm">
        {/* Group aligns items horizontally with spacing */}
        <Group align="center" gap="sm" grow>
          {/* Passing the images array to the Carousel component */}
          <Carousel images={images} />
          {/* A block of text that displays some placeholder content */}
          <Text size="md" ta="right" fw={500} lineClamp={3}>
            Something something something checking
            Awe it worksafddddddsssssssssssssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss
          </Text>
        </Group>

        {/* Grid layout to display components in a structured way */}
        <Grid gutter="md">
          <Grid.Col>
            {/* Rendering the TimeLine component */}
            <TimeLine />
          </Grid.Col>
          {/* Using BadgeCard with data from the JSON file, navigating to different routes */}
          <Grid.Col span={6}>
            <BadgeCard {...dataCard} url="/details" />
          </Grid.Col>
          <Grid.Col span={6}>
            <BadgeCard {...dataCard} url="/hobbies" />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

// Exporting the `Home` component as the default export
export default Home;
