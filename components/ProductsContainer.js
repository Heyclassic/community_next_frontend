/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

const API_URL= "http://localhost:3000"

// const ProductLink = props => (
//   <Link href="/product/[id]" as={`/product/${props.id}`}>{props.id}</Link>
// );

export default const ProductsContainer = props => (
  <div>
  { props.products.map((product, i) =>
    <Link href={`/product?name=${product.attributes.name}`}>
      <ProductsCard product={product}
                        key={product[i]}
                        maker={product.attributes.maker.data.attributes.name}
                        comments={product.attributes.comments.length}
                        image={`${API_URL}/product5.jpg`}
                        tags={product.attributes.tags}
                        votes={product.attributes.votes}
                        >
      </ProductsCard>
    </Link>
  )}
</div>
);