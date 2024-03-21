"use client";
import { fetchProducts } from "@/redux/Action";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.fetchProducts?.product);
  console.log(state,"State-------------------")
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <div className="headerSection">
          <div className="flex justify-center">
            <Button onClick={() => router.push("/createblog")}>
              {" "}
              Create Blog
            </Button>
          </div>
        </div>
        <div className="cardsection">
        {state.map((value: any) => (
            <div className="card">
              <h2>{value?.name}</h2>
              <p>{value?.blogDetails}</p>
              <Link href={`/blog/${value?._id}`} className="text-primary">Full blog</Link>
            </div>
        ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .headerSection {
  }

  .cardsection {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
  }
  .card {
    width: 300px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
  }
  .card h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .card p {
    font-size: 16px;
    color: #555;
  }
  .card .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .card .button:hover {
    background-color: #45a049;
  }
`;
