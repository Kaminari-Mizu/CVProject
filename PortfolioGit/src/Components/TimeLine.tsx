import { Timeline, Text, Avatar, ThemeIcon } from '@mantine/core';
import { IconVideo } from '@tabler/icons-react';

function TimeLine() {
  return (
    <Timeline color="green" active={3} lineWidth={2} bulletSize={31} >
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
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
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size={13} />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimeLine