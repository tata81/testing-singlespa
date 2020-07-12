import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@testing-singlespa/navbar",
//   app: () => System.import("@testing-singlespa/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
