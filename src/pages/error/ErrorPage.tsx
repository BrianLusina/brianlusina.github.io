import MainLayout from '@layouts/MainLayout';
import { FunctionComponent } from 'react';
import { ErrorPageContainer, ErrorPageTitle, ErrorPageText } from './styles';
import { ErrorPageProps } from './ErrorPage.interface';

const ErrorPage: FunctionComponent<ErrorPageProps> = ({
  title = 'Oops! Well, this is embarassing...',
  message = 'Something terrible went wrong and we regret that you had to experience this! <b /> We are working to fix this.',
}: ErrorPageProps) => {
  return (
    <MainLayout>
      <ErrorPageContainer>
        <ErrorPageTitle>{title}</ErrorPageTitle>
        <ErrorPageText>{message}</ErrorPageText>
      </ErrorPageContainer>
    </MainLayout>
  );
};

export default ErrorPage;