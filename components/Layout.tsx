import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Grid } from "@material-ui/core";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        width: 100vw;
      }
    `}</style>
    <Head>
      <title>{title} | Fleek App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid container spacing={2} direction="column" justify="space-between">
      <Grid item xs>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |{" "}
            <Link href="/dinosaurs">
              <a>Dinosaurs</a>
            </Link>{" "}
          </nav>
        </header>
      </Grid>
      {children}
    </Grid>
  </div>
);

export default Layout;
