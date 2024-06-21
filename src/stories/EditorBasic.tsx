import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './Button';

type BasicEditorProps = {
  clickHandle: (text: string) => void;
}

export default function BasicEditor({ clickHandle }: BasicEditorProps) {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: any) => {
    setEditorContent(content);
  };

  const onClick = () => {
    clickHandle(editorContent)
  }

  return (
    <>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
      />
      <div>
        <Button onClick={onClick}>등록</Button>
      </div>
    </>
  );
}

