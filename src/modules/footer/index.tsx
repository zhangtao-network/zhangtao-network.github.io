function Footer() {
  return (
    <div className="mt-16 bg-accent">
      <div className="mx-auto h-64 w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 items-start gap-4 py-8 md:grid-cols-3">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              计网优化科研课题组
            </h3>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted-foreground">友情链接</p>
            <small className="text-sm leading-none font-medium"></small>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted-foreground">其他资源</p>
            <small className="text-sm leading-none font-medium"></small>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
