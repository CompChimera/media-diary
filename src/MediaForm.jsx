import { useState, useEffect } from "react";

// https://github.com/btholt/citr-v9-project/blob/main/04-hooks/src/Order.jsx
export default function MediaForm() {
  const [mediaType, setMediaType] = useState("audiobook");
  const [mediaTypes, setMediaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMedia, setMedia] = useState([]);


  useEffect(() => {
    fetchMediaTypes();
  }, []);

  async function fetchMediaTypes() {
    try{
    const mediasRes = await fetch("/api/media_types");
    const mediasJson = await mediasRes.json();

    setMediaTypes(mediasJson);
    } catch (e){
      setMediaTypes([]);
      // setLoading();
    }

    setLoading(false);
  }

  async function addMedia() {
    setLoading(true);

    await fetch("/api/media", {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newMedia,
      }),
    });

    setMedia([]);
    setLoading(false);
  }

  async function mediaRoute(e) {
    // const mutation = useMutation({
      // mutationFn: function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formName = formData.get("media-name");
        const formDescription = formData.get("media-description");
        const formType = formData.get("media-type");
        const response = await fetch("/api/media", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name:formName, description: formDescription,type: formType } )
        });
        if(!response.ok){
          throw new Error("Network response was not ok. Halp");
        }
      // }
    // });
  }

  return (
    <div className="media-form bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>What did you start now?</h2>

      <form className="media-card " onSubmit={mediaRoute}>
        <label htmlFor="media-name">Name</label>
        <input required="required" type="text" id="media-name" name="media-name"/>
        <label htmlFor="media-recommended">Recommended By: </label>
        <input type="text" id="media-recommended" name="media-recommended"/>
        <label htmlFor="media-description">Description</label>
        <textarea required="required" type="text" id="media-description" name="media-description"/>
        <label required="required" htmlFor="media-type" name="media-type">Type</label>
        <select onChange={(e) => setMediaType(e.target.value)} 
          name="media-type" 
          id="media-type"
          value={mediaType}>
            {mediaTypes.map((type) => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
        </select>
        <label required="required" htmlFor="media-platform" name="media-platform">Platform</label>
        <select /*onChange={(e) => setMediaType(e.target.value)}*/ 
          name="media-platform" 
          id="media-platform"
         /* value={mediaType}*/>
            {/* {mediaTypes.map((type) => ( */}
              <option key="1" value="audible">Audible</option>
              <option key="2" value="libby">Libby</option>
              <option key="3" value="netflix">Netflix</option>
              <option key="4" value="crunchyroll">CrunchyRoll</option>
              <option key="5" value="disney">Disney Plus</option>
            {/* ))} */}
        </select>
        <input className="btn btn-blue my-5" type="submit" value="Submit"/>
      </form>
    </div>
  );
};

