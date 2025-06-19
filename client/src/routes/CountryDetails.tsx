import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoIosArrowRoundBack } from "react-icons/io";

const GoBackButton = styled.button`
  display: flex;
  gap: .5rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 8px var(--black10);
`;

const DetailsWrapper = styled.div`
  margin: 4rem 2rem;
`;

const CountryContainer = styled.article`
  margin-top: 3rem;
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
`;

const CountryDetails = () => {
  const { name } = useParams();

  const mockData = {
    flag: "https://flagcdn.com/be.svg",
    name: "Belgium",
    "native name": "Belgie",
    population: 11319511,
    region: "Europe",
    "sub region": "Western Europe",
    capital: "Brussels",
    "top lavel domain": ".be",
    currencies: ["Euro"],
    languages: ["Dutch", "French", "German"],
    "border countries": ["France", "Germany", "Netherlands"]
  };

  return (
    <main>
      <DetailsWrapper>
        <Link to='/'>
          <GoBackButton>
            <IoIosArrowRoundBack size='2rem' /> Go Back
          </GoBackButton>
        </Link>

        <CountryContainer>
          <Flag src={mockData.flag} alt={`Flag of ${mockData.name}`} />
          <Name>{mockData.name}</Name>
          <PrimaryDetails>
            <p><strong>Native Name:</strong> {mockData['native name']}</p>
            <p><strong>Population:</strong> {mockData.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {mockData.region}</p>
            <p><strong>Sub Region:</strong> {mockData['sub region']}</p>
            <p><strong>Capital:</strong> {mockData.capital}</p>
          </PrimaryDetails>
          <SecondaryDetails>
            <p><strong>Top Level Domain:</strong> {mockData['top lavel domain']}</p>
            <p><strong>Currencies:</strong> {mockData.currencies.join(', ')}</p>
            <p><strong>Languages:</strong> {mockData.languages.join(', ')}</p>
          </SecondaryDetails>
          <Neighbours>
            <p><strong>Border Countries:</strong></p>
            <div>{mockData['border countries']}</div>
          </Neighbours>
        </CountryContainer>
      </DetailsWrapper>
    </main>
  );
};

export default CountryDetails;
