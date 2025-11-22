import { createLazyFileRoute, Link } from "@tanstack/react-router";

import Diary from "../Diary";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    {/* <div className="index"> */}
      {/* <div className="index-brand"> */}
      {/* </div> */}
      <h2>Dashboard</h2>
      <p className="intro">Tracking all those series you've started and would like to finish. </p>

      <Diary/>
    {/* </div> */}
    </>
  );
}