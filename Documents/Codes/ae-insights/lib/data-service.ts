import type { CompanyData, DiscoveryData, ExecutiveData, InternalData } from "./types"
import type { OpportunityStage } from "@/components/opportunity-stage-selector"

// This is a placeholder service that will be replaced with OpenAI API calls
export async function getCompanyData(
  companyName: string,
  stage: OpportunityStage = "qualification",
): Promise<CompanyData | DiscoveryData | ExecutiveData | InternalData | null> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In the future, this will call the OpenAI API with a prompt like:
  // "Generate sales-focused insights for {companyName} at the {stage} stage including company overview,
  // latest news, industry information, milestones, challenges, and strategic notes for discovery calls."

  // Base company data that's used across all dashboard types
  const baseData = {
    overview: {
      description: `${companyName} is a leading technology company specializing in innovative solutions for enterprise customers. They focus on digital transformation, cloud services, and AI-driven analytics to help businesses optimize operations and drive growth.`,
      keyFacts: [
        "Founded in 2010",
        "Headquartered in San Francisco, CA",
        "Over 5,000 employees globally",
        "Public company (NASDAQ: DEMO)",
      ],
      productsServices: `${companyName} offers a comprehensive suite of products and services including cloud infrastructure, data analytics platforms, AI solutions, and digital transformation consulting services tailored to various industries.`,
    },
    news: [
      {
        title: `${companyName} Announces New AI-Powered Analytics Platform`,
        date: "2023-11-15",
        source: "TechCrunch",
        summary: `${companyName} unveiled its latest AI-powered analytics platform designed to help enterprises extract actionable insights from their data more efficiently.`,
        url: "https://example.com/news/1",
      },
      {
        title: `${companyName} Expands European Operations with New Office in Berlin`,
        date: "2023-10-22",
        source: "Business Insider",
        summary: `${companyName} announced the opening of a new office in Berlin as part of its European expansion strategy, creating over 200 new jobs.`,
        url: "https://example.com/news/2",
      },
      {
        title: `${companyName} Partners with Global Retailer for Digital Transformation Initiative`,
        date: "2023-09-18",
        source: "Forbes",
        summary: `${companyName} has signed a multi-year agreement with a leading global retailer to drive their digital transformation initiatives across 24 countries.`,
        url: "https://example.com/news/3",
      },
    ],
    industry: {
      industry: "Information Technology",
      sector: "Enterprise Software & Services",
      marketPosition: "Market Leader in Enterprise AI Solutions",
      competitors: ["Microsoft", "IBM", "Oracle", "Salesforce", "SAP"],
    },
    milestones: [
      {
        date: "2023-09",
        title: "Reached 1 Million Active Users",
        description: `${companyName}'s flagship platform surpassed 1 million active users, marking a significant milestone in the company's growth.`,
      },
      {
        date: "2023-06",
        title: "Acquisition of DataTech Inc.",
        description: `${companyName} acquired DataTech Inc. for $500M to enhance its data processing capabilities and expand its market reach.`,
      },
      {
        date: "2023-03",
        title: "Launch of Next-Gen Cloud Platform",
        description: `${companyName} launched its next-generation cloud platform with enhanced security features and improved performance metrics.`,
      },
      {
        date: "2022-11",
        title: "Strategic Partnership with AWS",
        description: `${companyName} formed a strategic partnership with Amazon Web Services to deliver integrated cloud solutions to enterprise customers.`,
      },
    ],
    challenges: [
      {
        title: "Increasing Competition",
        description:
          "Facing growing competition from both established players and new entrants in the enterprise AI space.",
        severity: "Medium",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Navigating complex regulatory requirements across different regions, particularly regarding data privacy and AI ethics.",
        severity: "High",
      },
      {
        title: "Talent Acquisition",
        description:
          "Challenges in recruiting and retaining top AI and machine learning talent in a competitive market.",
        severity: "Medium",
      },
      {
        title: "Integration Complexity",
        description:
          "Customers report challenges integrating their solutions with legacy systems, leading to longer implementation timelines.",
        severity: "Low",
      },
    ],
    strategicNotes: {
      keyObjectives: [
        "Understand their current digital transformation initiatives",
        "Identify pain points in their existing analytics infrastructure",
        "Determine decision-making process and key stakeholders",
        "Assess budget cycle and timing for new technology investments",
        "Explore potential use cases for our solution in their environment",
      ],
      talkingPoints: [
        "Recent industry trends affecting their business model",
        "Their experience with AI and machine learning implementations",
        "Current challenges with data integration and analytics",
        "ROI expectations for technology investments",
        "Their 12-18 month technology roadmap",
      ],
      valuePropositions: [
        "30% reduction in data processing time with our AI-powered platform",
        "Seamless integration with existing enterprise systems",
        "Enhanced security features exceeding industry standards",
        "Dedicated customer success team with industry expertise",
        "Flexible deployment options (cloud, on-premise, hybrid)",
      ],
      additionalNotes: `${companyName} recently restructured their IT department following the appointment of a new CIO. They are reportedly evaluating all technology vendors as part of a broader digital transformation initiative. Their fiscal year ends in March, suggesting budget decisions for new projects will likely be made in Q1.`,
    },
  }

  // Return different data based on the stage
  switch (stage) {
    case "discovery": {
      const discoveryData: DiscoveryData = {
        ...baseData,
        businessValueMap: {
          currentProcesses: [
            "Manual data processing requiring significant human resources",
            "Legacy systems with limited integration capabilities",
            "Weekly reporting cycles with delayed insights",
            "Multiple vendor solutions creating data silos",
            "Time-intensive analytics workflows",
          ],
          painPoints: [
            "Slow time-to-insight affecting business decisions",
            "Data quality issues due to manual processing",
            "Difficulty scaling analytics capabilities",
            "Limited real-time visibility into operations",
            "High operational costs for data management",
          ],
          revenueOpportunities: [
            "Faster market response through real-time analytics",
            "Improved customer experience leading to higher retention",
            "New product opportunities through better customer insights",
            "Cross-selling opportunities identified through AI",
            "Expanded market reach through more efficient operations",
          ],
          costReductionOpportunities: [
            "Automation of data processing workflows",
            "Consolidated vendor landscape",
            "Reduced IT infrastructure costs through cloud migration",
            "Lower operational overhead through self-service analytics",
            "Decreased time spent on manual reporting",
          ],
          businessOutcomes: [
            "15-20% increase in operational efficiency",
            "30% faster time-to-insight for business decisions",
            "25% reduction in data management costs",
            "Improved data-driven culture across the organization",
            "Enhanced ability to respond to market changes",
          ],
        },
        keyQuestions: [
          "What are your current processes for data collection and analysis?",
          "What specific business challenges are you trying to solve with better analytics?",
          "How do you measure success for your digital transformation initiatives?",
          "Who are the key stakeholders involved in technology decisions?",
          "What's your timeline for implementing new solutions?",
          "How do your current tools and systems integrate with each other?",
          "What security and compliance requirements must any solution meet?",
          "What's your budget approval process for technology investments?",
        ],
        strategicNotes: {
          ...baseData.strategicNotes,
          keyObjectives: [
            "Understand their current business challenges",
            "Map their existing processes and identify inefficiencies",
            "Quantify potential business value of our solution",
            "Identify key decision makers and influencers",
            "Determine if there's a fit between their needs and our solutions",
          ],
          talkingPoints: [
            "Current pain points and business challenges",
            "Process inefficiencies and their impact on business outcomes",
            "Potential ROI from process improvements",
            "Decision-making process and timeline",
            "Budget considerations and constraints",
          ],
        },
      }
      return discoveryData
    }

    case "qualification": {
      // Return the base data for qualification
      return baseData
    }

    case "executive": {
      const executiveData: ExecutiveData = {
        ...baseData,
        executiveSummary: `${companyName} is a market leader in enterprise AI solutions with significant growth potential. Their recent expansion into European markets and strategic partnership with AWS positions them well in the competitive landscape. The company faces challenges in regulatory compliance and talent acquisition but maintains strong technological advantages over competitors. Their customer base includes Fortune 500 companies, and they've shown consistent revenue growth over the past 3 years. The recently appointed CIO is leading a digital transformation initiative that presents a strategic opportunity for our offering.`,
        keyStats: [
          { label: "Market Cap", value: "$4.2B" },
          { label: "Annual Revenue", value: "$850M" },
          { label: "YoY Growth", value: "24%" },
          { label: "Employees", value: "5,000+" },
          { label: "R&D Investment", value: "22% of revenue" },
          { label: "Customer Base", value: "450+ enterprises" },
        ],
        techStack: [
          {
            category: "Cloud Infrastructure",
            technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
          },
          {
            category: "Data Processing",
            technologies: ["Apache Kafka", "Spark", "Hadoop", "Snowflake"],
          },
          {
            category: "Development",
            technologies: ["Python", "JavaScript", "React", "Node.js", "Java"],
          },
          {
            category: "AI/ML",
            technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "BERT"],
          },
          {
            category: "DevOps",
            technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible"],
          },
        ],
        strategicNotes: {
          ...baseData.strategicNotes,
          keyObjectives: [
            "Present a compelling executive vision",
            "Address strategic concerns and objections",
            "Demonstrate alignment with their business objectives",
            "Establish a long-term partnership vision",
            "Secure executive sponsorship",
          ],
          talkingPoints: [
            "Strategic business impact and competitive advantage",
            "Long-term partnership opportunities and roadmap",
            "Executive-level concerns and risk mitigation",
            "Success stories and relevant case studies",
            "Strategic alignment with their digital transformation goals",
          ],
        },
      }
      return executiveData
    }

    case "internal": {
      const internalData: InternalData = {
        ...baseData,
        dealSummary: `${companyName} represents a strategic opportunity estimated at $1.2M in annual recurring revenue. They're currently evaluating AI-driven analytics solutions as part of a broader digital transformation initiative. The decision timeline is Q1 next year, with budget already allocated. We've conducted 3 discovery calls and 1 technical workshop. Primary decision maker is Sarah Johnson (CIO), with strong support from their Head of Data Analytics.`,
        stakeholders: [
          {
            name: "Sarah Johnson",
            title: "Chief Information Officer",
            role: "Decision Maker",
            influence: "High",
          },
          {
            name: "Michael Chen",
            title: "Head of Data Analytics",
            role: "Technical Evaluator",
            influence: "High",
          },
          {
            name: "Jennifer Williams",
            title: "Chief Financial Officer",
            role: "Budget Approver",
            influence: "Medium",
          },
          {
            name: "David Rodriguez",
            title: "VP of IT Infrastructure",
            role: "Technical Evaluator",
            influence: "Medium",
          },
          {
            name: "Amanda Lee",
            title: "Director of Digital Transformation",
            role: "Project Lead",
            influence: "High",
          },
        ],
        proposedApproach: [
          "Lead with business value and ROI focus rather than technical features",
          "Present a phased implementation approach to minimize disruption",
          "Emphasize our experience with similar enterprises in their industry",
          "Address data privacy concerns proactively with our compliance framework",
          "Leverage AWS partnership as they already use AWS services",
          "Propose joint success metrics tied to their business outcomes",
        ],
        riskFactors: [
          "Competitive pressure from Oracle who has an existing relationship",
          "Budget constraints due to recent acquisition activities",
          "Technical integration concerns with legacy systems",
          "Internal politics between IT and business units",
          "Potential timeline delays due to regulatory approvals",
        ],
        competitiveLandscape: [
          {
            competitor: "Oracle",
            strengthsAgainst: [
              "Our solution has better AI capabilities",
              "More flexible deployment options",
              "Faster implementation timeline",
              "More specialized industry expertise",
            ],
            weaknessesAgainst: [
              "Oracle has existing relationship and contracts",
              "Their solution has tighter integration with existing Oracle products",
              "Larger implementation team",
            ],
          },
          {
            competitor: "IBM",
            strengthsAgainst: [
              "More modern architecture",
              "Lower total cost of ownership",
              "More user-friendly interfaces",
              "Faster innovation cycle",
            ],
            weaknessesAgainst: [
              "IBM has stronger brand recognition",
              "More extensive global support network",
              "Broader service offerings",
            ],
          },
        ],
        strategicNotes: {
          ...baseData.strategicNotes,
          keyObjectives: [
            "Align internal stakeholders on the opportunity",
            "Develop a comprehensive solution proposal",
            "Identify potential roadblocks and address them proactively",
            "Define clear next steps and ownership",
            "Prepare objection handling strategies",
          ],
          talkingPoints: [
            "Internal resource allocation and team composition",
            "Risk assessment and mitigation strategies",
            "Competitive positioning and differentiation",
            "Implementation timeline and milestones",
            "Pricing strategy and negotiation approach",
          ],
        },
      }
      return internalData
    }

    default:
      return baseData
  }
}

