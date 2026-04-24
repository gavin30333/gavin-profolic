import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            你好，我是 <span className="bg-[#00a0e2] text-white px-3 py-1 inline-block">伽允</span>，一位 <br/>
            <span className="bg-[#0d277c] text-white px-3 py-1 inline-block">前端工程师</span>
          </h1>

          <p className="text-[#0d277c] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            前端工程师 · AI 探索者 · 知识区 UP 主 · 个人成长践行者
            <br/><br/>
            专注于 AI 技术洞察、前端工程深度与个人成长方法论的分享。
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0d277c] text-white hover:bg-[#0a2266] rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Mail className="w-5 h-5" />
              联系我
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-[#0d277c] hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <FolderOpen className="w-5 h-5" />
              查看作品
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#00a0e2] border-4 border-[#0d277c] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(13,39,124,1)]">
            <img
              src="/images/me.png"
              alt="伽允的照片"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
