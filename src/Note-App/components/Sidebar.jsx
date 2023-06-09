import React from "react";
import '../styles/notes.css'

export default function Sidebar(props) {
    const NoteElements = props.Notes.map((notes,index) => (
        <div key={notes.id}>
            <div
                className={`title ${notes.id === props.CurrentNote.id && 'selected-note'}`}
                onClick={()=>props.setCurrentNoteID(notes.id)}
            >
                <h4 className="text-snippet">Note {index + 1}</h4>

            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button 
                    className="new-note"
                    onClick={props.NewNote}
                >+</button>
            </div>
            {NoteElements}
        </section>
    )
}