import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0d277c] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/me.png"
                  alt="伽允"
                  width={180}
                  height={180}
                  className="object-cover rounded-full"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-[#0d277c] rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0d277c]">订阅我的通讯</h3>
                  <p className="text-gray-600 text-sm mt-1">获取最新技术分享与成长心得</p>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="email"
                    placeholder="输入您的电子邮箱"
                    className="border-4 border-[#0d277c] rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg placeholder:text-gray-500"
                  />
                  <Button className="absolute right-2 top-2 bottom-2 bg-[#0d277c] text-white hover:bg-[#0a2266] rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-auto">
                    订阅
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/me.png"
                    alt="伽允"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">伽允</span>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                前端工程师 · AI 探索者 · 知识区 UP 主
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#00a0e2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#00a0e2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#ad4422] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#ad4422] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    首页
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    关于我
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    精选作品
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    工作经验
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">关注我</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    B 站主页
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    掘金博客
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    微信公众号
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">联系方式</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hi@jiayun.dev" className="hover:text-white transition-colors">
                    hi@jiayun.dev
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>商务合作</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300 text-sm">
            <p>© 2024 伽允. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
