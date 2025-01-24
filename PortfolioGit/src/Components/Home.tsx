import { Container, Grid, SimpleGrid, Group, Text } from '@mantine/core';
import TimeLine from './TimeLine';
import Carousel from './Carousel';
import Data from '../assets/data.json';
import { BadgeCard } from './BadgeCard';

const mockdata = {
    image:
      'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Verudela Beach',
    country: 'Croatia',
    description:
      'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
    badges: [
      { emoji: '☀️', label: 'Sunny weather' },
      { emoji: '🦓', label: 'Onsite zoo' },
      { emoji: '🌊', label: 'Sea' },
      { emoji: '🌲', label: 'Nature' },
      { emoji: '🤽', label: 'Water sports' },
    ],
  };

function Home() {
 // const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const images = Data.images;
  

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="sm">
           <Group align='center' gap="sm" grow>
                <Carousel images={images}/>
                <Text size='md' ta="right" fw={500} lineClamp={3}>
                    Something something somehting checking
                    Awe it worksafddddddsssssssssssssssssssssssssssssssssssssss
                    ssssssssssssssssssssssssssss
                </Text>
            </Group>
        <Grid gutter="md">
          <Grid.Col>
            <TimeLine />
          </Grid.Col>
          <Grid.Col span={6}>
            <BadgeCard {...mockdata} url="/details"/>
          </Grid.Col>
          <Grid.Col span={6}>
          <BadgeCard {...mockdata} url="/hobbies"/>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default Home;