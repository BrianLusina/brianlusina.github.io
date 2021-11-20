import { FunctionComponent } from 'react';
import { HeaderProps } from './Header.types';

const Header: FunctionComponent<HeaderProps> = ({ navItems }) => {
  return (
    <header id="header">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Dimension</h1>
          {/* <p><!--[-->A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<!--]--><br />
			<!--[-->for free under the <a href="https://html5up.net/license">Creative Commons</a> license.<!--]--></p> */}
        </div>
      </div>
      <nav>
        <ul>
          {navItems.map(({ title }) => (
            <li key={title}>
              <a href={`#${title}`}>{title}</a>
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
