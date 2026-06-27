import jspdf from 'jspdf'

function Download({mcqs}) {

    function handleDownload(){
const doc = new jspdf;
let y = 20;

doc.setFontSize(18)
    doc.text('MCQ Questions', 10, y)
    y += 10

    mcqs.forEach((mcq, index) => {
      // check if we need a new page
      if (y > 260) {
        doc.addPage()
        y = 20
      }

      // question
      doc.setFontSize(13)
      const questionLines = doc.splitTextToSize(`${index + 1}. ${mcq.question}`, 180)
      doc.text(questionLines, 10, y)
      y += questionLines.length * 7

      // options
      doc.setFontSize(11)
      mcq.options.forEach(option => {
        const optionLines = doc.splitTextToSize(`   ${option}`, 180)
        doc.text(optionLines, 10, y)
        y += optionLines.length * 6
      })

      // answer
      doc.setFontSize(11)
      doc.setTextColor(0, 128, 0)  // green color
      doc.text(`   Answer: ${mcq.answer}`, 10, y)
      doc.setTextColor(0, 0, 0)    // reset to black
      y += 10
    })

    doc.save('mcqs.pdf')
    }
    return ( 
    <>
    <div className="bg-blue-500 h-screen w-full flex flex-col gap-5 justify-center items-center">
            <div className="bg-cyan-400 rounded-2xl h-70 w-140 flex  flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl">Your MCQ PDF is ready to Download</h1>
            <button onClick={handleDownload} className="text-3xl m-2 p-2 px-4 bg-cyan-500 rounded-lg">⬇️ Download</button>
        </div>
        </div>
    </> );
}

export default Download;