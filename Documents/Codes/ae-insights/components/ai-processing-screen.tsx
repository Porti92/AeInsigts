"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Brain, Database, BarChart2, Zap, Search } from "lucide-react"

interface AIProcessingScreenProps {
  companyName: string
  onComplete: () => void
}

export function AIProcessingScreen({ companyName, onComplete }: AIProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const processingSteps = [
    { message: "Fetching company data...", icon: <Database className="h-5 w-5 text-primary-500" /> },
    { message: "Analyzing industry trends...", icon: <BarChart2 className="h-5 w-5 text-accent-blue" /> },
    { message: "Processing market position...", icon: <Search className="h-5 w-5 text-accent-purple" /> },
    { message: "Generating strategic insights...", icon: <Brain className="h-5 w-5 text-accent-teal" /> },
    { message: "Finalizing recommendations...", icon: <Zap className="h-5 w-5 text-primary-600" /> },
  ]

  useEffect(() => {
    // Progress through the steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < processingSteps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 800) // Change message every 800ms

    // Complete after 4 seconds
    const timeout = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete, processingSteps.length])

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary-gradient flex items-center justify-center animate-pulse">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Analyzing {companyName}</h2>
          <p className="text-neutral-600">Our AI is gathering and processing data to generate comprehensive insights</p>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-soft p-6 mb-6">
          <div className="space-y-6">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 
                    ${index <= currentStep ? "bg-primary-100" : "bg-neutral-100"}`}
                >
                  {index < currentStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-3 w-3 bg-primary-500 rounded-full"
                    />
                  ) : index === currentStep ? (
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  ) : (
                    <div className="h-3 w-3 rounded-full bg-neutral-300" />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`text-sm font-medium ${index <= currentStep ? "text-neutral-800" : "text-neutral-400"}`}
                  >
                    {step.message}
                  </div>
                  {index === currentStep && (
                    <div className="h-1 bg-neutral-100 rounded-full mt-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.8,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-neutral-500">
          <p>Preparing your dashboard...</p>
          <motion.div
            className="mt-4 flex justify-center space-x-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <div className="h-2 w-2 bg-primary-500 rounded-full" />
            <div className="h-2 w-2 bg-primary-500 rounded-full" />
            <div className="h-2 w-2 bg-primary-500 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

