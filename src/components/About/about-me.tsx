import ContentHeader from "../Biography/Body/Content/biography-body-content-header";

export default function AboutMe(props: { content?: string }) {
  return (
    <div className="content__item mb-4">
      <ContentHeader title={"About Me"} />
      <div className="content__about-me">
        <div className="content-text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
