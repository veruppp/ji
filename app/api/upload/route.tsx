
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import mime from 'mime'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const ext = mime.getExtension(file.type) || 'bin'
  const slug = Math.random().toString(36).substring(2, 8)
  const filename = `${Date.now()}-${slug}.${ext}`
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const filePath = path.join(uploadDir, filename)

  await writeFile(filePath, buffer)

  const url = `/uploads/${filename}`

  await prisma.file.create({
    data: {
      filename,
      mimetype: file.type,
      slug,
      url,
    }
  })

  return NextResponse.json({ success: true, slug, url })
}
