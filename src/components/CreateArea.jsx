import React, { useImperativeHandle, useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function clickedAdd(event) {
    event.preventDefault();
    if (data.title === "" && data.content === "") return;
    props.onAdd(data);
    setData({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={data.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
        />
        <button onClick={clickedAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
