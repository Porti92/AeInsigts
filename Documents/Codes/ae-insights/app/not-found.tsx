import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 text-center">
        <div className="h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
          <Search className="h-10 w-10 text-primary-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Company Not Found</h1>
          <p className="text-neutral-600">
            We couldn't find the company you're looking for. Please try another search.
          </p>
        </div>
        <Button asChild className="bg-primary-gradient hover:opacity-90">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

