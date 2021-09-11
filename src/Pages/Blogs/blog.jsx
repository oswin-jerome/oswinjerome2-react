import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import "./blog.scss";
import {Helmet} from 'react-helmet'

const Blog = () => {
    const {slug} = useParams();
    const BLOGS_QUERY = gql`
    query Blogs($slug:String!) {
        blog(slug: $slug){
            
            title
            id
            cover_image
            slug
            data
            
        }
    }
`;

const { loading, error, data } = useQuery(BLOGS_QUERY,{
    variables: { slug },
  });
console.log(data)
    return ( 
        <div className="blogHolder">
            <Helmet>
                <title>{data?.blog.title}</title>
            </Helmet>
            {/* <img style={{width:"100vw"}} src={"http://localhost:8000/storage/"+data?.blog?.cover_image} alt="" /> */}

            {
                <div dangerouslySetInnerHTML ={{ __html: data?.blog.data}}>

                </div>
            }
        </div> 
    );
}
 
export default Blog;