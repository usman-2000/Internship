import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Blogpost() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <h1>Now showing post number {id}</h1>
    </div>
  );
}
