import { ModeToggle } from "@/components/mode-toggle"
import { IndexNavigationMenu } from "@/components/index-navigation-menu"

function Header() {
  return (
    <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between p-2">
      <IndexNavigationMenu />
      <ModeToggle />
    </div>
  )
}

export { Header }
