import React from 'react';
import { useEffect } from 'react';
import "./Blogs.scss"
import ProjectCategory from '../../Components/ForProjects/ProjectCategory/ProjectCategory';
import gsap from 'gsap/gsap-core';
import {Helmet} from 'react-helmet'
import projectsData from './../../assets/ProjectHelper';
import Heading from "./../../Components/Heading/Heading";
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const Blogs = () => {

    const BLOGS_QUERY = gql`
        query Blogs {
            blogs{
                data{
                    title
                    id
                    cover_image
                    slug
                }
                paginatorInfo {
                    currentPage
                    lastPage
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(BLOGS_QUERY);
    
    console.log(data?.blogs)
    useEffect(()=>{
        var timeline = new gsap.timeline();
        timeline.from('.blogs',0.5,{opacity:0,x:20},'+=0.3')
        timeline.from('.blog',0.5,{opacity:0,scale:0.9,stagger:0.3})


    },[data])
    return (
        <div className="blogsContainer">
            <Heading text="Blogs"></Heading>

            <div className="Projects blogs">
                { 
                    data?.blogs.data.map((e)=>{
                        return <Link to={"/blogs/"+e.slug} key={e.id}>
                        <div className="card blog">
                            <img src={"http://localhost:8000/storage/"+e.cover_image} alt="" />
                            <h3>{e.title}</h3>
                        </div>
                    </Link>
                    })
                }
            </div>
        </div>
    );
}
 
export default Blogs;