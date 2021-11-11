import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #e4bda1;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #e4bda1 !important;
  }
`;

export const StyledText = styled.p`
  font-family: Montserrat, sans-serif;
  letter-spacing: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #181818;
  margin: 0.1em 0;
`;

export const StyledSpanText = styled.span`
  font-family: Montserrat, sans-serif;
  letter-spacing: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #181818;
`;

export const StyledH1 = styled.h1`
  font-family: Montserrat, sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
`;

export const AnchorLink = styled.a`
  color: white;
  :hover & {
    color: #e4bda1;
  }
  /* TODO: Set darker color when in active state */
  :active {
    color: #e4bda1;
  }
`;

export const SmallText = styled.p`
  width: 135px;
  height: 15px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

interface HrProps {
  color: string;
  // FIXME: Add other styles
  borderStyle?: 'solid' | 'dashed';
}

export const StyledHr = styled.hr<HrProps>`
  height: 1px;
  margin: 2em 0;
  border: ${(props) => props.borderStyle || 'solid'} 1px ${(props) => props.color};
`;