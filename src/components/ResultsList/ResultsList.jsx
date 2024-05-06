import React from 'react'
import {
  useLoaderData
} from "react-router-dom";

export default function ResultsList() {

  const data = useLoaderData();

  return (
    <div>{data.items.map((item) => <div key={item.id}>{item.title}</div>)}</div>
  )
}
