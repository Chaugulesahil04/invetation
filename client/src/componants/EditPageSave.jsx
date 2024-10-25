import React from "react";

export default function EditPageSave({ handleDownload }) {
  return (
    <div>
      <button id="saveButton" onClick={handleDownload}>
        Save
      </button>
    </div>
  );
}
