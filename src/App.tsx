import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route>
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#060a14" }}>
          <h1 className="text-2xl font-bold text-white">Page non trouvée</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;