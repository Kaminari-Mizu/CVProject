import { IconBook, IconCampfire, IconDeviceGamepad, IconPicnicTable } from '@tabler/icons-react';
import {
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeatureCards.module.css';

const mockdata = [
  {
    title: 'Video Games',
    description:
      'I enjoy playing single player story driven video games such as Final Fantasy, Kingdom Hearts, Onimusha, Sekiro, and Resident Evil. It really lets me immerse myself in a world so different from ours. I also enjoy the challenge some of these games offer, as it motivates me in my personal and work life when I can overcome an immense hurdle in a video game',
    icon: IconDeviceGamepad,
  },
  {
    title: 'Camping',
    description:
      'Although I grew up a city boy, once my dad introduced me to camping I fell in love with it. It became the perfect getaway to just shutoff. Minimal technology, just me with my thoughts in nature. Whenever possible, I try and go camp at least once a year as a way to just unwind and recharge.',
    icon: IconCampfire,
  },
  {
    title: 'Socializing',
    description:
      'I also enjoy spending time with people and going out on occasion as I am someone who generally enjoys entertaining and being around people',
    icon: IconPicnicTable,
  },
  {
    title: 'Watching series/Reading',
    description:
      'If I am not in the mood for video games, being sprawled out on the couch with a good series or book offers the same level of enjoyment and relaxation as any video game',
    icon: IconBook,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">

      </Group>

      <Title c={"cyan"} order={1} className={classes.title} ta="center" mt="sm">
        Hobbies
      </Title>

      <Text c={"cyan"} className={classes.description} ta="justify" mt="lg">
        My hobbies range from enjoying some me time with a video game to spending time with friends in a social setting.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}