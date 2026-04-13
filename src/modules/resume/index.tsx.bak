const resumeData = {
  name: "张韬",
  title: "长沙学院 - 计算机科学与工程学院",
  socialLinks: [
    { icon: "linkedin", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "facebook", url: "#" },
  ],
  education: [
    {
      school: "中南大学",
      period: "22012/09-2016/12",
      degree: "计算机学院",
      desc: "计算机科学与技术专业，博士",
    },
    {
      school: "武汉理工大学",
      period: "2006/09-2009/06",
      degree: "信息工程学院",
      desc: "通信与信息系统专业，硕士",
    },
    {
      school: "武汉科技大学",
      period: "1997/09-2001/06",
      degree: "信息科学与工程学院",
      desc: "计算机科学与技术专业，学士",
    },
  ],
  experience: [
    {
      position: "长沙学院",
      period: "2017/08-至今",
      company: "",
      desc: "计算机工程与应用数学学院，副教授",
    },
    {
      position: "湖南工业大学",
      period: "2001/07-2017/07",
      company: "",
      desc: "计算机学院，讲师",
    },
  ],
  contact: {
    email: "info@youmail.com",
    phone: "+000 123 456 789",
    location: "湖南，长沙",
  },
}

function Resume() {
  return (
    <div className="mx-auto w-full overflow-hidden bg-white shadow-xl">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full bg-primary text-white md:w-1/4">
          <div className="p-8">
            <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] leading-tight font-bold">
              {resumeData.name}
            </h1>
            <p className="mt-2 text-sm tracking-wider text-gray-300 uppercase">
              {resumeData.title}
            </p>
            <div className="mt-4 flex gap-4">
              {resumeData.socialLinks.map((link) => (
                <a
                  href={link.url}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <i
                    className={`fa fa-${link.icon === "linkedin" ? "linkedin" : link.icon === "twitter" ? "twitter" : "facebook"}`}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src="https://jsxy.ccsu.cn/virtual_attach_file.vsb?afc=4oRG8bM8CZnl-DMilQ2nRLaUmQRMRLD4LmUYoR9ZU8liMzG0gihFp2hmCIa0UYysLSy8n1ysozrfMNU8nNCaUNCYnR94UzNaozNPU4MRUzfFU4WRnNnfozTFLlrVoRvJv2bjo4OeoDXK_dN0qIbtpYyPLmUPg4-PLR-8gtA8pUscc&oid=2113742405&tid=1241&nid=21024&e=.png"
              alt="Profile Photo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8">
            <h2 className="relative mb-4 text-xl font-bold after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-12 after:bg-white after:content-['']">
              Contact
            </h2>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <i className="fa fa-envelope-o text-accent"></i>
                <span className="text-sm text-gray-300">
                  {resumeData.contact.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa fa-phone text-accent"></i>
                <span className="text-sm text-gray-300">
                  {resumeData.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa fa-map-marker text-accent"></i>
                <span className="text-sm text-gray-300">
                  {resumeData.contact.location}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full p-8 md:w-3/4 md:p-12">
          <section className="mb-10">
            <h2 className="after:bg-dark relative mb-4 text-2xl font-bold after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-12 after:content-['']">
              简介
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              张韬，工学博士，校聘教授，硕士生导师，湖南省优博。长期从事计算机网络协议和算法优化领域的研究和教学工作，主持且完成国家自然科学基金面上项目1项。目前已在中国计算机学会（China
              Computer Federation,
              CCF）推荐的权威学术期刊和著名学术会议发表多篇论文，具体期刊和会议包括：《IEEE/ACM
              Transactions on Networking》、《IEEE Transactions on
              Computers》、《ACM Transactions on Multimedia Computing,
              Communications, and Applications》、《IEEE Transactions on Cloud
              Computing》、《Journal of Network and Computer
              Applications》、《Future Generation Computer Systems》、《IEEE
              Internet of Things Journal》、《Transactions on Emerging
              Telecommunications Technologies》、《计算机学报》、IEEE ICDCS、ACM
              ICPP、APNet
              等。目前已授权国家发明专利5项（转让金额共计达到60万元），于2020年获评湖南省科技进步三等奖，其博士毕业论文于
              2019年获评湖南省优秀博士学位论文。已取得的相关研究成果涉及延时敏感应用传输优化、HTTP
              并发传输优化、多协议共存传输优化、多路径传输优化、网页快速加载及视频流传输优化等领域。
            </p>
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              学术兼职：目前担任国际权威期刊《IEEE Journal on Selected Areas in
              Communications》、《IEEE/ACM Transactions on Networking》、《IEEE
              Transactions on Computers》、《Journal of Parallel and Distributed
              Computing》、《IEEE Internet of Things Journal》、《Future
              Generation Computer Systems》、《Journal of Network and Computer
              Applications》的审稿人。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="after:bg-dark relative mb-4 text-2xl font-bold after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-12 after:content-['']">
              教育经历
            </h2>
            <div className="mt-6 space-y-6">
              {resumeData.education.map((edu) => (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase">
                      {edu.school}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{edu.period}</p>
                    <p className="mt-1 text-xs tracking-wider text-gray-600 uppercase">
                      {edu.degree}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="after:bg-dark relative mb-4 text-2xl font-bold after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-12 after:content-['']">
              工作经历
            </h2>
            <div className="mt-6 space-y-6">
              {resumeData.experience.map((exp) => (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase">
                      {exp.position}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{exp.period}</p>
                    <p className="mt-1 text-xs text-gray-600">{exp.company}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export { Resume }
