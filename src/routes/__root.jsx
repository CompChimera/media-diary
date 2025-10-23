import { useState } from "react";
import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
            <header id="main-header"><h1><img src="./assets/icons/diary_11040977_flaticon.png" alt="Notebook icon" width="20" height="20"/>Media Diary</h1></header>
            <ul className="nav">
              <li>
                <Link className="button" to="/">Add New</Link>
              </li>
              <li>
                <Link className="button" to="/admin">Admin</Link>
              </li>
            </ul>
            <main id="body-content">
                <Outlet />
            </main>    

        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});