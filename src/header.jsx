import { useState, useEffect } from "react";
// console.log("This is another Function.");

export default function StateWise() {
  const [toDo, setToDo] = useState([]);

  const [input, setInput] = useState("");

  //   let name = e.target.value

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    setInput(e.target.value);
  };
  //   console.log(`Input of List: ${input}`);
  const handleSelected = (item) => {
    const toDoVariable = toDo.map((toDoItem) => {
      if (toDoItem.content == item.content) {
        toDoItem.isSelected = !toDoItem.isSelected;
      }
      return toDoItem;
    });
    setToDo(toDoVariable);
    console.log(toDo);
  };

  const addToDo = (e) => {
    // console.log(input);
    e.preventDefault();
    setToDo((prev) => [...prev, { content: input, isSelected: false }]);
    console.log(input);
  };

  const handleDelete = () => {
    const filterArray = toDo.filter((item) => item.isSelected == !true);
    // console.log(filterArray);

    setToDo(filterArray);
  };

  return (
    <>
      <div className="bg-blue-400 h-screen">
        <div className="bg-amber-500 w-full h-32"> </div>
        <div className=" h-[44rem] flex items-start justify-center">
          <div className="bg-white rounded-lg shadow-lg w-96 h-[35rem]">
            {/* <!-- Header --> */}

            <div className="bg-blue-700 text-white text-center py-4 rounded-t-lg">
              <h2 className="text-xl font-semibold">Todo List</h2>
            </div>

            {/* <!-- Input Section --> */}
            <div className="p-5">
              <label className="text-sm text-gray-600">Add a new task</label>
              <div className="flex mt-2 gap-2">
                <input
                  onChange={handleOnChange}
                  type="text"
                  className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 h-10 focus:ring-blue-500"
                  placeholder="Enter task..."
                />
                <button
                  onClick={addToDo}
                  className="bg-blue-700 h-10  text-white p-1 text-xs rounded-md hover:bg-blue-800"
                >
                  Add Todo
                </button>
              </div>
            </div>
            {/* {
                            toDo.map((item) => {
                            
                                return (
                                    <>
                                    <div>

                                    </div>
                                    </>
                                )
                                
                            })
                        } */}

            {toDo.map((item) => (
              <div key={item.content} className=" font-bold pl-7">
                <input
                  onClick={(e) => {
                    handleSelected(item);
                  }}
                  type="checkbox"
                />{" "}
                {item.content}
              </div>
            ))}

            {/* {
                      toDo.map((item) => {console.log(item);
                      })
                    } */}

            <div className="p-5">
              <button
                onClick={handleDelete}
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Delete Selected
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
