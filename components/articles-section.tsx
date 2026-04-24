import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">文章与资讯</h2>
          <Button
            variant="outline"
            className="border-[3px] border-[#0d277c] rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
          >
            <Pencil className="w-4 h-4 mr-2" />
            浏览所有文章
          </Button>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          <div className="group bg-white border-[3px] border-[#0d277c] rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(13,39,124,1)] transition-all duration-300">
            <div className="bg-gray-200 relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-[#0d277c] text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                资源
              </span>
              <Image
                src="/images/article-design-tools.png"
                alt="设计工具插图"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                2023年如何选择合适的設計工具？
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00a0e2] border-2 border-[#0d277c] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/me.png"
                    alt="我的照片"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg text-[#0d277c]">伽允</div>
                  <div className="text-sm md:text-base text-gray-600">2022年10月28日</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="group bg-white border-[3px] border-[#0d277c] rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(13,39,124,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-gray-200 min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-[#0d277c] text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    文章
                  </span>
                  <Image
                    src="/images/article-font-sizes.png"
                    alt="字体大小插图"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    UI设计中的字体大小：完整指南
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    了解如何选择合适的字体大小来提升用户体验和可读性。
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white border-[3px] border-[#0d277c] rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(13,39,124,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-gray-200 min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-[#0d277c] text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    新闻
                  </span>
                  <Image
                    src="/images/article-exercises.png"
                    alt="练习插图"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    成为UI/UX设计高手的6个实用练习
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    通过这些练习提升您的设计技能和实战能力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
