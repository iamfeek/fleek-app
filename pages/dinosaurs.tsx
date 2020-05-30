import React from "react";

import { GetStaticProps } from "next";

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

    console.log({
      newIndex,
      s: items.length,
    });
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
      <h1 style={{ fontSize: "30vmin" }}>{items[activeIndex].name}</h1>

      <button onClick={handlePrevious}>Back</button>
      <button onClick={handleNext}>Next</button>
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
