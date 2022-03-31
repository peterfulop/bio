import "./biography-header.css";

export default function BiographyHeader(props: {
  name?: string;
  level?: string;
  position?: string;
}) {
  return (
    <div className="biography__header">
      <div className="biography__header_personal">
        <h1>{props.name}</h1>
        <h3>{props.level + " " + props.position}</h3>
      </div>
      <div className="biography__header_avatar">
        <img id="avatar-img" src="../logo192.png" alt="avatar" />
      </div>
    </div>
  );
}
