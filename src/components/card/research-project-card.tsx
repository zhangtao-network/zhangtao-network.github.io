import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Props {
  project: {
    projectName: string
    projectTitle: string
  }
}

function ResearchProjectCard({ project }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          <Badge>{project.projectName}</Badge>
        </CardDescription>
        <CardTitle className="mt-2">{project.projectTitle}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export { ResearchProjectCard }
