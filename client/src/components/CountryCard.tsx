import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

type Props = {
  flag: string,
  country: string,
  population: number,
  region: string,
  capital: string
}

const CardContainer = styled.li`
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 8px var(--black10);
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;

  article {
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    p {
      margin: 0.25rem 0;

      span {
        font-weight: 600;
      }
    }
  }
`;

const CountryCard = ({ flag, country, population, region, capital }: Props) => {
  return (
    <Link to={`/country/${country}`}>
      <CardContainer>
        <img src={flag} alt={`Flag of ${country}`} />
        <article>
          <h2>{country}</h2>
          <p><span>Population: </span>{population.toLocaleString()}</p>
          <p><span>Region: </span>{region}</p>
          <p><span>Capital: </span>{capital}</p>
        </article>
      </CardContainer>
    </Link>
  );
}

export default CountryCard