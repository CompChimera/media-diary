import { createLazyFileRoute, Link } from "@tanstack/react-router";

// import Diary from "../Diary";
// import MediaForm from "../MediaForm";

export const Route = createLazyFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  return (
    <>
    {/* <div className="index"> */}
      {/* <div className="index-brand"> */}
        <p className="intro">Tracking all those series you've started and would like to finish. </p>
      {/* </div> */}

      <div>
        <h2>Manage Admin Stuffs</h2>
        <h3>Platforms</h3>
        <h3>Media Types</h3>
        {/* <h3>Platforms</h3>
        <h3>Platforms</h3> */}
      </div>

      


    {/* </div> */}
    </>
  );
}