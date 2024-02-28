"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteActivity(list) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleDelete(listId: Number) {
    await fetch(`http://localhost:4000/todolist/${listId}`, {
      method: "DELETE",
    });
    router.refresh();
    setModal(false);
  }

  function handleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button type='button' onClick={handleModal}>
        <i className='fa-solid fa-trash me-4'></i>
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleModal}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold py-3'>Are you sure to delete?</h3>

          <div className='modal-action'>
            <button type='button' className='btn' onClick={handleModal}>
              Close
            </button>
            <button
              type='button'
              className='btn btn-error'
              onClick={() => handleDelete(list.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
