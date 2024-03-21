"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
interface DataInterface{
  name: string,
  blogDetails:string
}
const Blog = () => {
  const {id} = useParams();
  const [datas, setDatas]= useState<DataInterface>({name:"", blogDetails:""})
  useEffect(()=>{
  data();
  },[id])
  const data = useCallback(async()=>{
    const result =await  axios.get(`/api/blog/${id}`);
    const data =await result.data;
    setDatas({...datas,...data?.data});
    return data;
  },[])
  return (
    <Wrapper>
        <h1 >{datas.name}</h1>
        <div className='blogdetails'>{datas.blogDetails}</div>
        
    </Wrapper>
  )
}

export default Blog;

const Wrapper = styled.div`
  h1{
    text-align:center;
    margin-top:30px;
  }
  .blogdetails{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
  }
`