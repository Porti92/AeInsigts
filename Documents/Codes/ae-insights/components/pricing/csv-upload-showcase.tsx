"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Download, FileSpreadsheet, Search } from "lucide-react"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Sample data for the showcase
const sampleCompanies = [
  {
    id: "1",
    name: "Acme Corporation",
    industry: "Technology",
    size: "Enterprise",
    website: "acme.com",
    status: "Analyzed",
    insights: {
      overview: "Global technology leader specializing in cloud infrastructure and AI solutions.",
      keyMetrics: {
        revenue: "$2.5B",
        employees: "5,000+",
        founded: "2005",
        headquarters: "San Francisco, CA",
      },
      recentNews: ["Launched new AI platform", "Expanded European operations", "Acquired DataTech Inc."],
    },
  },
  {
    id: "2",
    name: "TechSolutions Inc.",
    industry: "Software",
    size: "Mid-Market",
    website: "techsolutions.io",
    status: "Analyzed",
    insights: {
      overview: "B2B software provider focused on automation and workflow optimization.",
      keyMetrics: {
        revenue: "$750M",
        employees: "1,200",
        founded: "2010",
        headquarters: "Austin, TX",
      },
      recentNews: ["Released version 4.0 of flagship product", "Partnered with Microsoft", "Opened new R&D center"],
    },
  },
  {
    id: "3",
    name: "Global Enterprises",
    industry: "Manufacturing",
    size: "Enterprise",
    website: "globalent.com",
    status: "Analyzing",
    insights: null,
  },
  {
    id: "4",
    name: "Innovate Solutions",
    industry: "Consulting",
    size: "SMB",
    website: "innovatesol.com",
    status: "Queued",
    insights: null,
  },
  {
    id: "5",
    name: "NextGen Retail",
    industry: "Retail",
    size: "Mid-Market",
    website: "nextgenretail.com",
    status: "Analyzed",
    insights: {
      overview: "Modern retail chain focusing on sustainable products and digital-first experiences.",
      keyMetrics: {
        revenue: "$450M",
        employees: "3,200",
        founded: "2015",
        headquarters: "Chicago, IL",
      },
      recentNews: [
        "Opened 25 new locations",
        "Launched mobile app with AR features",
        "Implemented sustainable packaging initiative",
      ],
    },
  },
]

