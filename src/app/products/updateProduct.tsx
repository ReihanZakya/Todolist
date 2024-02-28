"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function UpdateProducts(product: Product) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleUpdate(e) {
    e.preventDefault();
    setIsMutating(true);
    await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false);
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }
  return (
    <div>
      <button className='btn btn-warning' onClick={handleChange}>
        Update
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold py-3'>Update product {product.title}?</h3>
          <form onSubmit={handleUpdate}>
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
                onChange={(e) => setPrice(Number(e.target.value))}
                className='input w-full input-bordered'
                placeholder='Price'
              />
            </div>
            <div className='modal-action'>
              <button type='button' className='btn' onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type='submit' className='btn btn-warning'>
                  Update
                </button>
              ) : (
                <button type='button' className='btn loading loading-spinner'>
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
