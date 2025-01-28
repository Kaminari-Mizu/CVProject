import { Timeline, Text, Avatar, ThemeIcon } from '@mantine/core';  // Importing components from Mantine library
import { IconVideo } from '@tabler/icons-react';  // Importing video icon from Tabler Icons

// TimeLine functional component
function TimeLine() {
  return (
    <Timeline color="green" active={3} lineWidth={2} bulletSize={31}>
      
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">  
          Default bullet without anything
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Avatar"
        bullet={  
          <Avatar
            size={22}  // Avatar size set to 22 pixels
            radius="xl"  // Extra-large radius for a rounded avatar
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"  // Avatar image URL
          />
        }
      >
        <Text c="dimmed" size="sm">  
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="ThemeIcon" 
        bullet={ 
          <ThemeIcon
            size={22}  // ThemeIcon size set to 22 pixels
            variant="gradient"  // Gradient variant for the ThemeIcon
            gradient={{ from: 'lime', to: 'cyan' }}  // Gradient colors: lime to cyan
            radius="xl"  // Extra-large radius for rounded corners
          >
            <IconVideo size={13} />  {/* Video icon inside the ThemeIcon */}
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">  {/* Text component with description */}
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimeLine;  // Exporting the TimeLine component for use in other parts of the application
