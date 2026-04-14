import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Megaphone, ChevronRightIcon } from "lucide-react"

function Welcome() {
  return (
    <Item variant="outline" size="sm" asChild>
      <a href="#lab">
        <ItemMedia>
          <Megaphone className="size-8" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-xl">欢迎加入算网优化课题组 !</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-6" />
        </ItemActions>
      </a>
    </Item>
  )
}

export { Welcome }
