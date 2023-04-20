import { useState } from "react";
import Button from "../button";
import InputControl from "../input";
import { useDispatch } from "react-redux";
import { compliteTodo, deleteTodo, updateTodo } from "../../store/slices/todo";

const Todo = ({ title, id, desc, complite, createdAt }) => {
  const dispatch = useDispatch();

  const [isComplite, setIsComplete] = useState(complite);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [isDetails, setIsDetails] = useState(false);

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id, data: { title: newTitle, desc: newDesc } }));
    setIsUpdate(false);
    setIsDetails(false);
  };

  const handleCompliteTodo = () => {
    dispatch(compliteTodo({ id, complete: !isComplite }));
    setIsComplete(!isComplite);
  };

  return (
    <section className="border-solid border-slate-800 border-2 rounded-[12px]">
      <span className="mt-[12px] ml-[18px]">
        {new Date(Date.parse(createdAt)).toLocaleDateString()}
      </span>
      <section
        className={`flex justify-between items-center px-[18px] py-[14px] rounded-[12px] mt-[18px] ${
          isComplite ? "bg-green-500" : "bg-slate-800 "
        }`}
      >
        <div>
          <input
            type="checkbox"
            checked={isComplite}
            onChange={() => handleCompliteTodo()}
          />
          <span
            onClick={() => setIsDetails(!isDetails)}
            className="text-white cursor-pointer ml-[28px]"
          >
            {isDetails ? "Hide details" : "Show details"}
          </span>
        </div>
        <div className="flex">
          {!isUpdate ? (
            <span className="text-white text-lg font-semibold ml-[12px]">
              {title}
            </span>
          ) : (
            <>
              <InputControl
                name="title"
                value={newTitle}
                onChange={setNewTitle}
              />
              <Button title="OK" onClick={() => handleUpdateTodo()} />
            </>
          )}
        </div>

        <div>
          <Button onClick={() => setIsUpdate(!isUpdate)} title="Update" />
          <Button
            onClick={() => dispatch(deleteTodo({ id }))}
            title="Delete"
            accent={true}
          />
        </div>
      </section>
      {isDetails ? (
        <section className="min-h-[150px] my-[8px] p-[28px] rounded-[10px] border-solid border-2 border-slate-800">
          {isUpdate ? (
            <InputControl
              type="textarea"
              value={newDesc}
              onChange={setNewDesc}
              placeholder="Description task"
            />
          ) : (
            <div>
              {desc.length !== 0 ? <p>{desc}</p> : <span>No description</span>}
            </div>
          )}
        </section>
      ) : null}
    </section>
  );
};

export default Todo;
