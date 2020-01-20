import React from 'react';
import Layout from '../components/Layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SpotlightCard from '../components/SpotlightCard';
// import ProductsContainer from '../components/ProductsContainer';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import ProductsCard from '../components/ProductsCard';
import axios from 'axios';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const API_URL= "http://localhost:3000"

const Index = props => (
    <div className="App">
      <Layout>
        <SpotlightCard></SpotlightCard>
        <Grid container spacing={1}>
          <Grid item lg="7" sm="12" xs="12">
            <Typography className="products" variant="h4">Latest Products</Typography>
            {/* { props.products.map((product, i) =>
                  <ProductsCard product={product}
                                    key={product[i]}
                                    maker={product.attributes.maker.data.attributes.name}
                                    comments={product.attributes.comments.length}
                                    image={`${API_URL}/product5.jpg`}
                                    tags={product.attributes.tags}
                                    votes={product.attributes.votes}
                                    >
                  </ProductsCard>
              )} */}
          </Grid>
          <Grid item lg="4" sm="12" xs="12" className="news-grid" >
            <Typography className="news" variant="h4">News</Typography>
            <NewsCard></NewsCard>
          </Grid>
        </Grid>
      </Layout>
    </div>
);

  Index.getInitialProps = async function() {
    await axios.get(API_URL)
      .then(response => {
        console.log(response);
        return { products: response };
      })
      .catch(error => { console.log(error);});
  };

export default Index;
