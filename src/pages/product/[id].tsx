import React from 'react'
import { GetStaticProps, GetStaticPaths } from "next";
import { axios } from "utils";
import { IProduct } from 'models';

interface Props {
    product:IProduct
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get<IProduct[]>('/products');
    const data = response.data;
    const paths =  data.map(item => {
        return {params : {id : item.id.toString()}}
    })
    return {
        paths,
        fallback:false 
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    const res = await axios.get("/products/" + id);
    const data = await res.data;
    return {
        props: {product: data}
    };
}


const ProductData: React.FC<Props> = ({product}) => {
  return (
      <div>
          Sample for tesst
      </div>
  )
}
export default ProductData