export default function BiographyHeader(props: {
  name?: string;
  level?: string;
  position?: string;
}) {
  return (
    <div
      id="CvHeader"
      className="d-flex justify-content-between header flex-wrap flex-sm-nowrap mb-3"
    >
      <div className="header-1 px-3 pe-0">
        <h1 id="name-heading" className="my-3">
          {props.name}
        </h1>
        <h3 className="p-2 bg-dark text-white mb-4" id="level-heading">
          {props.level + " " + props.position}
        </h3>
      </div>
      <div
        id="header-icons"
        className="d-flex flex-wrap justify-content-center align-items-center"
      >
        <i id="header-icon" className="fas fa-code"></i>
        <i id="header-icon" className="fas fa-code"></i>
        <i id="header-icon" className="fas fa-code"></i>
        <i id="header-icon" className="fas fa-code"></i>
      </div>
    </div>
  );
}
