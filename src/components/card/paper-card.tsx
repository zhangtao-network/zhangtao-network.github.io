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
  paper: {
    title: string
    author: string
    ranking: string
    venue: string
  }
}

function PaperCard({ paper }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{paper.title}</CardTitle>
        <CardDescription dangerouslySetInnerHTML={{ __html: paper.author }} />
        <CardAction>
          <Badge className="text-md">{paper.ranking}</Badge>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <p>{paper.venue}</p>
      </CardFooter>
    </Card>
  )
}

export { PaperCard }
