import { createLazyFileRoute, Link } from "@tanstack/react-router";

import Diary from "../Diary";
import MediaForm from "../MediaForm";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    {/* <div className="index"> */}
      {/* <div className="index-brand"> */}
        <p className="intro">Tracking all those series you've started and would like to finish. </p>
      {/* </div> */}
      <Diary/>
      <div>
      <MediaForm/>
      </div>


    {/* </div> */}
    </>
  );
}