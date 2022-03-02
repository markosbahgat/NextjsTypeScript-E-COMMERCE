import { GetStaticProps, GetStaticPaths } from "next";
import { axios } from "utils";
import { IProduct } from 'models';

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get<IProduct[]>('/products');
    return {
        paths: [
            { params: {  }}
        ],
        fallback: 
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}
    };
}