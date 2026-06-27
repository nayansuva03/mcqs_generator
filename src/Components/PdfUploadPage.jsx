import { useState } from "react";

function PdfUploadPage({ onGenerate }) {
  const [file, setfile] = useState(null);

  function handelFile() {
    console.log('button clicked');
    
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a PDF");
      return;
    }
    onGenerate(file);
  }
  return (
    <>
      <div className="bg-blue-500 h-screen w-full flex flex-col gap-5 justify-center items-center">
        <div className="bg-amber-100 border-dashed border-4 border-gray-500 h-70 w-140 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl">Drag and Drop your PDF📄 here</h1>
          <h2 className="text-2xl">---OR---</h2>
          <input
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
            type="file"
            accept=".pdf"
            className="cursor-pointer text-2xl m-2 p-2 px-4 border-2 bg-white rounded-lg"
          />
          <button
            onClick={handelFile}
            className="text-3xl cursor-pointer m-2 p-2 px-4 bg-blue-500 rounded-lg"
          >
            Generate MCQs 📋
          </button>
        </div>
      </div>
    </>
  );
}

export default PdfUploadPage;
