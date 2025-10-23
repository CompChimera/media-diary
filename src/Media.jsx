
const Media = (props) => {
  return (
    <div className="media-card">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.type}</p>
        <p>Platform: {props.platform}</p>
        <div style={{fontWeight: "bold"}}>Repititions: {props.count}</div>
    </div>
  );
};

export default Media;