import "./styles.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DraftWysiwyg = () => {
  return (
    <div className="editors">
      <Editor
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true }
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>I'am a Draft Editor</h1>
      <DraftWysiwyg />
    </div>
  );
}
