import { Route, Switch } from "wouter";
import Index from "./pages/index";
import WorkPage from "./pages/work";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import NotFoundPage from "./pages/not-found";
import { RouteEffects } from "./components/route-effects";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <RouteEffects />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/work" component={WorkPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
