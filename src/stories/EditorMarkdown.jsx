import React, { useState } from "react";
import MDEditor, { commands } from '@uiw/react-md-editor';

const italic = {
  name: 'italic',
  keyCommand: 'italic',
  render: (command, disabled, executeCommand) => {
    return (
      <button
        aria-label="Insert italic"
        disabled={disabled}
        onClick={() => {
          executeCommand(command, command.groupName)
        }}
      >
        <svg data-name="italic" width="12" height="12" role="img" viewBox="0 0 320 512">
          <path fill="currentColor" d="M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"></path>
        </svg>
      </button>
    )
  },
  execute: (state, api) => {
    let modifyText = `*${state.selectedText}*\n`;
    if (!state.selectedText) {
      modifyText = `*${state.selectedText}*`;
      setTimeout(() => { api.textArea.setSelectionRange(1, 1) }, 100)
    }
    api.replaceSelection(modifyText);
  },
}

const code = {
  name: 'code',
  keyCommand: 'code',
  render: (command, disabled, executeCommand) => {
    return (
      <button
        aria-label="Insert code"
        disabled={disabled}
        onClick={() => {
          executeCommand(command, command.groupName)
        }}
      >
        <svg width="14" height="14" role="img" viewBox="0 0 640 512">
          <path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
        </svg>
      </button>
    )
  },
  execute: (state, api) => {
    let modifyText = `\`${state.selectedText}\`\n`;
    if (!state.selectedText) {
      modifyText = `\`${state.selectedText}\``;
      setTimeout(() => { api.textArea.setSelectionRange(1, 1) }, 100)
    }
    api.replaceSelection(modifyText);
  },
}

const subject = {
  name: 'subject',
  keyCommand: 'subject',
  render: (command, disabled, executeCommand) => {
    return (
      <button
        aria-label="Insert code"
        disabled={disabled}
        onClick={() => {
          executeCommand(command, command.groupName)
        }}
      >
        <svg width="14" height="14" role="img" viewBox="0 0 640 512">
          <path fill="currentColor" d="M520,95.75 L520,225.75 C520,364.908906 457.127578,437.050625 325.040469,472.443125 C309.577578,476.586875 294.396016,464.889922 294.396016,448.881641 L294.396016,414.457031 C294.396016,404.242891 300.721328,395.025078 310.328125,391.554687 C377.356328,367.342187 414.375,349.711094 414.375,274.5 L341.25,274.5 C314.325781,274.5 292.5,252.674219 292.5,225.75 L292.5,95.75 C292.5,68.8257812 314.325781,47 341.25,47 L471.25,47 C498.174219,47 520,68.8257812 520,95.75 Z M178.75,47 L48.75,47 C21.8257813,47 0,68.8257812 0,95.75 L0,225.75 C0,252.674219 21.8257813,274.5 48.75,274.5 L121.875,274.5 C121.875,349.711094 84.8563281,367.342187 17.828125,391.554687 C8.22132813,395.025078 1.89601563,404.242891 1.89601563,414.457031 L1.89601563,448.881641 C1.89601563,464.889922 17.0775781,476.586875 32.5404687,472.443125 C164.627578,437.050625 227.5,364.908906 227.5,225.75 L227.5,95.75 C227.5,68.8257812 205.674219,47 178.75,47 Z"></path>        </svg>
      </button>
    )
  },
  execute: (state, api) => {
    let modifyText = `>${state.selectedText}`;
    if (!state.selectedText) {
      modifyText = `>${state.selectedText}`;
      setTimeout(() => { api.textArea.setSelectionRange(1, 1) }, 100)
    }
    api.replaceSelection(modifyText);
  },
}




export default function MarkDown({ handleChange }) {

  const [value, setValue] = useState('');

  const onChange = (content) => {
    setValue(content)
    handleChange(content);
  }
  return (
    <div className="container" style={{ height: '100%' }}>
      <MDEditor
        value={value}
        onChange={onChange}
        commands={[
          // Custom Toolbars
          italic, code, subject,
          commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
            name: 'title',
            groupName: 'title',
            buttonProps: { 'aria-label': 'Insert title' }
          }),
          commands.divider,
        ]}
      />
    </div>
  );
}