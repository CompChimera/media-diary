import { useState } from "react";
import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
            <header id="main-header"><h1><img src="./assets/icons/diary_11040977_flaticon.png" alt="Notebook icon" width="20" height="20"/>Media Diary</h1>
            <ul className="nav">
              <li>
                <Link className="button" to="/new">Add New</Link>
              </li>
              <li>
                <Link className="button" to="/">Dashboard</Link>
              </li>
              <li>
                <Link className="button" to="/admin">Admin</Link>
              </li>
            </ul>
            </header>
            <main id="body-content">
                <Outlet />
            </main>    
            <footer id="main-footer" className="footer">
              <ul className="footer-links">
                <li><a href="#">App Resources</a></li>
                <li><a href="#">More by Britt</a></li>
              </ul>
            </footer>

        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});