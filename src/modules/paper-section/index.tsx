import { PaperCard } from "@/components/card/paper-card"
import { papers } from "@/data/paper"

papers.sort((a, b) => a.seq - b.seq)

function PaperSection() {
  return (
    <div>
      <h3 className="mb-6 scroll-m-20 text-2xl font-semibold tracking-tight">
        📖 论文发表
      </h3>
      <div className="grid grid-cols-1 items-start gap-4">
        {papers.map((paper) => {
          return <PaperCard paper={paper} />
        })}
      </div>
    </div>
  )
}

export { PaperSection }
