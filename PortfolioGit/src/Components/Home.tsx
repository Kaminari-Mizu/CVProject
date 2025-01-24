import { Container, Grid, SimpleGrid, Skeleton, Group, Text } from '@mantine/core';
//import { useState } from 'react';
//import { useEffect } from 'react';
import TimeLine from './TimeLine';
import Carousel from './Carousel';
const PRIMARY_COL_HEIGHT = '300px';


function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const images = [
    "src/assets/profilePic.png",
    "src/assets/gintoki.png",
    "src/assets/roxas.jpg",
    "src/assets/myf.png",
    "src/assets/ffv.jpg",
  ];
  

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
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default Home;