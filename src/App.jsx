import {useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {

  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList
              sortBy={sortBy}
              
            />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;




// const handleAddNote = (newNote) => {
//   dispatch({ type: "addNote", payload: newNote });
//   // setNotes((prevNotes) => [...prevNotes, newNote]);
// };

// const handleDeleteNote = (id) => {
//   dispatch({ type: "deleteNote", payload: id });
//   // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
// };
// const handleCompleteNote = (e) => {
//   const noteId = Number(e.target.value);
//   dispatch({ type: "completeNote", payload: noteId });
//   // const noteId = Number(e.target.value);
//   // setNotes((prevNotes) =>
//   //   prevNotes.map((note) =>
//   //     note.id === noteId ? { ...note, completed: !note.completed } : note
//   //   )
//   // );
// };