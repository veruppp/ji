
'use client'
import { useState } from 'react'
import axios from 'axios'
import ProgressBar from './ProgressBar'

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [embedUrl, setEmbedUrl] = useState('')

  const handleUpload = async () => {
    if (!file) return
    const form = new FormData()
    form.append('file', file)

    const res = await axios.post('/api/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (e) => {
        if (e.total) {
          const percent = Math.round((e.loaded * 100) / e.total)
          setProgress(percent)
        }
      }
    })

    const { slug } = res.data
    setEmbedUrl(\`\${window.location.origin}/e/\${slug}\`)
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null)
          setProgress(0)
          setEmbedUrl('')
        }}
      />
      <button
        onClick={handleUpload}
        className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
      >
        Upload
      </button>
      <ProgressBar value={progress} />
      {embedUrl && (
        <div className="mt-4">
          <p className="text-green-700">Upload success! Embed link:</p>
          <input
            type="text"
            readOnly
            value={embedUrl}
            className="border p-2 w-full"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
        </div>
      )}
    </div>
  )
}
