import { Timeline, Text, Avatar, ThemeIcon } from '@mantine/core';  // Importing components from Mantine library
import { IconDeviceDesktopSearch, IconHeart, IconHome, IconSchool, IconShoppingBag } from '@tabler/icons-react';  // Importing video icon from Tabler Icons
import Avatars from '../assets/ProfilePic.png';

// TimeLine functional component
function TimeLine() {
  return (
    <Timeline color="green" active={3} lineWidth={2} bulletSize={30}>

      <Timeline.Item
        bullet={  
          <Avatar
            size={40}  // Avatar size set to 22 pixels
            radius="xl"  // Extra-large radius for a rounded avatar
            src= {Avatars}  // Avatar image URL
          />
        }
      >
        <Text size="sm">  
         Born 9 April 1999 in Worcester
        </Text>
      </Timeline.Item>

      <Timeline.Item 
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconHome size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
        >
        <Text size="sm">  
          Moved to Kuils River in 2004
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconSchool size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          Started school at Mikro Primary in 2005-2012
        </Text>
      </Timeline.Item>

      <Timeline.Item 
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconSchool size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          Went to De Kuilen High School from 2013-2017
        </Text>
      </Timeline.Item>

      <Timeline.Item 
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconSchool size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          From 2018-2019 studied Electrical and Electronic Engineering at Stellenbosch University
        </Text>
      </Timeline.Item>

      <Timeline.Item 
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconSchool size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          Went to Cape Peninsula University of Technology to study Computer Engineering from 2021-2023
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconShoppingBag size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          For a short period, worked as a Part-Time Sales Assistant at Studio 88 Kuils River in 2023
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconShoppingBag size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          Worked as a Part-Time Sales Assistant at Outdoor Warehouse Hermanus for a few months in 2024
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconDeviceDesktopSearch size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
         Did a Software Developer Internship at 1Nebula in 2025
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={ 
          <ThemeIcon
            size={40}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconHeart size={21} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text size="sm">  {/* Text component with description */}
          Got married in 2025
        </Text>
      </Timeline.Item>

    </Timeline>
  );
}

export default TimeLine;  // Exporting the TimeLine component for use in other parts of the application
