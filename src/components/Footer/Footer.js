import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContent = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Center = styled.div`
  flex: 1;

  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 80%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP</Logo>
        <Description>
          Myntra is one of the unique online shopping sites in India where
          fashion is accessible to all. Check out our new arrivals to view the
          latest designer clothing, footwear and accessories in the market.{" "}
        </Description>

        <SocialContent>
          <SocialIcon color="#4361ee">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#dc2f02">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#4cc9f0">
            <Twitter />
          </SocialIcon>
        </SocialContent>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Mans Item</ListItem>
          <ListItem>Womens Item</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Information</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> University Road, Kunming, China
        </ContactItem>
        <ContactItem>
          <Phone /> +8613085375070
        </ContactItem>
        <ContactItem>
          <MailOutline /> choyondas08@gmail.com
        </ContactItem>

        <Payment src="https://i.dlpng.com/static/png/7095793_preview.png" />
      </Right>
    </Container>
  );
};

export default Footer;