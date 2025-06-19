import { styled } from 'styled-components';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

type Props = {
  isDark: boolean;
  toggleTheme: () => void;
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  box-shadow: 0 2px 8px var(--black10);
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
`;

const Slogan = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

const Header = ({ isDark, toggleTheme }: Props) => {
  return (
    <StyledHeader data-testid='header'>
      <Slogan>Where in the world?</Slogan>
      <ThemeToggle onClick={toggleTheme}>
        {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </ThemeToggle>
    </StyledHeader>
  );
};

export default Header;
