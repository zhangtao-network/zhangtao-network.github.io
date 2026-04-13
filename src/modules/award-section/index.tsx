import { AwardCard } from "@/components/card/awarded-project-card"
import { awardedProjects } from "@/data/awarded-projects"

function AwardSection() {
  return (
    <div>
      <h3 className="mb-6 scroll-m-20 text-2xl font-semibold tracking-tight">
        🎉 所获荣誉
      </h3>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {awardedProjects.map((project) => {
          return <AwardCard project={project} />
        })}
      </div>
    </div>
  )
}

export { AwardSection }
