import { Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-[#0d277c] rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(13,39,124,1)]">
        <div className="w-10 h-10 bg-[#0d277c] rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[18px] font-bold leading-[20px] text-[#0d277c] hover:opacity-70 transition-opacity">
            首页
          </a>
          <a href="#about" className="text-[18px] font-bold leading-[20px] text-[#0d277c] hover:opacity-70 transition-opacity">
            关于我
          </a>
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] text-[#0d277c] hover:opacity-70 transition-opacity">
            精选作品
          </a>
          <a href="#experience" className="text-[18px] font-bold leading-[20px] text-[#0d277c] hover:opacity-70 transition-opacity">
            工作经验
          </a>
          <button className="flex items-center gap-1 text-[18px] font-bold leading-[20px] text-[#0d277c] hover:opacity-70 transition-opacity">
            更多
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <Button className="bg-[#0d277c] text-white hover:bg-[#0a2266] rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
