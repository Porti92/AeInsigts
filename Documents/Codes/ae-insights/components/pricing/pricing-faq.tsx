"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left">What's included in the Free plan?</AccordionTrigger>
        <AccordionContent>
          The Free plan includes up to 3 company searches per day, basic company insights, a single user account, and
          standard report templates. It's perfect for individual account executives who want to try out our platform.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left">How does the CSV bulk upload feature work?</AccordionTrigger>
        <AccordionContent>
          With the Premium plan, you can upload a CSV file containing a list of company names. Our system will
          automatically process each company and generate comprehensive insights for all of them. You can then access
          these insights from your dashboard, view detailed reports, and share them with your team. The CSV upload
          feature saves hours of manual research and helps you prepare for multiple accounts at once.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">Can I upgrade from Free to Premium at any time?</AccordionTrigger>
        <AccordionContent>
          Yes, you can upgrade from the Free plan to the Premium plan at any time. Your account information and saved
          searches will be transferred to your Premium account.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left">
          Is there a limit to how many companies I can upload via CSV?
        </AccordionTrigger>
        <AccordionContent>
          Premium plan users can upload up to 100 companies per CSV file. If you need to process more companies, you can
          upload multiple CSV files or contact our sales team for a custom enterprise solution.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left">What kind of insights will I get from the CSV upload?</AccordionTrigger>
        <AccordionContent>
          For each company in your CSV file, you'll receive comprehensive insights including company overview, industry
          and sector information, key metrics (revenue, employees, founding date, headquarters), recent news and
          developments, potential challenges and risks, and strategic notes for discovery calls. All insights are
          presented in an easy-to-digest format with options to drill down for more details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left">Do you offer discounts for annual subscriptions?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer a 20% discount for annual subscriptions to the Premium plan. You can select the annual billing
          option during the checkout process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

