// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";


// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         changeOrigin: true,
//       },
//       "/public": {
//         target: "http://localhost:3000",
//         changeOrigin: true,
//       },
//     },
//   },
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  root: 'src',
 server: {

    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite({
    routesDirectory: 'src/routes',
    generatedRouteTree: 'src/routeTree.gen.ts',
  }), react()],
});