"use client"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            他们眼中的
            <span className="bg-[#00a0e2] text-white px-3 py-1 inline-block">伽允</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            感谢一路上给予支持和信任的伙伴们，你们的认可是我继续前进的动力。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-[#0d277c] rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-72 lg:pr-72">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                  alt="引号"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div className="md:max-w-[65%]">
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                  伽允的技术分享对我帮助很大，他的教程深入浅出，让我在前端进阶路上少走了很多弯路。同时他也是一个非常靠谱的技术伙伴，合作项目总能高质量交付。
                </p>

                <div>
                  <div className="font-bold text-base md:text-lg">李明</div>
                  <div className="text-gray-600 text-sm md:text-base">某互联网公司前端负责人</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full overflow-hidden hidden lg:block">
              <Image
                src="/images/633b277fc2e3697bb14c6a4f-frances.png"
                alt="客户评价"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
