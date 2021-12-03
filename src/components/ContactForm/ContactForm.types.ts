type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  loading?: boolean;
  onSubmit: (e: ContactFormValues) => void;
};
