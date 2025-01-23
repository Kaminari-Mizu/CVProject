import { Container, Grid, SimpleGrid, Skeleton, Image, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { useEffect } from 'react';
import TimeLine from './TimeLine';
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
  const [selectedImage, setSelectedImage] = useState(images[0]);
  let [imagePosition, setImagePosition] = useState(0);
  
  const handleImageClick = () => {
    if(imagePosition<images.length-1){
    imagePosition++;
    setImagePosition(imagePosition)
    setSelectedImage(images[imagePosition])
    console.log(imagePosition)
    }
    else{
      imagePosition=0
      setSelectedImage(images[0])
    }
  }
  
  useEffect(() => {
    const interval = setInterval(handleImageClick,3000); 
    return () => clearInterval(interval);
  }, [imagePosition, images]);
 

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="sm">
           <Group align='center' gap="sm" grow>
            <Image
                radius="500px"
                h={500}
                w="auto"
                fit='contain'
                src={selectedImage}
                onClick={handleImageClick}/>
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