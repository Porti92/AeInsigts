"use client"

import { useState } from "react"
import { useSalesNotes } from "./sales-notes-context"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { Save, Edit, FileText } from "lucide-react"

interface SalesNotesProps {
  className?: string
}

export function SalesNotes({ className }: SalesNotesProps) {
  const { notes, saveNotes, isLoading } = useSalesNotes()
  const [editMode, setEditMode] = useState<Record<string, boolean>>({
    general: false,
    strategies: false,
    questions: false,
    nextSteps: false,
  })
  const [activeTab, setActiveTab] = useState("general")
  const [formValues, setFormValues] = useState(notes)

  const handleEditToggle = (field: keyof typeof notes) => {
    setEditMode({
      ...editMode,
      [field]: !editMode[field],
    })

    // Reset form values when entering edit mode
    if (!editMode[field]) {
      setFormValues({
        ...formValues,
        [field]: notes[field],
      })
    }
  }

  const handleSave = (field: keyof typeof notes) => {
    saveNotes({ [field]: formValues[field] })
    setEditMode({
      ...editMode,
      [field]: false,
    })
  }

  const handleChange = (field: keyof typeof notes, value: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    })
  }

  if (isLoading) {
    return <div className="p-4 text-center">Loading notes...</div>
  }

  return (
    <EnhancedCard className={className}>
      <EnhancedCardHeader>
        <EnhancedCardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary-500" />
          Sales Notes
        </EnhancedCardTitle>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="general">General Notes</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
            <TabsTrigger value="questions">Key Questions</TabsTrigger>
            <TabsTrigger value="nextSteps">Next Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            {editMode.general ? (
              <>
                <Textarea
                  value={formValues.general}
                  onChange={(e) => handleChange("general", e.target.value)}
                  className="min-h-[150px] resize-y"
                  placeholder="Enter your general notes about this company..."
                />
                <Button onClick={() => handleSave("general")} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Notes
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-neutral-50 min-h-[150px] whitespace-pre-wrap">
                  {notes.general ? notes.general : "No general notes added yet."}
                </div>
                <Button variant="outline" onClick={() => handleEditToggle("general")} className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Notes
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="strategies" className="space-y-4">
            {editMode.strategies ? (
              <>
                <Textarea
                  value={formValues.strategies}
                  onChange={(e) => handleChange("strategies", e.target.value)}
                  className="min-h-[150px] resize-y"
                  placeholder="Enter your sales strategies for this opportunity..."
                />
                <Button onClick={() => handleSave("strategies")} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Strategies
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-neutral-50 min-h-[150px] whitespace-pre-wrap">
                  {notes.strategies ? notes.strategies : "No strategies added yet."}
                </div>
                <Button variant="outline" onClick={() => handleEditToggle("strategies")} className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Strategies
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="questions" className="space-y-4">
            {editMode.questions ? (
              <>
                <Textarea
                  value={formValues.questions}
                  onChange={(e) => handleChange("questions", e.target.value)}
                  className="min-h-[150px] resize-y"
                  placeholder="Enter key discovery questions to ask..."
                />
                <Button onClick={() => handleSave("questions")} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Questions
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-neutral-50 min-h-[150px] whitespace-pre-wrap">
                  {notes.questions ? notes.questions : "No key questions added yet."}
                </div>
                <Button variant="outline" onClick={() => handleEditToggle("questions")} className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Questions
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="nextSteps" className="space-y-4">
            {editMode.nextSteps ? (
              <>
                <Textarea
                  value={formValues.nextSteps}
                  onChange={(e) => handleChange("nextSteps", e.target.value)}
                  className="min-h-[150px] resize-y"
                  placeholder="Enter next steps for this opportunity..."
                />
                <Button onClick={() => handleSave("nextSteps")} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Next Steps
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-neutral-50 min-h-[150px] whitespace-pre-wrap">
                  {notes.nextSteps ? notes.nextSteps : "No next steps added yet."}
                </div>
                <Button variant="outline" onClick={() => handleEditToggle("nextSteps")} className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Next Steps
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </EnhancedCardContent>
    </EnhancedCard>
  )
}

