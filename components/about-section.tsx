import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-[#0d277c] rounded-full overflow-hidden bg-[#00a0e2] shadow-[-8px_8px_0px_0px_rgba(13,39,124,1)]">
            <Image src="/images/me.png" alt="伽允的照片" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              关于 <span className="bg-[#00a0e2] text-white px-3 py-1 inline-block">伽允</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              一名热爱技术的前端工程师，同时也是在 B 站分享知识的技术创作者。我相信「输入」与「输出」同等重要，因此我一边深耕前端工程，一边将所学沉淀为内容，帮助更多人在技术成长路上少走弯路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#00a0e2] border-2 border-[#0d277c] rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">前端工程</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  5年前端开发经验，专注于 React/Vue 生态，对 TypeScript 和性能优化有深入研究。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#ad4422] border-2 border-[#0d277c] rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">内容创作</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  B 站知识区 UP主，分享前端技术、AI 工具使用与个人成长心得，累计播放量 50W+。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#0d277c] border-2 border-[#0d277c] rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">AI 探索</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  积极探索 AI 在前端领域的应用，包括 AI 辅助开发、智能客服与创意设计工具。
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-[#0d277c] text-white hover:bg-[#0a2266] rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
            <User className="w-5 h-5" />
            阅读更多
          </Button>
        </div>
      </div>
    </section>
  )
}
