import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form'; 
function ContactMe() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { 
      email: '',
      fullName: '',
      phoneNumber: '',
      contactReason: '',
      termsOfService: false,
    },
    
    
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'), 
    },
  });
  
  
  
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}> 
      <TextInput
        withAsterisk
        label="Full Name"
        placeholder="your full name"
        key={form.key('fullName')}
        {...form.getInputProps('fullName')}
      />
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        withAsterisk
        label="Phone Number"
        placeholder="your phone number"
        key={form.key('phoneNumber')}
        {...form.getInputProps('phoneNumber')}
      />
      <TextInput
        withAsterisk
        label="Reason for Contact"
        placeholder="details"
        key={form.key('contactReason')}
        {...form.getInputProps('contactReason')}
      />

      <Checkbox
        mt="md"
        label="I agree to hire this person regardless of their qualifications"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default ContactMe