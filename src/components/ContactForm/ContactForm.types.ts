type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit: (e: ContactFormValues) => void;
};
