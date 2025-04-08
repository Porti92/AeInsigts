"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type NotesType = {
  general: string
  strategies: string
  questions: string
  nextSteps: string
}

type SalesNotesContextType = {
  notes: NotesType
  saveNotes: (notes: Partial<NotesType>) => void
  isLoading: boolean
}

const SalesNotesContext = createContext<SalesNotesContextType | undefined>(undefined)

export function useSalesNotes() {
  const context = useContext(SalesNotesContext)
  if (context === undefined) {
    throw new Error("useSalesNotes must be used within a SalesNotesProvider")
  }
  return context
}

export function SalesNotesProvider({ children, companyName }: { children: ReactNode; companyName: string }) {
  const [notes, setNotes] = useState<NotesType>({
    general: "",
    strategies: "",
    questions: "",
    nextSteps: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  // Load notes from localStorage on component mount
  useEffect(() => {
    setIsLoading(true)
    try {
      const savedNotes = localStorage.getItem(`sales-notes-${companyName}`)
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes))
      }
    } catch (error) {
      console.error("Error loading notes:", error)
    } finally {
      setIsLoading(false)
    }
  }, [companyName])

  const saveNotes = (newNotes: Partial<NotesType>) => {
    const updatedNotes = { ...notes, ...newNotes }
    setNotes(updatedNotes)

    // Save to localStorage
    try {
      localStorage.setItem(`sales-notes-${companyName}`, JSON.stringify(updatedNotes))
    } catch (error) {
      console.error("Error saving notes:", error)
    }
  }

  return <SalesNotesContext.Provider value={{ notes, saveNotes, isLoading }}>{children}</SalesNotesContext.Provider>
}

