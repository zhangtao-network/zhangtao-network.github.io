import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Network,
  EthernetPort,
  ArrowDownUp,
  CloudCog,
  GlobeLock,
} from "lucide-react"

function Footer() {
  return (
    <Empty>
      <EmptyHeader>
        <div className="grid grid-cols-5 items-start gap-4">
          <EmptyMedia variant="icon">
            <Network />
          </EmptyMedia>
          <EmptyMedia variant="icon">
            <EthernetPort />
          </EmptyMedia>
          <EmptyMedia variant="icon">
            <ArrowDownUp />
          </EmptyMedia>
          <EmptyMedia variant="icon">
            <CloudCog />
          </EmptyMedia>
          <EmptyMedia variant="icon">
            <GlobeLock />
          </EmptyMedia>
        </div>
        <EmptyTitle>算网优化课题组</EmptyTitle>
        <EmptyDescription></EmptyDescription>
      </EmptyHeader>
      <EmptyContent></EmptyContent>
    </Empty>
  )
}

export { Footer }
