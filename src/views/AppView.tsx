import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteNotFound from "../components/RouteNotFound";
import TableOfContents from "../components/TableOfContents";
import * as Paths from "../components/paths";
import PageC01S01 from "../markdown/c01_s01.md";
import PageC01S02 from "../markdown/c01_s02.md";
import PageC01S03 from "../markdown/c01_s03.md";
import PageC02S01 from "../markdown/c02_s01.md";
import PageC02S02 from "../markdown/c02_s02.md";
import PageC02S03 from "../markdown/c02_s03.md";

function AppView(): React.ReactElement<any> {
  return (
    <BrowserRouter>
      <section id="app-container">
        <header id="header">
          <span className="title">What the float?</span>
          <span className="subtitle">
            An interactive guide to floating point numbers.
          </span>
        </header>
        <section id="app-body">
          <TableOfContents />
          <section id="page">
            <Switch>
              <Route
                exact
                path={Paths.CHAPTER_01_SECTION_01}
                component={PageC01S01}
              />
              <Route
                exact
                path={Paths.CHAPTER_01_SECTION_02}
                component={PageC01S02}
              />
              <Route
                exact
                path={Paths.CHAPTER_01_SECTION_03}
                component={PageC01S03}
              />

              <Route
                exact
                path={Paths.CHAPTER_02_SECTION_01}
                component={PageC02S01}
              />
              <Route
                exact
                path={Paths.CHAPTER_02_SECTION_02}
                component={PageC02S02}
              />
              <Route
                exact
                path={Paths.CHAPTER_02_SECTION_03}
                component={PageC02S03}
              />
              <Route component={RouteNotFound} />
            </Switch>
          </section>
        </section>
      </section>
    </BrowserRouter>
  );
}

export default AppView;
