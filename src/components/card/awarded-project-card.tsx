import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  project: {
    title: string
    description: string
    award: string
  }
}

function AwardCard({ project }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </CardHeader>
      <CardFooter>
        <p>{project.award}</p>
      </CardFooter>
    </Card>
  )
}

export { AwardCard }
