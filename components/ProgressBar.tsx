
'use client'
export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 h-4 rounded overflow-hidden">
      <div
        className="bg-sky-500 h-4 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}
