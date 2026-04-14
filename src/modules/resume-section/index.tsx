import { Mail } from "lucide-react"

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
          <img
            src="https://jsxy.ccsu.cn/virtual_attach_file.vsb?afc=4oRG8bM8CZnl-DMilQ2nRLaUmQRMRLD4LmUYoR9ZU8liMzG0gihFp2hmCIa0UYysLSy8n1ysozrfMNU8nNCaUNCYnR94UzNaozNPU4MRUzfFU4WRnNnfozTFLlrVoRvJv2bjo4OeoDXK_dN0qIbtpYyPLmUPg4-PLR-8gtA8pUscc&oid=2113742405&tid=1241&nid=21024&e=.png"
            alt="Profile"
            className="float-right h-auto w-42 object-cover p-4"
          />
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
