import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
import myImage from '../../images/anime.png';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  gap: 100px; /* Gap between columns */
  align-items: center; /* Align content vertically */
  ${media.tablet`grid-template-columns: 0fr 1fr;`};

`;

const StyledImage = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container */
  height:80%;
  transition: transform 1s ease;
  &:hover{
    transform: perspective(300px) scale(0.9); /* Apply a 3D rotation */
  }
`;


const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }

`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 130px;
  line-height: 1.1;
  margin: 0;
  text-shadow: 0px 3px 0px rgba(199, 195, 201, 0.785); /* Add a shadow for depth */
  transition: transform 1s ease;
  &:hover{
    transform: perspective(300px) scale(0.9); /* Apply a 3D rotation */
  }
  ${media.desktop`font-size: 150px;`};
  ${media.tablet`font-size: 80px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 50px;
  line-height: 1.1;
  color: ${colors.green};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`;
const StyledDescription = styled.div`
  margin-top: 0px;
  font-size: 1.5rem;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 25px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>Contact Me</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  
  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
