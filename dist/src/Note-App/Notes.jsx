import React from "react";
import { nanoid } from "nanoid";
import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

export default function Notes(){

    
    // UseStates
    
    const [Notes,setNotes] = React.useState([])
    const [CurrentNoteID,setCurrentNoteID] = React.useState(
        (Notes[0] && Notes[0].id) || '')
        
        // Create Notes
    React.useEffect(()=> {
        document.title = 'Note App'
    })

    function CreateNewNotes() {
        const NewNote = {
            id: nanoid(),
            body: '# Type your markdown notes',
        }
        setNotes(prevNotes => [NewNote, ...prevNotes])
        setCurrentNoteID(NewNote.id)
    }

    function UpdateNotes(text){
        setNotes(oldNotes => oldNotes.map(oldNotes => {
            return oldNotes.id === CurrentNoteID
            ? { ...oldNotes, body: text}
            : oldNotes
        }))
    }

    // Find Current Notes

    function FindCurrentNotes(){
        return Notes.find(Notes => {
            return Notes.id === CurrentNoteID
        }) || Notes[0]
    }

    return (
        <main>
            {
                Notes.length > 0 
                ?
                <Split
                    sizes={[30,70]}
                    direction="horizontal"
                    className="split"
                >
                    <Sidebar 
                        Notes={Notes}
                        CurrentNote={FindCurrentNotes()}
                        setCurrentNoteID={setCurrentNoteID}
                        NewNote={CreateNewNotes}
                    />
                    {
                        CurrentNoteID &&
                        Notes.length > 0 &&
                        <Editor
                            CurrentNote={FindCurrentNotes()}
                            UpdateNote={UpdateNotes}
                        />
                    }
                    
                </Split>
                :

                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button 
                        className="first-note"
                        onClick={CreateNewNotes} 
                    >
                        Create One Now
                    </button>

                </div>
            }
        </main>
     )
}