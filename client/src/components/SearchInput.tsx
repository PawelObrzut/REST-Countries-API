import { IoSearchSharp } from "react-icons/io5";
import { styled } from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 3rem;
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  border-radius: .5rem;
  box-shadow: 0 2px 8px var(--black10);
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

const SearchIcon = styled(IoSearchSharp)`
  color: ${({ theme }) => theme.placeholder};
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 1.25rem;
`

type Props = {
  handleInputChange: (e) => void,
  inputValue: string
}

const SearchInput = ({handleInputChange, inputValue}: Props) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <StyledInput 
        type="text" 
        placeholder="Search for a country..." 
        onChange={handleInputChange} 
        value={inputValue} 
      />
    </SearchContainer>
  )
}

export default SearchInput