import { IconDeviceDesktop, IconSchool, IconShoppingCart } from '@tabler/icons-react'; // Importing icons from Tabler Icons
import { Grid, SimpleGrid, Text, ThemeIcon, Title, Image } from '@mantine/core'; // Importing components from Mantine library
import classes from './FeaturesTitle.module.css'; // Importing custom CSS module for styling
import Images from '../assets/WorkStock.jpg';
// Defining the features array with each feature having an icon, title, and description
const features = [
  {
    icon: IconSchool,
    title: 'De Kuilen High School',
    description: 'From 2013 - 2017 I went to De Kuilen High School and matriculated in the top 10 of my grade with 8 distinctions in: Afrikaans Huistaal, English Home Language, Accounting, Physical Sciences, Mathematics, Geography, Life Sciences, and Life Orientation',
  },
  {
    icon: IconSchool,
    title: 'Stellenbosch University',
    description: 'Did two years at Stellies from 2018-2019 in their Electrical and Electronic Engineering program before switching to CPUT in 2021 (after Covid)',
  },
  {
    icon: IconSchool,
    title: 'Cape Peninsula University of Technology',
    description:
      'Studied at CPUT in Computer Engineering from 2021-2023 and graduated with a Bachelors Degree and an average grade of 81% across all 3 years',
  },
  {
    icon: IconShoppingCart,
    title: 'Studio 88 and Outdoor Warehouse',
    description:
      'Worked for a short time as a part-time sales assistant at Studio 88 in Kuils River and Outdoor Warehouse Hermanus where I improved my customer service and other soft skills. One and four months respectively',
  },
  {
    icon: IconDeviceDesktop,
    title: '1 Nebula Software Developer Internship',
    description:
      'Did a year long Software Developer Internship where I honed my programming skills in React, TypeScript, C#, SQL, and working with Microsoft Azure',
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
            Education and Work Experience
          </Title>
         <Image radius="md"src={Images}/>
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
