"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function DeleteProducts(product: Product) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(productId) {
    setIsMutating(true);
    await fetch(`http://localhost:5000/products/${productId}`, {
      method: "DELETE",
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
      <button className='btn btn-error' onClick={handleChange}>
        Delete
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold py-3'>
            Are you sure to delete {product.title}?
          </h3>

          <div className='modal-action'>
            <button type='button' className='btn' onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type='button'
                className='btn btn-error'
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            ) : (
              <button type='button' className='btn loading loading-spinner'>
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
