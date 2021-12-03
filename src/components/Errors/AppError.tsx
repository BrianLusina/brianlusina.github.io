import { FunctionComponent } from 'react';
import MainLayout from '@layouts/MainLayout';

const AppError: FunctionComponent = () => {
  return (
    <MainLayout>
      <h1>Oof! Something went terribly wrong! This is being looked into.</h1>
    </MainLayout>
  );
};

export default AppError;
