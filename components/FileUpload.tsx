// components/FileUpload.tsx
'use client';

import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [link, setLink] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setLink(data?.embedUrl || '');
    setUploading(false);
  };

  return (
    <div className="p-4 rounded-xl border border-blue-200 w-full max-w-md bg-white shadow-md">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {link && (
        <div className="mt-4">
          <p className="text-sm">Embed Link:</p>
          <input
            type="text"
            value={link}
            readOnly
            className="border w-full px-2 py-1 rounded"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
        </div>
      )}
    </div>
  );
}
