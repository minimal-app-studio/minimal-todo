import { useState } from 'react';

const Icon = ({ completed }: any) => {
    return (
        <p
            className={`flex justify-center text-center place-items-center rounded-full border-2 border-white-50 w-10 h-10 ${
                completed
                    ? 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-800 via-violet-600 to-rose-300border-2 border-white-50'
                    : ''
            }`}
        >
            {completed && (
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
            )}
        </p>
    );
};

const TodoText = ({ text, completed }: any) => {
    return <p className={`text-slate-100 p-1.5 ${completed ? 'line-through' : ''}`}> {text} </p>;
};

const TodoItem = ({ text }: any) => {
    const [completed, setCompleted] = useState(false);
    const handleClick = () => {
        setCompleted((completed) => !completed);
    };
    return (
        <div
            className="bg-sky-900 font-jose  text-white w-[50%] shadow-lg m-auto rounded-sm p-4 border-b-2 border-gray-400 flex justify-left text-lg cursor-pointer text-center"
            onClick={handleClick}
        >
            <div className="flex gap-x-10">
                <Icon completed={completed} />
                <TodoText text={text} completed={completed} />
            </div>
        </div>
    );
};

export default TodoItem;
