import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from "@fortawesome/free-solid-svg-icons";

/**
 * @constant {Object} HeadphoneIcon - Store component FontAwesomeIcon with props icon, which is referenced to imported faHeadphones.
 * @constant {String} radius - Store radius for styling elements.
 * @constant {Array} slides - Store array of objects, each object contain following properties title, subtitle, img.
 */
const HeadphoneIcon = <FontAwesomeIcon icon={faHeadphones} />
const radius = '0.5rem';
const slides = [
  {
    title: 'The Weeknd',
    subtitle: "In your eyes",
    img: "https://pbs.twimg.com/profile_images/3371244893/2a8652370d05f17a6251cd371024b83f.png"
  },
  {
    title: '50 Cent',
    subtitle: "Candy shop",
    img: "https://m.media-amazon.com/images/I/61SrLheri2L._AA256_.jpg"
  },
  {
    title: 'Beyonce',
    subtitle: "Drunk in Love",
    img: "https://vzvuke.net/style/performers/3ae5dabea04cba4ce60fa41dfaf36eec_large.jpg"
  }
]

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 280px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 72px;
  width: 72px;
  height: 72px;
  font-size: 2rem;
  border-radius: ${radius} 0 0 ${radius};
  background: #7823fd;
  color: white;
`;

const Content = styled.div`
  position: relative;
  flex: 1 0 auto;
  border-radius: 0 ${radius} ${radius} 0;
  background: white;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(
    -${p => p.activeIndex === 0 ? 0 : p.activeIndex * 100}%
  );
  transition: transform ease-out 0.45s;
`;
const Slide = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 0 1rem 0 0;
`;

const SlideContent = styled.div`
  padding-left: 1rem;
  height: inherit;
  display: inherit;
  flex-direction: column;
  align-items: inherit;
  justify-content: center;
`;
const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;
const StyledSubtitle = styled.div`
  font-size: 10px;
  opacity: 0.5;
`;

const SlideTitle = (props) => <StyledTitle>{props.title}</StyledTitle>
const SlideSubtitle = (props) => <StyledSubtitle>{props.subtitle}</StyledSubtitle>
const Image = (props) => <StyledImg src={props.slide.img} atl={props.slide.title} />

/**
 * @function {Function} VerticalCarousel - Stateless component. Renders UI for vertical carousel
 */
const VerticalCarousel = () => {
  // destructuring assignment 
  const [activeIndex, setActiveIndex] = useState(0);
  // react hook
  useEffect(() => {
    const interval = setInterval(() => {
      if(activeIndex === slides.length - 1){
        setActiveIndex(0);
      }else{
        setActiveIndex(activeIndex + 1);
      }
    }, 3600);
    return () => clearInterval(interval);
  }, [setActiveIndex, activeIndex]);

  return (
    <Wrapper>
      <Icon>{HeadphoneIcon}</Icon>
      <Content>
        <Slider activeIndex={activeIndex}>
          {slides.map((slide,i) => (
            <Slide index={i} key={i.toString()}>
              <SlideContent>
                <SlideTitle title={slide.title} />
                <SlideSubtitle subtitle={slide.subtitle} />
              </SlideContent>
              <Image slide={slide} />
            </Slide>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  )
}
export default VerticalCarousel;
