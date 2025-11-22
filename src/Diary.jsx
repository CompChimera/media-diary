
import { getMedias } from "./Medias";
import Media from "./Media";

const Diary = () => {
const mediaList = getMedias();
// console.log(mediaList);

//   if (true) {
//     return <div>Loading...</div>;
//   }
// function filter(mediaType) {

// }


  return (
    <div className="diary">
      <h2 className="diary-title">Diary Contents</h2>
      <button></button>
      <div className="filters">
        <button onClick="filter('audiobook')">Audiobooks</button>
        <button onClick="filter('book')">Books</button>
        <button onClick="filter('show')">Shows</button>
        <button onClick="filter('movie')">Movies</button>
      </div>
      
        {/* {mediaList} */}
        {/* <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.type}</p>
        <p>Platform: {props.platform}</p>
        <div style={{fontWeight: "bold"}}>Repititions: {props.count}</div> */}
    <ul className="card-wrapper" style={{listStyle: 'none'}}>
        {mediaList ? (
            mediaList.map((item)=> (
            <li className="bg-white  shadow-md  mb-4" key={item.id}>
                <Media id={item.id} name={item.name} description={item.description} type={item.media_type_id} status={item.inprogress} platform={item.platform_id} />
            </li>
            ))
        ) : (
            <h3>You're caught up!</h3>
        )
    }
{/*         
        <Media name="Empire of Storms" description="By SJM" type="Audiobook" status="inprogress" platform="Audible"/>
          <Media name="JJK" description="Shounen delights" type="Anime"  status="inprogress" platform="Crunchyroll"/>
          <Media name="I don't need therapy (and other lies I tell myself)" description="By Toni" type="Audiobook"  status="inprogress" platform="Libby"/>
          <Media name="Touch of Darkness" description="Hades x Perse" type="Audiobook"  status="complete" count="2" platform="Audible"/> */}
        </ul>
  
    </div>
  );
};

export default Diary;