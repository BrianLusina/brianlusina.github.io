import { FunctionComponent } from 'react';
import { HeaderProps } from './Header.types';

const Header: FunctionComponent<HeaderProps> = ({ title, description, navItems }) => {
  return (
    <header id="header">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <nav>
        <ul>
          {navItems.map(({ title: navTitle }) => (
            <li key={navTitle}>
              <a href={`#${navTitle}`}>{navTitle}</a>
            </li>
          ))}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
