
import FileUpload from '@/components/FileUpload.tsx'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold text-sky-600 mb-6">v-cloud uploader</h1>
      <FileUpload />
    </main>
  )
}
