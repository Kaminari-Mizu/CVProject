import { Accordion } from '@mantine/core';
import classes from './Accordion.module.css';

interface listDetails {
    emoji: string;
    value: string;
    description: string
}

interface AccordionProps {
    AccordData: listDetails[]
}

  function Accordions({AccordData} : AccordionProps) {
    // See groceries data above
    const items = AccordData.map((item) => (
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
      </Accordion.Item>
    ));
  
    return (
      <Accordion maw='fit' defaultValue="Apples" classNames={classes}>
        {items}
      </Accordion>
    );
  }

  export default Accordions;