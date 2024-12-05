function NoteItem({ note, onDeleteNote, onCompleteNote }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNote(note.id)}>❌</button>
          <input
            onChange={onCompleteNote}
            checked={note.completed}
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

export default NoteItem;
