import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function EmbedPage({ params }: { params: { slug: string } }) {
  const file = await prisma.file.findUnique({ where: { slug: params.slug } })
  if (!file) return notFound()

  const { mimetype, url } = file

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center p-8">
      <div>
        {mimetype.startsWith('image') && (
          <img src={url} alt="uploaded file" className="max-w-full max-h-[80vh]" />
        )}
        {mimetype.startsWith('video') && (
          <video src={url} controls className="max-w-full max-h-[80vh]" />
        )}
        {mimetype.startsWith('audio') && (
          <audio src={url} controls />
        )}
        <p className="text-sm mt-4 text-gray-500">Direct link: <a href={url} className="text-sky-600 underline">{url}</a></p>
      </div>
    </div>
  )
}
