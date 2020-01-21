import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import ProductsCard from '../../components/ProductsCard';
import { Grid, Container } from '@material-ui/core'
import CardXL from '../../components/ProductsCardXL'
const API_URL = "http://localhost:3000"

const ProductPage = props => {
   return (
   <Layout>
      <CardXL
        product={props.product}
        maker={props.product.attributes.maker.data.attributes}
        tags={props.product.attributes.tags}
        key={props.product.id}
        votes={props.product.attributes.votes}
      />
    </Layout>
   )
};

ProductPage.getInitialProps = async function(context) {
  const PRODUCT_URL = `${API_URL}/products/${context.query.id}`
  const response = await fetch(PRODUCT_URL);
  const data = await response.json();
  const product = data.data;
  return { product }
}

export default ProductPage;