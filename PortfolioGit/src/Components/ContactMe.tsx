import { Button, Checkbox, Group, TextInput } from '@mantine/core'; // Importing components from Mantine library
import { useForm } from '@mantine/form'; // Importing useForm hook from Mantine for handling form state

function ContactMe() {
  // Initializing the form using the useForm hook
  const form = useForm({
    mode: 'uncontrolled', // Form mode (uncontrolled means no initial form values are set until user interacts)
    initialValues: { // Setting the initial values for each form field
      email: '',
      fullName: '',
      phoneNumber: '',
      contactReason: '',
      termsOfService: false, // Default value for the terms of service checkbox
    },
    
    // Validation rules for form fields
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'), // Basic email validation (checks if it matches the email pattern)
    },
  });
  
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}> {/* Form submission handler that logs form values */}
      <TextInput
        withAsterisk // Adding asterisk to indicate required field
        label="Full Name" // Label for the full name field
        placeholder="your full name" // Placeholder text for the full name field
        key={form.key('fullName')} // Unique key for the input field (ensures proper re-rendering)
        {...form.getInputProps('fullName')} // Binding form state to the input field
      />
      <TextInput
        withAsterisk // Adding asterisk to indicate required field
        label="Email" // Label for the email field
        placeholder="your@email.com" // Placeholder text for the email field
        key={form.key('email')} // Unique key for the input field
        {...form.getInputProps('email')} // Binding form state to the input field
      />
      <TextInput
        withAsterisk // Adding asterisk to indicate required field
        label="Phone Number" // Label for the phone number field
        placeholder="your phone number" // Placeholder text for the phone number field
        key={form.key('phoneNumber')} // Unique key for the input field
        {...form.getInputProps('phoneNumber')} // Binding form state to the input field
      />
      <TextInput
        withAsterisk // Adding asterisk to indicate required field
        label="Reason for Contact" // Label for the contact reason field
        placeholder="details" // Placeholder text for the contact reason field
        key={form.key('contactReason')} // Unique key for the input field
        {...form.getInputProps('contactReason')} // Binding form state to the input field
      />

      <Checkbox
        mt="md" // Margin-top for spacing
        label="I agree to hire this person regardless of their qualifications" // Label for the checkbox
        key={form.key('termsOfService')} // Unique key for the checkbox field
        {...form.getInputProps('termsOfService', { type: 'checkbox' })} // Binding form state to the checkbox
      />

      <Group justify="flex-end" mt="md"> {/* Grouping the submit button on the right */}
        <Button type="submit">Submit</Button> {/* Submit button for the form */}
      </Group>
    </form>
  );
}

export default ContactMe; // Exporting the ContactMe component for use in other parts of the application
