import styled from "styled-components";
import { Children, useMemo, useState } from "react";
import { CarouselType, ContainerStyleType } from "./Carousel.Type";

const Carousel = ({
  children,
  visibleItemsCount = 1, // how many items to show
  isInfinite, // is it an infinite loop?
  withIndicator, // show dots?
}: CarouselType) => {
  const [timeoutInProgress, setTimeoutInProgress] = useState(false); // a boolean for if timeout is im progress, used to stop user from spam clicking next or back in certain conditions
  /**
   * Total item
   */
  const originalItemsLength = useMemo(
    () => Children.count(children),
    [children]
  );
  /**
   * Is the carousel repeating it's item
   */
  const isRepeating = useMemo(
    () => isInfinite && Children.count(children) > visibleItemsCount,
    [children, isInfinite, visibleItemsCount]
  );
  /**
   * Current Index Item of the Carousel
   */
  const [currentIndex, setCurrentIndex] = useState(
    isRepeating ? visibleItemsCount : 0
  );

  /**
   * Is the carousel's transition enabled
   */
  const [isTransitionEnabled, setTransitionEnabled] = useState(true);
  /**
   * Handle when carousel transition's ended
   */
  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(originalItemsLength);
      } else if (currentIndex === originalItemsLength + visibleItemsCount) {
        setTransitionEnabled(false);
        setCurrentIndex(visibleItemsCount);
      }
    }

    setTimeoutInProgress(false);
  };

  /**
   * Render previous items before the first item
   */
  const extraPreviousItems = useMemo(() => {
    let output = [];
    for (let index = 0; index < visibleItemsCount; index++) {
      output.push(Children.toArray(children)[originalItemsLength - 1 - index]);
    }
    output.reverse();
    console.log("output", output);
    return output;
  }, [children, originalItemsLength, visibleItemsCount]);

  /**
   * Render next items after the last item
   */
  const extraNextItems = useMemo(() => {
    let output = [];
    for (let index = 0; index < visibleItemsCount; index++) {
      output.push(Children.toArray(children)[index]);
    }
    return output;
  }, [children, visibleItemsCount]);

  return (
    <>
      <ContainerStyle visibleItemsCount={visibleItemsCount}>
        <div className="carousel-wrapper">
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleItemsCount)
                }%)`,
                transition: !isTransitionEnabled ? "none" : undefined,
              }}
              onTransitionEnd={() => handleTransitionEnd()}
            >
              {isRepeating && extraPreviousItems}
              {children}
              {isRepeating && extraNextItems}
            </div>
          </div>
        </div>
      </ContainerStyle>
    </>
  );
};

export default Carousel;

const ContainerStyle = styled.div<ContainerStyleType>`
  min-height: 706px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none;
    /* hide scrollbar in IE and Edge */
    scrollbar-width: none;
    /* hide scrollbar in Firefox */
  }

  /* hide scrollbar in webkit browser */

  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    flex-shrink: 0;
    flex-grow: 1;
    width: ${({ visibleItemsCount }) => `calc(100% / ${visibleItemsCount})`};
  }
`;

// const CaroselStyle = styled.div`
//   margin: 0 auto;
//   width: 1250px;
//   position: relative;
// `;

// const CarouselInner = styled.div`
//   white-space: nowrap;

//   transition: ease 1s;
// `;
