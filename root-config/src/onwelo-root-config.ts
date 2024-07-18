import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";
import micro from "./microfrontend-layout.html";

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
