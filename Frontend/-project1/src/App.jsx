import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from'axios'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const[imageURL,setimageURL]=useState('')
  const handleUpload=async()=>{
    const formData=new FormData()
    formData.append('profilepic',file)
    const res=await axios.post('http://localhost:3000/api/upload',formData)
    setimageURL(
      `http://localhost:3000/uploads/${res.data.filename}`
    )
  }

  return (
    <>
    <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
    <button onClick={handleUpload}>Upload</button>
    {
      imageURL && <img src={imageURL}/>
    }
    </>
  )
}

export default App
