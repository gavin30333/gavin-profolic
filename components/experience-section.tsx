import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2022年 - 至今",
      title: "高级前端工程师",
      description:
        "负责公司核心产品的前端架构设计与开发，主导 React 技术栈升级，性能优化使页面加载速度提升 50%。",
      icon: "/images/agency.png",
    },
    {
      period: "2020年 - 2022年",
      title: "前端工程师",
      description:
        "参与多个大型项目的前端开发，熟练掌握 Vue/React 双技术栈，负责组件库建设与团队技术分享。",
      icon: "/images/company.png",
    },
    {
      period: "2019年 - 2020年",
      title: "前端开发实习",
      description:
        "在导师带领下参与企业官网与后台管理系统开发，积累了扎实的 JavaScript 和 CSS 基础。",
      icon: "/images/busines.png",
    },
  ]

  return (
    <section id="experience" className="bg-[#0d277c] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              工作 <span className="bg-[#00a0e2] text-white px-3 py-1 inline-block">经验</span>
            </h2>
            <p className="text-gray-300 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              从实习到高级工程师，一路走来我始终坚持技术驱动产品价值，同时不忘分享与输出。
            </p>
            <Button className="bg-white text-[#0d277c] hover:bg-gray-100 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              下载简历
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-[#00a0e2] rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0d277c]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-[#0d277c] shadow-[4px_4px_0px_0px_rgba(13,39,124,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-[#00a0e2] mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0d277c] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
