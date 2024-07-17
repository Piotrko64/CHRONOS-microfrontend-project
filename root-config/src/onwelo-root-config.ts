import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";
import micro from "./microfrontend-layout.html";
// registerApplication(
//     "@onwelo/events-list",
//     //@ts-ignore
//     () => System.import("@onwelo/events-list"),
//     // The function below is the "activity function", which must be provided
//     (location) => location.pathname.startsWith("/events-list")
// );

// registerApplication(
//     "add-event",
//     //@ts-ignore
//     () => System.import("add-event"),
//     // The function below is the "activity function", which must be provided
//     (location) => location.pathname.startsWith("/add-event")
// );

// registerApplication(
//     "@onwelo/home-page",
//     //@ts-ignore
//     () => System.import("@onwelo/home-page"),
//     // The function below is the "activity function", which must be provided
//     (location) => location.pathname.startsWith("/home")
// );

const routes = constructRoutes(micro);
const applications = constructApplications({
    routes,
    loadApp({ name }) {
        return System.import(name);
    },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

layoutEngine.activate();
start({
    urlRerouteOnly: true,
});
function loadWithoutAmd(name) {
    return Promise.resolve().then(() => {
        let globalDefine = (window as any).define;
        delete (window as any).define;
        return System.import(name).then((module) => {
            (window as any).define = globalDefine;
            return module;
        });
    });
}
