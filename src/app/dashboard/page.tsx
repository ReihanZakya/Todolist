import AddActivity from "./addActivity";
import DeleteActivity from "./deleteActivity";
import UpdateActivity from "./updateActivity";

async function getList() {
  const res = await fetch(`http://localhost:4000/todolist`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function dashboard() {
  const list = await getList();

  return (
    <main>
      <div>
        <h1 className='text-5xl flex font-bold text-center m-10 justify-center'>
          To Do List
        </h1>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-4'>
          <AddActivity />
          {list.map((list, index) => (
            <div className='mt-3 flex border-dashed border-2 border-warning rounded-md gap-3'>
              <h1 className='text-center m-auto w-3/4 p-3'>{list.activity}</h1>
              <div className='my-auto gap-4 flex'>
                <DeleteActivity {...list} />
              </div>
              <div className='my-auto me-4 gap-4 flex'>
                <UpdateActivity {...list} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
