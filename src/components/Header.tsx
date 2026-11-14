import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Banner = styled.header`
  padding: 1.5rem; 
  color: white; 
  background: linear-gradient(135deg,#667eea,#764ba2);
  h1 { text-align: center; }
  nav { display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; }
  a { color: white; text-decoration: none; }
`;

export default function Header() {
  return (
    <Banner>
      <h1>Ajou Campus Foodmap</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Banner>
  );
}
