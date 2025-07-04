// components/FileUpload.tsx
'use client';
import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setLoading(false);
    alert(`File uploaded! Embed URL: ${data.embedUrl}`);
  };

  return (
    <div className="p-4 border rounded">
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} disabled={!file || loading} className="ml-2">
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
