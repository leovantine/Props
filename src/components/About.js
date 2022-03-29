import React from "react";
import styled from "styled-components";

const Title2 = styled.h2`
  text-align: center;
  font-size: 30px;
  color: whitesmoke;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  border: double 8px black;
  width: 80vw;
`;

const About = ({ name, age, studying }) => {
  return (
    <Container>
      <Title2>
        My name is {name}, I'm {age} and I'm studying {studying}!{" "}
      </Title2>
    </Container>
  );
};

export default About;
