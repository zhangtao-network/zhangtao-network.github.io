const papers = [
  {
    title:
      "R³: A Building Block for Disordering-Tolerant Load Balancing in Data Center Networks",
    author:
      "<b>Tao Zhang</b>, Yuchen Wang, Yuanzhen Hu, Jinbin Hu, Haotian Jing, and Yangfan Li.",
    ranking: "CCF A类",
    venue:
      "IEEE Transactions on Services Computing (TSC), 2025, 18 (5): 3106-3122.",
  },
  {
    title:
      "Taming the Competitiveness of Heterogeneous TCP Traffic in Data Center Networks",
    author:
      "<b>Tao Zhang</b>, Ran Huang, Jiawei Huang, Shaojun Zou, Chang Ruan, Kai Chen, Jianxin Wang, and Geyong Min.",
    ranking: "CCF A类",
    venue: "IEEE/ACM Transactions on Networking (ToN), 2024, 32(3): 2253-2268.",
  },
  {
    title: "Rethinking Fast and Friendly Transport in Data Center Networks",
    author:
      "<b>Tao Zhang</b>, Jiawei Huang, Kai Chen, Jianxin Wang, Jianer Chen, Yi Pan and Geyong Min.",
    ranking: "CCF A类",
    venue: "IEEE/ACM Transactions on Networking (ToN), 2020, 28(5): 2364-2377.",
  },
  {
    title:
      "Tuning the Aggressive TCP Behavior for Highly Concurrent HTTP Connections in Intra-Datacenter",
    author:
      "<b>Tao Zhang</b>, Jianxin Wang, Jiawei Huang, Jianer Chen, Yi Pan and Geyong Min. ",
    ranking: "CCF A类",
    venue: "IEEE/ACM Transactions on Networking (ToN), 2017, 25(6): 3808-3822.",
  },
  {
    title: "Adaptive-acceleration data center TCP",
    author:
      "<b>Tao Zhang</b>, Jianxin Wang, Jiawei Huang, Yi Huang, Jianer Chen, Yi Pan",
    ranking: "CCF A类",
    venue: "IEEE Transactions on Computers (TC), 2015, 64(6): 1522-1533.",
  },
  {
    title:
      "Progress-Aware Transmission Protocol for Efficient In-Network Aggregation in Distributed Machine Learning",
    author:
      "Zhaoyi Li, Jiawei Huang, <b>Tao Zhang</b>, Shengwen Zhou, and Yijun Li.",
    ranking: "CCF A类",
    venue: "IEEE Transactions on Networking (TON), 2025, 33(6): 2897-2912.",
  },
  {
    title:
      "Toward QoE-Fairness for Video Streaming Over Heterogeneous Networks: An Innovative Bandwidth Allocation Mechanism",
    author:
      "Qichen Su, Jiawei Huang, Zhaoyi Li, <b>Tao Zhang</b>, and Wanchun Jiang.",
    ranking: "CCF A类",
    venue: "IEEE Transactions on Networking (TON), 2026, 34: 2103-2118.",
  },
  {
    title:
      "Straggler-Aware Gradient Aggregation for Large-Scale Distributed Deep Learning System",
    author:
      "Yijun Li, Jiawei Huang, Zhaoyi Li, Jingling Liu, <b>Tao Zhang</b>, Wanchun Jiang, and Jianxin Wang.",
    ranking: "CCF A类",
    venue: "IEEE/ACM Transactions on Networking (ToN), 2024, 32(6): 4917-4930.",
  },
  {
    title:
      "PA-ATP: Progress-Aware Transmission Protocol for In-Network Aggregation",
    author:
      "Zhaoyi Li, Jiawei Huang, <b>Tao Zhang</b>, Shengwen Zou, Qile Wang, Yijun Li, Jingling Liu, Wanchun Jiang, and Jianxin Wang",
    ranking: "CCF B类",
    venue:
      "IEEE 31st International Conference on Network Protocols (ICNP), 20 December 2023.",
  },
  {
    title:
      "REN: Receiver-driven Congestion Control using Explicit Notification for Data Center",
    author:
      "Zhaoyi Li, Jiawei Huang, Jinbin Hu, Weihe Li, <b>Tao Zhang</b>, Jingling Liu, Jianxin Wang, and Tian He",
    ranking: "CCF B类",
    venue:
      "IEEE Transactions on Cloud Computing (TCC), 2023, 11(2): 1381-1394.",
  },
  {
    title:
      "Designing Fast and Friendly TCP to Fit High Speed Data Center Networks",
    author:
      "<b>Tao Zhang</b>, Jiawei Huang, Jianxin Wang, Jianer Chen, Yi Pan, Geyong Min.",
    ranking: "CCF B类",
    venue:
      "IEEE 38th International Conference on Distributed Computing Systems (ICDCS), 2018, pp. 43-53.",
  },
  {
    title:
      "Tuning the Aggressive TCP Behavior for Highly Concurrent HTTP Connections in Data Center",
    author:
      "Jiawei Huang, Jianxin Wang, <b>Tao Zhang</b>, Jianer Chen, Yi Pan.",
    ranking: "CCF B类",
    venue:
      "IEEE 36th International Conference on Distributed Computing Systems (ICDCS)",
  },
  {
    title:
      "Achieving QoE Fairness in Video Streaming over Heterogeneous Congestion Control Protocols",
    author:
      "Qichen Su, Jiawei Huang, Zhaoyi Li, <b>Tao Zhang</b>, Wanchun Jiang, and Jianxin Wang.",
    ranking: "CCF B类",
    venue:
      "IEEE/ACM 32nd International Symposium on Quality of Service (IWQoS), 2024.",
  },
  {
    title: "GTCP: Hybrid congestion control for cross-datacenter networks",
    author:
      "Shaojun Zou, Jiawei Huang, Jingling Liu, <b>Tao zhang</b>, Ning Jiang and Jianxin Wang.",
    ranking: "CCF B类",
    venue:
      "IEEE 41st International Conference on Distributed Computing Systems (ICDCS)",
  },
  {
    title:
      "Polo: Receiver-Driven Congestion Control for Low Latency over Commodity Network Fabric",
    author: "Chang Ruan, Jianxin Wang, Wanchun Jiang, <b>Tao zhang</b>.",
    ranking: "CCF B类",
    venue:
      "ACM 49th International Conference on Parallel Processing (ICPP), 2020, pp. 1-10.",
  },
  {
    title: "Opportunistic Transmission for Video Streaming over Wild Internet",
    author:
      "Jiawei Huang, Qichen Su, Weihe Li, Zhuoran Liu, <b>Tao Zhang</b>, Sen Liu, Ping Zhong, Wanchun Jiang, and Jianxin Wang.",
    ranking: "CCF B类",
    venue:
      "ACM Transactions on Multimedia Computing, Communications, and Applications (TOMCCAP), 2023, 18(3):1-22.",
  },
  {
    title: "DDT: Mitigating the competitiveness difference of data center TCPs",
    author:
      "<b>Tao Zhang</b>, Jiawei Huang, Shaojun Zou, Sen Liu, Jinbin Hu, Jingling Liu, Chang Ruan, and Jianxin Wang",
    ranking: "CCF C类",
    venue: "ACM 3rd Asia-Pacific Workshop on Networking (APNet), 2019:8-14.",
  },
  {
    title:
      "Mitigating Hash Polarization with Flow-Level Load Balancing in Leaf-Spine Data Center Network",
    author:
      "Siyuna Fan, Ao Zhang, Hui Yu, <b>Tao Zhang</b>, Linfei Dong, Xidao Luan, and Hui Yin.",
    ranking: "CCF C类",
    venue: "ICA3PP, 2025.（Outstanding Paper Award）",
  },
  {
    title:
      "HG: Leveraging Hybrid Switching Granularity to Balance Heterogeneous Data Center Traffic Load for Cloud-based Industrial Applications",
    author:
      "<b>Tao Zhang</b>, Shengli He, Xiao Zeng, Xin Wu, Ku Jin, Chang Ruan, Shaojun Zou, Jinbin Hu, and Fangmin Li.",
    ranking: "中科院1区TOP",
    venue:
      "IEEE Transactions on Industrial Informatics (TII), 2024, 20(6): 8416-8427.",
  },
  {
    title: "基于距离测量和位置指纹的室内定位方法研究",
    author: "李方敏, <b>张韬</b>, 刘凯, 刘果, 马小林",
    ranking: "CCF T1",
    venue: "计算机学报, 2019, 42(2): 339-350.",
  },
  {
    title:
      "Towards Communication-efficient Digital Twin via AI-powered Transmission and Reconstruction",
    author:
      "Mi Li, Cen Chen, Xulei Yang, Joey Tianyi Zhou, <b>Tao Zhang</b>, and Yangfan Li.",
    ranking: "CCF A类",
    venue:
      "IEEE Journal on Selected Areas in Communications (JSAC), 2023, 41(11): 3624-3635.",
  },
  {
    title: "Achieving fast page load for websites across multiple domains",
    author:
      "Jiawei Huang, Haitao Zhu, Mingyue Liu, <b>Tao Zhang</b>, and Jianxin Wang",
    ranking: "CCF A类",
    venue:
      "Transactions on Emerging Telecommunications Technologies (TETT), 2022-01-05, 33(5).",
  },
]

export { papers }
