"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function Dashboard() {
  const [showText, setShowText] = useState();
  const handleClick = () => {
    setShowText("Hello World!!");
  };

  return (
    <div className='m-10'>
      <h1 className='text-4xl mb-10'>Calculator</h1>
      <form action=''>
        <input type='number' />
        <br />
        <br />
        <select name='' id=''>
          <option value=''>+</option>
          <option value=''>-</option>
          <option value=''>:</option>
          <option value=''>x</option>
        </select>
        <br />
        <br />
        <input type='number' />
        <br />
        <br />
        <button
          onClick={handleClick}
          type='button'
          className='bg-cyan-500 p-2 text-white rounded'
        >
          Count
        </button>
        <p className='mt-5'> {showText}</p>
      </form>
    </div>
  );
}
