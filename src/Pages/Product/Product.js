import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import { mobile } from "../../Responsive/Responsive";
import Navbar from "../Shared/Navbar/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding:"10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 60vh;
  ${mobile({ width: "60%", height:"70%" })}
`;
const InfoContainer = styled.div`
  flex: 1;

  padding: 0px 50px;
  ${mobile({ padding:"10px" })}
`;
const Title = styled.h1`
  font-weight: 200px;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 50;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%", margin:"10px 0px" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 100;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 3px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 12px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%",  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;

  &:hover: {
    background-color: red;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="https://www.transparentpng.com/thumb/boxing-gloves/twins-boxing-glove-download-png-image-61FpRz.png" />
        </ImgContainer>

        <InfoContainer>
          <Title>Twins Boxing Glove</Title>
          <Description>
            The new activewear range from ASOS offers high-quality gear whatever
            your workout. Whether you're gaining or training, ASOS 4505 has the
            very best performance kit, cut to keep you cool, dry and fly.
            Reflecting your personal style to ensure your playtime has
            personality, this is our movement for movement.
          </Description>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="yellow" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
