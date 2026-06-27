import { useState, useEffect } from 'react'
import PdfUploadPage from './Components/PdfUploadPage'
import Loading from './Components/Loading'
import Download from './Components/Download'
import { extracteFromPdf } from './utils/extractText'
import { generateMCQs } from './utils/generateMCQs'

function App() {

  const [page, setpage] = useState('upload');
  const [pdfText, setpdfText] = useState('');
  const [Mcq, setMcq] = useState([]);

  async function handelGenerate(file) {
    setpage('loading')
    const text = await extracteFromPdf(file)
    setpdfText(text)
    const questions = await generateMCQs(text)
    setMcq(questions)
    console.log(questions);
    setpage('download')
  }

  return (
    <>
    {page == 'upload' && <PdfUploadPage onGenerate={handelGenerate} />}
      {page == 'loading' && <Loading />}
      {page == 'download' && <Download mcqs={Mcq} />}
    </>
  )
}

export default App
