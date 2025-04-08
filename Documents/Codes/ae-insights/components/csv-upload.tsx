"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CsvUploadProps {
  onUpload: (file: File) => void
  className?: string
}

export function CsvUpload({ onUpload, className }: CsvUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    handleFile(droppedFile)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setError(null)
    setSuccess(false)

    // Check if file is CSV
    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      setError("Please upload a CSV file")
      return
    }

    setFile(file)
    setSuccess(true)
    onUpload(file)
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all",
          isDragging ? "border-primary-400 bg-primary-50" : "border-neutral-200 hover:border-primary-300",
          error ? "border-red-300 bg-red-50" : "",
          success ? "border-green-300 bg-green-50" : "",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleFileInput} />

        <div className="flex flex-col items-center justify-center gap-3">
          {error ? (
            <>
              <AlertCircle className="h-10 w-10 text-red-500" />
              <p className="text-red-600 font-medium">{error}</p>
              <p className="text-neutral-500">Please try again with a CSV file</p>
            </>
          ) : success && file ? (
            <>
              <CheckCircle2 className="h-10 w-10 text-green-500" />
              <p className="text-green-600 font-medium">File uploaded successfully!</p>
              <p className="text-neutral-500">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            </>
          ) : (
            <>
              <Upload className="h-10 w-10 text-primary-500" />
              <p className="text-lg font-medium">Drag and drop your CSV file here</p>
              <p className="text-neutral-500">or click to browse files</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-neutral-500">
                <FileText className="h-4 w-4" />
                <span>CSV format required</span>
              </div>
            </>
          )}
        </div>
      </div>

      {success && file && (
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-primary-gradient hover:opacity-90 shadow-primary-sm"
            onClick={() => {
              // Handle processing the file
              console.log("Processing file:", file)
            }}
          >
            Process Companies
          </Button>
        </div>
      )}

      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">CSV Format Requirements:</h4>
        <ul className="text-sm text-neutral-600 list-disc pl-5 space-y-1">
          <li>First column should contain company names</li>
          <li>Optional second column can include opportunity stage</li>
          <li>Maximum 100 companies per file</li>
          <li>UTF-8 encoding recommended</li>
        </ul>
      </div>
    </div>
  )
}

