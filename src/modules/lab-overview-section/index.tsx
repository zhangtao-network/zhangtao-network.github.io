function LabOverviewSection() {
  return (
    <div>
      <h3 id="lab" className="scroll-m-20 text-2xl font-semibold tracking-tight">
        🏠 课题组简介
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        本人所在研究团队依托长沙学院计算机科学与工程学院，拥有湖南省工业互联网技术与安全重点实验室、
        长沙市智能感知与数据科学工程技术研究中心两大核心平台，为科研工作开展提供坚实支撑。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        团队已建成初具规模的小型超算中心，部署多种在线应用与服务，同时配备NS2、NS3、Mininet、OMNet++等全套模拟仿真系统，
        成员具备丰富的系统设计、开发及仿真调试经验，已在各类仿真系统中开发成熟的网络协议模块，可快速适配应用需求完成部署与模拟测试。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        硬件设施完善，构建了基于Linux系统的小型网络实验床，配备工作站、软件交换机及支持DPDK、
        RDMA技术的千兆/万兆高速以太网卡，可快速完成软件安装配置并开展实验测试；同时拥有面向智算中心网络环境的服务器集群，
        包含P4可编程交换机、白盒交换机、万兆级网卡、万兆高速光模块及高性能GPU服务器等设备，
        可实现初等规模真实智算中心环境的部署与测试。
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        团队目前正积极推进相关领域研究，拟进一步购置先进设备与工具，深耕高质量研究成果，现依托国家自然科学基金资助相关研究工作，
        为研究生提供良好的科研实践平台、充足的技术支持及广阔的研究空间。
      </p>
    </div>
  )
}

export { LabOverviewSection }
