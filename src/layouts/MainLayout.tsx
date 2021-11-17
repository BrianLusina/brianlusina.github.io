import { FunctionComponent } from 'react';
import '@scss/main.scss';

const MainLayout: FunctionComponent = ({ children }) => <div id="main">{children}</div>;

export default MainLayout;
