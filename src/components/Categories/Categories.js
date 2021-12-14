import styled from "styled-components";
import { categories } from "../../Fakedata/data";
import CategoryItem from "../CategoryItem/CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
