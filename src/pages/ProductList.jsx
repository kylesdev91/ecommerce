import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <FilterContainer>
        <Title>Hybrids</Title>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
