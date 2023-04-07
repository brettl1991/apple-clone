import { heroSectionType } from "../Section.type";

const HeroSection = ({
  id,
  url,
  title,
  subTitle,
  linkFirst,
  linkSecond,
  svgPath,
  imgPath,
  titleImgPath,
}: heroSectionType) => {
  return (
    <section>
      <div>
        <div>
          <a href={url}></a>
          <div>
            {titleImgPath ? (
              <>
                <h4>
                  <img src={titleImgPath} alt={id} />
                </h4>
                <h3>{subTitle}</h3>
              </>
            ) : (
              <>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
              </>
            )}
          </div>
          <div>
            <a href={linkFirst}>
              <img src={svgPath} alt={id} />
            </a>
            <a href={linkSecond}>
              <img src={svgPath} alt={id} />
            </a>
          </div>
        </div>
        <figure>
          <img src={imgPath} alt={title} />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
