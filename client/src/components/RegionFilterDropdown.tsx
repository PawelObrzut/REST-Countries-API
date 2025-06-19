import { useState } from 'react';
import { styled } from 'styled-components';
import { IoChevronDown } from "react-icons/io5";

const RegionFilterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
`;

const RegionFilter = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;

  border-radius: 0.5rem;
  box-shadow: 0 2px 8px var(--black10);
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};

  cursor: pointer;
`;

const ChevronIcon = styled(IoChevronDown) <{ open: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0)'};
`;

const DropdownContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px var(--black10);
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.elementBg};
`;

const RegionButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bodyBg};
    box-shadow: 0 2px 8px var(--black10);§
  }
`;

type Props = {
  setRegion: React.Dispatch<React.SetStateAction<string>>
}

const RegionFilterDropdown = ({ setRegion }: Props) => {
  const [open, setOpen] = useState(false);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleRegionChange = (region: string) => {
    setRegion(region);
    setOpen(false);
  }

  return (
    <RegionFilterWrapper>
      <RegionFilter 
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls='region-dropdown'
        aria-haspopup='menu'
      >
        Filter by Region
        <ChevronIcon open={open} />
      </RegionFilter>

      {open && (
        <DropdownContainer 
          open={open} 
          role='menu' 
          id='region-dropdown'
        >
          {regions.map(region => (
            <RegionButton 
              key={region}
              role='menuItem'
              onClick={() => handleRegionChange(region)} 
            >
              {region}
            </RegionButton>
          ))}
        </DropdownContainer>
      )}
    </RegionFilterWrapper>
  );
};

export default RegionFilterDropdown;
