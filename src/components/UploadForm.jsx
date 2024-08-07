"use client"

import axios from "axios"
import UploadIcon from "./UploadIcon"

export default function UploadForm() {
  const upload = async (event) => {
    event.preventDefault()
    const files = event.target.files
    if (files.length > 0) {
      const file = files[0]
      const response = await axios.postForm("/api/upload", {
        file,
      })
      console.log(response.data)
    }
  }
  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-purple-700/50 border-2 cursor-pointer">
      <UploadIcon />
      <span>Choose your file</span>
      <input type="file" className="hidden" onChange={upload} />
    </label>
  )
}
