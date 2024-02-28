"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsMutating(true);
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false);
    setTitle("");
    setPrice("");
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={handleChange}>
        add new
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold py-3'>Add new product</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='' className='label font-bold'>
                Title
              </label>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='input w-full input-bordered'
                placeholder='Product Name'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='' className='label font-bold'>
                Price
              </label>
              <input
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='input w-full input-bordered'
                placeholder='Price'
              />
            </div>
            <div className='modal-action'>
              <button type='button' className='btn' onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              ) : (
                <button type='button' className='btn loading loading-spinner'>
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
