import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


const CountryContainer = styled.article`
  margin: 3rem auto;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 950px) {
    grid-template-columns: 2fr 1fr 1fr;
  }

  img {
    width: 100%;
    max-height: 400px;
    margin: 0 auto;
    object-fit: contain;
  }
`;

const Flag = styled.img`
  @media screen and (min-width: 950px) {
    grid-column: 1;
    grid-row: 1 / span 3;
  }
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  @media screen and (min-width: 950px) {
    padding-top: 2rem;
    grid-column: 2 / span 2;
  }
`;

const PrimaryDetails = styled.section`
  @media screen and (min-width: 950px) {
    grid-column: 2;
  }
`;

const SecondaryDetails = styled.section`
  @media screen and (min-width: 950px) {
    grid-column: 3;
  }
`;

const Neighbours = styled.section`
  @media screen and (min-width: 950px) {
    grid-column: 2 / span 2;
  }
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
    align-items: center;
`;

const NeighbourButton = styled.button`
  border-radius: .25rem;
  padding: .5rem .75rem;
  background-color: ${({theme}) => theme.elementBg};
  color: ${({theme}) => theme.text};
  box-shadow: 0 2px 8px var(--black10);
`

type Props = {
  flag: string,
  name: string,
  nativeName: string,
  population: number,
  region: string,
  subRegion: string,
  capital: string,
  domain: string[],
  currencies: string[],
  languages: string[],
  neighbours: string[]
}

const CountryArticle = ({ flag, name, nativeName, population, region, subRegion, capital, domain, currencies, languages, neighbours }: Props) => {
  return (
    <CountryContainer>
      <Flag src={flag} alt={`Flag of ${name}`} />
      <Name>{name}</Name>
      <PrimaryDetails>
        <p><strong>Native Name:</strong> {nativeName}</p>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Sub Region:</strong> {subRegion}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </PrimaryDetails>
      <SecondaryDetails>
        <p><strong>Top Level Domain:</strong> {domain.join(' | ')}</p>
        <p><strong>Currencies:</strong> {currencies.join(', ')}</p>
        <p><strong>Languages:</strong> {languages.join(', ')}</p>
      </SecondaryDetails>
      <Neighbours>
        <strong>Border Countries: </strong>
        {
          neighbours.map((neighbour) => (
            <Link to={`/country/${neighbour}`}>
              <NeighbourButton key={neighbour}>{neighbour}</NeighbourButton>
            </Link>
          ))
        }
      </Neighbours>
    </CountryContainer>
  )
}

export default CountryArticle