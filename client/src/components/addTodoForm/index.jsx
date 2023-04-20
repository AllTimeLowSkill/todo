import { useDispatch } from "react-redux";
import { createTodo } from "../../store/slices/todo";
import { useForm } from "react-hook-form";

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddTask = (data) => {
    dispatch(createTodo({ title: data.title, desc: data.desc }));
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddTask)}
      className="px-[28px] py-[18px] rounded-[12px] border-solid border-2 border-slate-800"
    >
      <label>
        <input
          placeholder="Title"
          type="text"
          {...register("title", {
            required: "Required input!",
          })}
          className="w-full px-[14px] py-[8px] border-2 border-solid border-slate-800 text-slate-800 rounded-[12px] block"
        />
        {errors?.title && (
          <p className="text-sm text-red-500 font-semibold">
            {errors?.title?.message || "Error!"}
          </p>
        )}
      </label>

      <textarea
        placeholder="Desctiption"
        {...register("desc")}
        className="w-full px-[14px] py-[8px] border-2 border-solid border-slate-800 text-slate-800 rounded-[12px] block my-[28px]"
        rows="10"
      />
      <input
        type="submit"
        className="bg-sky-500 rounded-[12px] hover:bg-sky-600 px-[16px] py-[8px] text-white duration-150"
      />
    </form>
  );
};

export default AddTodoForm;
