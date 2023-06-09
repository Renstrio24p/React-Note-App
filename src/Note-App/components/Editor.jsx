import React from "react";
import MDEditor from "@uiw/react-md-editor";
import Showdown from "showdown";
import { Join } from "../../assets/util/JoinClasses";

export default function Editor ({CurrentNote,UpdateNote}) {
    const [SelectedTab,setSelectedTab] = React.useState('write')
    const converter = new Showdown.Converter({
        tables:true,
        simplifiedAutoLink:true,
        strikethrough: true,
        tasklists: true
    })

    return (
        <section className="pane editor">
            <MDEditor
                value={CurrentNote.body}
                onChange={UpdateNote}
                selectedTab={SelectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                height={900}
                
            />
        </section>
    )
}