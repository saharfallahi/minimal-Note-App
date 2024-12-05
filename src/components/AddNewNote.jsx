import { useEffect, useRef, useState } from "react";

function AddNewNote({ onAddNote,notes }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const inputRef = useRef(null);  

  useEffect(() => {  
    if (inputRef.current) {  
      inputRef.current.focus();  
    }  
  }, [notes]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return null;
    const newNote = {
      id: Date.now(),
      title,
      desc,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    // console.log(newNote);
    onAddNote(newNote);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note title"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
