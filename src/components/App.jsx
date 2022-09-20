import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function insertNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function onDelete(id) {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={insertNote} />
      {notes?.map((specificNote, index) => (
        <Note
          key={index}
          id={index}
          title={specificNote.title}
          content={specificNote.content}
          onDelete={onDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
