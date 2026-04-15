import { Mail } from "lucide-react"

import Avatar from "@/assert/avatar.png"

const profile = {
  name: "张韬",
  role: "长沙学院 - 计算机科学与工程学院",
  desc: `
    张韬，工学博士，副教授，硕士生导师，湖南省优博。长期从事计算机网络协议及算法优化领域的研究工作，
    尤其在数据中心网络传输、负载均衡、分布式机器学习训练加速、视频传输等方面取得了一些积累。
    目前已在中国计算机学会（China Computer Federation, CCF）推荐的权威学术期刊和著名学术会议发表论文30余篇，
    已授权多项国家发明专利（转让金额达60万元），获评湖南省科技进步三等奖。
  `,
  desc2: `
    学术兼职：目前担任国际权威期刊《IEEE Journal on Selected Areas in Communications》、 
    《IEEE/ACM Transactions on Networking》、《IEEE Transactions on Computers》、
    《IEEE Transactions Cloud Computing》、《IEEE Transactions on Network and Service Management》、
    《IEEE Internet of Things Journal》等的审稿人。
  `,
}

function ResumeSection() {
  return (
    <div>
      <section className="relative">
        <div className="absolute top-0 left-0 h-20 w-4 bg-orange-400"></div>
        <div>
          <div className="pl-8">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              {profile.name}
            </h1>
            <h4 className="my-4 scroll-m-20 text-xl font-semibold tracking-tight text-orange-400">
              {profile.role}
            </h4>
          </div>
          <div className="float-right m-4 overflow-hidden rounded-md">
            <img
              src={Avatar.src}
              alt="Profile"
              className="h-auto w-32 object-cover md:w-40"
            />
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">{profile.desc}</p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {profile.desc2}
          </p>
        </div>
        <div className="mt-8 flex">
          <Mail /> : tzhang@ccsu.edu.cn
        </div>
      </section>
    </div>
  )
}

export { ResumeSection }
