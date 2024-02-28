"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddActivity() {
  const [activity, setActivity] = useState("");

  const router = useRouter();

  async function handleChange(e) {
    e.preventDefault();
    await fetch(`http://localhost:4000/todolist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        activity: activity,
      }),
    });
    setActivity("");
    router.refresh();
  }
  return (
    <div className='flex justify-center'>
      <div className='text-center mb-3'>
        <form onSubmit={handleChange} className='flex'>
          <div>
            <input
              type='text'
              placeholder='Type here'
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className='input input-bordered input-accent input-lg max-w-xs'
              required
            />
          </div>
          <div>
            <button className='btn btn-warning btn-lg' type='submit'>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
