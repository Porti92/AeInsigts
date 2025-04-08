export interface CompanyOverviewData {
  description: string
  keyFacts: string[]
  productsServices: string
}

export interface NewsItem {
  title: string
  date: string
  source?: string
  summary: string
  url: string
}

export interface IndustrySectorData {
  industry: string
  sector: string
  marketPosition: string
  competitors: string[]
}

export interface MilestoneItem {
  date: string
  title: string
  description: string
}

export interface ChallengeItem {
  title: string
  description: string
  severity: "Low" | "Medium" | "High"
}

export interface StrategicNotesData {
  keyObjectives: string[]
  talkingPoints: string[]
  valuePropositions: string[]
  additionalNotes: string
}

export interface CompanyData {
  overview: CompanyOverviewData
  news: NewsItem[]
  industry: IndustrySectorData
  milestones: MilestoneItem[]
  challenges: ChallengeItem[]
  strategicNotes: StrategicNotesData
}

// New types for stage-specific dashboards

export interface BusinessValueMap {
  currentProcesses: string[]
  painPoints: string[]
  revenueOpportunities: string[]
  costReductionOpportunities: string[]
  businessOutcomes: string[]
}

export interface DiscoveryData extends CompanyData {
  businessValueMap: BusinessValueMap
  keyQuestions: string[]
}

export interface TechnologyStack {
  category: string
  technologies: string[]
}

export interface ExecutiveData extends CompanyData {
  executiveSummary: string
  keyStats: {
    label: string
    value: string
  }[]
  techStack: TechnologyStack[]
}

export interface InternalData extends CompanyData {
  dealSummary: string
  stakeholders: {
    name: string
    title: string
    role: string
    influence: "High" | "Medium" | "Low"
  }[]
  proposedApproach: string[]
  riskFactors: string[]
  competitiveLandscape: {
    competitor: string
    strengthsAgainst: string[]
    weaknessesAgainst: string[]
  }[]
}

export type OpportunityStage = "discovery" | "qualification" | "executive" | "internal"

