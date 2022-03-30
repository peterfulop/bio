import ContentHeading from "../Content/content-heading";

export default function AboutMe(props: { content?: string }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"About Me"} />
      <div className="content__about-me">
        <div className="content-text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
