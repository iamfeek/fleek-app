import React from "react";

import { GetStaticProps } from "next";
import { Button, Grid } from "@material-ui/core";

import { Dinosaur } from "../interfaces/dinosaur";
import { dinosaurs } from "../utils/dinosaurs-data";
import Layout from "../components/Layout";

type Props = {
  items: Dinosaur[];
};

const WithStaticProps = ({ items }: Props) => {
  const [activeIndex, setIndex] = React.useState(0);

  const handleNext = () => {
    const newIndex = activeIndex + 1;

    if (newIndex <= items.length - 1) {
      setIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex - 1;

    if (newIndex > -1) setIndex(activeIndex - 1);
  };

  return (
    <Layout title="Dinosaurs">
      <Grid item xs>
        <h1 style={{ fontSize: "20vmin" }}>{items[activeIndex].name}</h1>
      </Grid>

      <Grid
        item
        xs
        container
        justify="space-between"
        alignItems="flex-end"
        direction="row"
      >
        <Grid item>
          <Button onClick={handlePrevious}>Back</Button>
        </Grid>

        <Grid item>
          <Button onClick={handleNext}>Next</Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Dinosaur[] = dinosaurs;
  return { props: { items } };
};

export default WithStaticProps;
