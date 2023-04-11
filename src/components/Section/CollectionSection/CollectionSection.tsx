import { CollectionSectionType } from "../Section.type";

const CollectionSection = ({
  id,
  url,
  title,
  subTitle,
  links,
  svgPath,
  imgPath,
  titleImgPath,
  titleColor,
}: CollectionSectionType) => {
  return (
    <section>
      <>
        <div>
          {titleImgPath ? (
            <div>
              <img src={titleImgPath} alt={title} />
            </div>
          ) : (
            <h2>{title}</h2>
          )}
          <h5>{subTitle}</h5>
          <div>
            {links?.map((link) => (
              <a href={url}>
                {link}
                <img src={svgPath} alt={id} />
              </a>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default CollectionSection;