export function CsvUploadShowcase() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"table" | "visual">("table")

  const toggleCompanyDetails = (companyId: string) => {
    if (expandedCompany === companyId) {
      setExpandedCompany(null)
    } else {
      setExpandedCompany(companyId)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Analyzed":
        return "bg-green-100 text-green-700 border-green-200"
      case "Analyzing":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Queued":
        return "bg-amber-100 text-amber-700 border-amber-200"
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200"
    }
  }

  return (
    <section className="py-16 bg-neutral-50 border-y">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Bulk Analysis with <span className="gradient-text">CSV Upload</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Premium plan users can upload entire account lists via CSV and get comprehensive insights for all
              companies at once. Analyze up to 100 companies in a single batch.
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-soft p-6 mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-medium">Sample Account List Analysis</h3>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-200 gap-2"
                  onClick={() => {
                    // In a real app, this would download a sample CSV template
                    console.log("Download template")
                  }}
                >
                  <Download className="h-4 w-4" />
                  <span>Download Template</span>
                </Button>
                <div className="bg-neutral-100 rounded-lg p-1 flex">
                  <Button
                    variant={activeTab === "table" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("table")}
                    className={activeTab === "table" ? "bg-white shadow-sm" : ""}
                  >
                    Table View
                  </Button>
                  <Button
                    variant={activeTab === "visual" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("visual")}
                    className={activeTab === "visual" ? "bg-white shadow-sm" : ""}
                  >
                    Visual Report
                  </Button>
                </div>
              </div>
            </div>

            {activeTab === "table" ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600"></th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Company</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Industry</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Size</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Website</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleCompanies.map((company) => (
                      <React.Fragment key={company.id}>
                        <tr className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                          <td className="px-4 py-3 text-neutral-600">
                            <button
                              onClick={() => toggleCompanyDetails(company.id)}
                              className="p-1 rounded-md hover:bg-neutral-100 transition-colors"
                              aria-label={expandedCompany === company.id ? "Collapse details" : "Expand details"}
                              disabled={company.status !== "Analyzed"}
                            >
                              {company.status === "Analyzed" ? (
                                expandedCompany === company.id ? (
                                  <ChevronDown className="h-4 w-4 text-primary-600" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-primary-600" />
                                )
                              ) : (
                                <span className="w-4 h-4 block"></span>
                              )}
                            </button>
                          </td>
                          <td className="px-4 py-3 font-medium">{company.name}</td>
                          <td className="px-4 py-3 text-neutral-600">{company.industry}</td>
                          <td className="px-4 py-3 text-neutral-600">{company.size}</td>
                          <td className="px-4 py-3 text-neutral-600">{company.website}</td>
                          <td className="px-4 py-3">
                            <span
                              className={cn(
                                "px-2.5 py-1 text-xs font-medium rounded-full border",
                                getStatusColor(company.status),
                              )}
                            >
                              {company.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {company.status === "Analyzed" ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-neutral-200 text-primary-600 hover:text-primary-700 hover:bg-primary-50 gap-1"
                                asChild
                              >
                                <Link href={`/dashboard/${company.name}`}>
                                  <Search className="h-3.5 w-3.5" />
                                  <span>View</span>
                                </Link>
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-neutral-200 text-neutral-400 cursor-not-allowed"
                                disabled
                              >
                                <Search className="h-3.5 w-3.5 mr-1" />
                                <span>View</span>
                              </Button>
                            )}
                          </td>
                        </tr>
                        {expandedCompany === company.id && company.insights && (
                          <tr className="bg-neutral-50">
                            <td colSpan={7} className="px-4 py-4">
                              <div className="pl-6 border-l-2 border-primary-300">
                                <h4 className="font-medium mb-2">Company Overview</h4>
                                <p className="text-neutral-600 mb-4">{company.insights.overview}</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h5 className="font-medium text-sm mb-2 text-neutral-500">Key Metrics</h5>
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="bg-white p-3 rounded-lg border border-neutral-200">
                                        <div className="text-xs text-neutral-500">Revenue</div>
                                        <div className="font-medium">{company.insights.keyMetrics.revenue}</div>
                                      </div>
                                      <div className="bg-white p-3 rounded-lg border border-neutral-200">
                                        <div className="text-xs text-neutral-500">Employees</div>
                                        <div className="font-medium">{company.insights.keyMetrics.employees}</div>
                                      </div>
                                      <div className="bg-white p-3 rounded-lg border border-neutral-200">
                                        <div className="text-xs text-neutral-500">Founded</div>
                                        <div className="font-medium">{company.insights.keyMetrics.founded}</div>
                                      </div>
                                      <div className="bg-white p-3 rounded-lg border border-neutral-200">
                                        <div className="text-xs text-neutral-500">Headquarters</div>
                                        <div className="font-medium">{company.insights.keyMetrics.headquarters}</div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-sm mb-2 text-neutral-500">Recent News</h5>
                                    <ul className="space-y-2">
                                      {company.insights.recentNews.map((news, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                          <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                                            {index + 1}
                                          </span>
                                          <span className="text-neutral-600">{news}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="mt-4 flex justify-end">
                                  <Button className="bg-primary-gradient hover:opacity-90 shadow-primary-sm" asChild>
                                    <Link href={`/dashboard/${company.name}`}>View Full Report</Link>
                                  </Button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleCompanies.map((company) => (
                  <EnhancedCard
                    key={company.id}
                    className={cn(
                      "transition-all",
                      company.status === "Analyzed" ? "hover:shadow-soft-lg cursor-pointer" : "opacity-70",
                    )}
                    onClick={() => company.status === "Analyzed" && toggleCompanyDetails(company.id)}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{company.name}</h4>
                        <span
                          className={cn(
                            "px-2 py-0.5 text-xs font-medium rounded-full border",
                            getStatusColor(company.status),
                          )}
                        >
                          {company.status}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Industry:</span>
                          <span className="font-medium">{company.industry}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Size:</span>
                          <span className="font-medium">{company.size}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Website:</span>
                          <span className="font-medium">{company.website}</span>
                        </div>
                      </div>

                      {company.status === "Analyzed" ? (
                        <Button className="w-full bg-primary-gradient hover:opacity-90 shadow-primary-sm" asChild>
                          <Link href={`/dashboard/${company.name}`}>View Full Report</Link>
                        </Button>
                      ) : (
                        <Button className="w-full" disabled>
                          {company.status === "Analyzing" ? "Processing..." : "Queued"}
                        </Button>
                      )}
                    </div>
                  </EnhancedCard>
                ))}
              </div>
            )}
          </div>

          <div className="bg-primary-50 rounded-xl border border-primary-100 p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Unlock Bulk Analysis with Premium</h3>
                <p className="text-neutral-600 mb-4">
                  Upload your entire account list and get comprehensive insights for all companies at once. Save hours
                  of manual research and focus on what matters most - closing deals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span className="text-neutral-600">Upload up to 100 companies per CSV file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span className="text-neutral-600">Get detailed insights for each company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span className="text-neutral-600">Export reports in various formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      ✓
                    </span>
                    <span className="text-neutral-600">Share insights with your team</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Button className="bg-primary-gradient hover:opacity-90 shadow-primary-sm text-lg h-14 px-8" asChild>
                  <Link href="/signup?plan=premium">Get Premium Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

