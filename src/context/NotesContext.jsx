import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function noteReducer(state, { type, payload }) {
  switch (type) {
    case "addNote":
      return [...state, payload];

    case "deleteNote":
      return state.filter((s) => s.id !== payload);

    case "completeNote":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    default:
      throw new Error("unKnown Error"+type)
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
