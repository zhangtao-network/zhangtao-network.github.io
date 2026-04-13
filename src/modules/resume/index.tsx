const profile = {
  name: "张韬",
  role: "长沙学院 - 计算机科学与工程学院",
  desc: `
    张韬，工学博士，校聘教授，硕士生导师，湖南省优博。
    长期从事计算机网络协议和算法优化领域的研究和教学工作，
    主持且完成国家自然科学基金面上项目1项。
    目前已在中国计算机学会（China Computer Federation, CCF）推荐的权威学术期刊和著名学术会议发表多篇论文，
    具体期刊和会议包括：《IEEE/ACM Transactions on Networking》、《IEEE Transactions on Computers》、
    《ACM Transactions on Multimedia Computing, Communications, and Applications》、
    《IEEE Transactions on Cloud Computing》、《Journal of Network and Computer Applications》、
    《Future Generation Computer Systems》、《IEEE Internet of Things Journal》、
    《Transactions on Emerging Telecommunications Technologies》、《计算机学报》、
    IEEE ICDCS、ACM ICPP、APNet 等。目前已授权国家发明专利5项（转让金额共计达到60万元），于2020年获评湖南省科技进步三等奖，
    其博士毕业论文于 2019年获评湖南省优秀博士学位论文。已取得的相关研究成果涉及延时敏感应用传输优化、HTTP 并发传输优化、
    多协议共存传输优化、多路径传输优化、网页快速加载及视频流传输优化等领域。
  `,
  desc2: `
    学术兼职：目前担任国际权威期刊《IEEE Journal on Selected Areas in Communications》、
    《IEEE/ACM Transactions on Networking》、《IEEE Transactions on Computers》、
    《Journal of Parallel and Distributed Computing》、《IEEE Internet of Things Journal》、
    《Future Generation Computer Systems》、《Journal of Network and Computer Applications》的审稿人。
  `,
}

function Resume() {
  return (
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
        <p className="leading-7 [&:not(:first-child)]:mt-6">{profile.desc2}</p>
      </div>
    </section>
  )
}

export { Resume }
