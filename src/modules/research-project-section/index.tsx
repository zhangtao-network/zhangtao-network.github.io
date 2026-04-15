import { ResearchProjectCard } from "@/components/card/research-project-card"
import { ResearchProjects } from "@/data/research-projects"

function ResearchProjectSection() {
  return (
    <div>
      <h3 className="mb-6 scroll-m-20 text-2xl font-semibold tracking-tight">
        ✨ 科研项目
      </h3>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {ResearchProjects.map((project) => (
          <ResearchProjectCard key={project.projectTitle} project={project} />
        ))}
      </div>
    </div>
  )
}

export { ResearchProjectSection }
