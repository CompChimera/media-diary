
const Media = (props) => {
  let icon = '';
  switch(props.type){
    case 2:
      icon = '📖';
      break;
    case 1:
      icon = '🔊📖';
      break;
    case 3:
      icon = '🐼';
      break;
    case 4:
      icon = 'Show';
      break;
    case 5:
      icon = '🎥';
      break;
  }
  let statusText = 'Not Started';
  switch(props.status){
    case 0: 
      statusText = "Not Started";
      break;
    case 1: 
      statusText = "In-Progress";
      break;
    case 2: 
      statusText = "Completed";
      break;
  }

  //TODO update this to use a proper utiity to get the platform info
  let platform = '';
  switch(props.platform){
    case 1: 
      platform = "Audible";
      break;
    case 2: 
      platform = "Libby";
      break;
    case 3: 
      platform = "Netflix";
      break;
    case 4: 
      platform = "CrunchyRoll";
      break;
    case 5: 
      platform = "Amazon / Kindle";
      break;
  }
  return (
    <div className="media-card">
        <div  style={{fontSize: "35px"}}>{icon}</div>

        <h2>{props.name}</h2>
        {(props.platform > 0) ?
          <p>Platform: {platform}</p>

          : ''
        }

        <p>{props.description}</p>
        <br/>
        <div >Status: {statusText}</div>
        <div >ID: {props.id}</div>
        <div style={{fontWeight: "bold"}}>Repititions: {props.count}</div>
        <a href="#" className="media-edit"><img src="./assets/icons/pencil.png" width="20" height="20"/></a>
    </div>
  );
};

export default Media;