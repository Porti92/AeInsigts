"use client"

import { useState } from "react"
import { EnhancedHeader } from "@/components/enhanced-header"
import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardHeader,
  EnhancedCardTitle,
  EnhancedCardDescription,
} from "@/components/ui/enhanced-card"
import { CsvUpload } from "@/components/csv-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, Download } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleUpload = (file: File) => {
    setUploadedFile(file)
    // In a real application, you would process the file here
  }

  const handleDownloadTemplate = () => {
    // Create a sample CSV content
    const csvContent =
      "Company Name,Opportunity Stage\nAcme Inc,discovery\nTech Solutions,qualification\nGlobal Enterprises,executive"

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "company_list_template.csv"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <EnhancedHeader />

      <main className="flex-1 py-8">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Bulk Company Upload</h1>
            <p className="text-neutral-600">
              Upload a CSV file with a list of companies to generate insights for multiple accounts at once.
            </p>
          </div>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upload">Upload CSV</TabsTrigger>
              <TabsTrigger value="history">Upload History</TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <EnhancedCard>
                    <EnhancedCardHeader>
                      <EnhancedCardTitle className="flex items-center gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-primary-500" />
                        CSV Upload
                      </EnhancedCardTitle>
                      <EnhancedCardDescription>
                        Upload a CSV file containing a list of companies
                      </EnhancedCardDescription>
                    </EnhancedCardHeader>
                    <EnhancedCardContent>
                      <CsvUpload onUpload={handleUpload} />
                    </EnhancedCardContent>
                  </EnhancedCard>
                </div>

                <div>
                  <EnhancedCard>
                    <EnhancedCardHeader>
                      <EnhancedCardTitle>Resources</EnhancedCardTitle>
                    </EnhancedCardHeader>
                    <EnhancedCardContent>
                      <div className="space-y-4">
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-2 border-neutral-200"
                          onClick={handleDownloadTemplate}
                        >
                          <Download className="h-4 w-4 text-primary-500" />
                          Download Template
                        </Button>

                        <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                          <h4 className="font-medium mb-2">Need Help?</h4>
                          <p className="text-sm text-neutral-600 mb-3">
                            Check our documentation for detailed instructions on CSV formatting and bulk processing.
                          </p>
                          <Link
                            href="/help/csv-upload"
                            className="text-sm text-primary-600 font-medium hover:underline"
                          >
                            View Documentation →
                          </Link>
                        </div>
                      </div>
                    </EnhancedCardContent>
                  </EnhancedCard>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <EnhancedCard>
                <EnhancedCardHeader>
                  <EnhancedCardTitle>Upload History</EnhancedCardTitle>
                  <EnhancedCardDescription>
                    View your previous CSV uploads and their processing status
                  </EnhancedCardDescription>
                </EnhancedCardHeader>
                <EnhancedCardContent>
                  <div className="text-center py-8 text-neutral-500">
                    <p>No upload history available yet.</p>
                    <p className="text-sm mt-1">Your previous uploads will appear here.</p>
                  </div>
                </EnhancedCardContent>
              </EnhancedCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="border-t py-6 bg-neutral-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} AE Insights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

