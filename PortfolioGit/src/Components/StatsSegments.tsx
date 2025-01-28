import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react'; // Importing icons from Tabler Icons
import { Box, Group, Paper, Progress, SimpleGrid, Text } from '@mantine/core'; // Importing components from Mantine library
import classes from './StatsSegments.module.css'; // Importing custom CSS module for styling

// Data representing the statistics for mobile, desktop, and tablet usage
const data = [
  { label: 'Mobile', count: '204,001', part: 59, color: '#47d6ab' }, // Mobile usage data
  { label: 'Desktop', count: '121,017', part: 35, color: '#03141a' }, // Desktop usage data
  { label: 'Tablet', count: '31,118', part: 6, color: '#4fcdf7' }, // Tablet usage data
];

// StatsSegments functional component
export function StatsSegments() {
  // Mapping through the data to create segments for progress bars
  const segments = data.map((segment) => (
    <Progress.Section value={segment.part} color={segment.color} key={segment.color}> {/* Creating a progress section for each segment */}
      {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>} {/* Showing percentage label if part > 10 */}
    </Progress.Section>
  ));

  // Mapping through the data to create descriptions for each statistic
  const descriptions = data.map((stat) => (
    <Box key={stat.label} style={{ borderBottomColor: stat.color }} className={classes.stat}> {/* Creating a box for each stat with color styling */}
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}> {/* Uppercase text with small font size */}
        {stat.label} {/* Displaying the stat label */}
      </Text>

      <Group justify="space-between" align="flex-end" gap={0}> {/* Grouping the stat count and percentage */}
        <Text fw={700}>{stat.count}</Text> {/* Displaying the count */}
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}> {/* Displaying percentage in the stat's color */}
          {stat.part}% {/* Displaying the stat's percentage */}
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper withBorder p="md" radius="md"> {/* Paper component to wrap the entire stats section with borders and padding */}
      <Group justify="space-between"> {/* Group for positioning the title and icon */}
        <Group align="flex-end" gap="xs"> {/* Group for the title and the icon */}
          <Text fz="xl" fw={700}> {/* Displaying the main title */}
            My Coding Experience in Different languages expressed as percentage of my overall coding experience
          </Text>
          <Text c="teal" className={classes.diff} fz="sm" fw={700}> {/* Displaying a teal-colored icon indicating difference */}
            <IconArrowUpRight size={16} style={{ marginBottom: 4 }} stroke={1.5} /> {/* Icon for the difference */}
          </Text>
        </Group>
        <IconDeviceAnalytics size={22} className={classes.icon} stroke={1.5} /> {/* Icon representing analytics */}
      </Group>

      <Text c="dimmed" fz="sm"> {/* Subtitle explaining the stats */}
        Page views compared to previous month
      </Text>

      <Progress.Root size={34} classNames={{ label: classes.progressLabel }} mt={40}> {/* Progress bar container */}
        {segments} {/* Rendering the progress bar segments */}
      </Progress.Root>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl"> {/* Simple grid layout to display the descriptions */}
        {descriptions} {/* Rendering the stat descriptions */}
      </SimpleGrid>
    </Paper>
  );
}
