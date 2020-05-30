import Layout from "../components/Layout";
import { Grid } from "@material-ui/core";

const IndexPage = () => (
  <Layout title="Home">
    <Grid item xs>
      <h1>Welcome to Fleek</h1>
    </Grid>

    <Grid item xs>
      Select a category
    </Grid>
  </Layout>
);

export default IndexPage;
