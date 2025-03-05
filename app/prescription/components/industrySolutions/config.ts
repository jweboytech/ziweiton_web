export const INDUSTRY_LIST: Array<
  Option & { icon: string; highlightIcon: string }
> = [
  {
    label: "互联网",
    value: "network",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/network.webp",
    highlightIcon:
      "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/network_highlight.webp",
  },
  {
    label: "酒店",
    value: "hotel",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/hotel.webp",
    highlightIcon:
      "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/hotel_highlight.webp",
  },
  {
    label: "生产制造",
    value: "fabrication",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/fabrication.webp",
    highlightIcon:
      "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/fabrication_highlight.webp",
  },
  {
    label: "零售连锁",
    value: "retail",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/retail.webp",
    highlightIcon:
      "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/retail_highlight.webp",
  },
];

export const NETWORK_QUESTIONS: Question[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "人员流动性高",
    description:
      "入、离职等变动频繁，导致资产容易丢失、损坏或者责任不清等问题，增加了资产管理难度。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/cycle.webp",
    title: "设备更新快",
    description:
      "IT设备（如服务器、电脑）更新换代频繁，旧设备处置不及时，导致资产闲置或浪费。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/data.webp",
    title: "数据安全风险",
    description: "设备报废或转售时，数据清理不彻底，存在泄露风险。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset6.webp",
    title: "资产分散",
    description: "多地办公导致资产分布分散，难以统一管理。",
  },
];

export const HOTEL_QUESTIONS: Question[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产种类多",
    description:
      "客房设备、餐饮设备、办公设备等种类繁多，管理难度大，对管理精细度要求高。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产损耗率高",
    description: "客房设备（如电视、空调）使用频繁，损耗率高，采购维护成本高。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "盘点工作繁重",
    description: "大规模资产盘点耗时长，人工操作易费时费力，且容易出错。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产分散",
    description:
      "酒店地域分布广泛，资产跨地域管理成本高，难以实施有效监控与调度。",
  },
];

export const FABRICATION_QUESTIONS: Question[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产账目混乱",
    description:
      "资产规模庞大、价值高、种类繁多，缺乏统一台账和编码，导致数据不准确、不完整。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "设备管理混乱",
    description:
      "缺乏完善的维护计划和记录，设备故障频繁，影响生产进度，增加成本。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "盘点工作繁重",
    description: "大规模资产盘点耗时长，人工操作易费时费力，且容易出错。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产利用率低",
    description:
      "资产使用情况监测不足，部分设备闲置或使用不充分，影响生产效率。",
  },
];

export const RETAIL_QUESTIONS: Question[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "门店分布广",
    description: "多门店资产分布广泛，需要跨地域盘点，导致管理难度增加。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产信息不对成",
    description:
      "资产信息无法做到实时同步，主要依赖总部派人调研考察，效率低且容易出错。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "资产利用率低",
    description:
      "部分门店可能存在固定资产闲置或重复购置的情况，导致资产利用率低下，增加了企业的运营成本。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/users.webp",
    title: "审批流程不规范",
    description:
      "固定资产管理制度不够完善，在缺乏有效监管的机制下，部分门店可能存在违规处置资产的情况。",
  },
];

export const NETWORK_SOLUTIONS: SectionData[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution1.webp",
    title: "高效盘点",
    description: "支持支持多地资产统一管理，实时追踪设备状态。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution2.webp",
    title: "数据安全管理",
    description: "提供数据清理工具，确保设备报废时无数据泄露风险。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution3.webp",
    title: "生命周期管理",
    description: "通过数据分析优化设备采购与报废流程，降低闲置率。",
  },
];

export const HOTEL_SOLUTIONS: SectionData[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution1.webp",
    title: "设备分类管理",
    description: "支持资产分类管理，轻松管理客房、餐饮等设备。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution2.webp",
    title: "完善的设备维护管理",
    description:
      "资产使用人员可快速报修、设置维护计划等，系统自动通知维修人员，实时追踪维修进度。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution3.webp",
    title: "移动盘点",
    description:
      "引入二维码/RFID技术，支持移动端扫码盘点，提升盘点效率，减少人工错误。",
  },
];

export const FABRICATION_SOLUTIONS: SectionData[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution1.webp",
    title: "资产全生命周期管理",
    description:
      "实现资产、设备从采购、入库、领用、归还、调拨、借用、维护、维修、盘点、折旧及报废等各个环节的全生命周期管理。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution2.webp",
    title: "资产数据可视化",
    description:
      "资产台账清晰 记录完整资产情况一目了然；资产的分布情况和使用状态可视化管理，帮助企业发现资产闲置或过度使用问题，优化资产配置，提高资产整体利用率。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution3.webp",
    title: "完善的设备管理",
    description:
      "贵重资产定位，“失联”一键报警；同时资产使用人员可快速报修、设置维护计划等，系统自动通知维修人员，实时追踪维修进度，确保设备故障及时得到处理，减少设备停机时间对经营的影响。",
  },
];

export const RETAIL_SOLUTIONS: SectionData[] = [
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution1.webp",
    title: "资产全生命周期管理",
    description:
      "实现资产、设备从采购、入库、领用、归还、调拨、借用、维护、维修、盘点、折旧及报废等各个环节的全生命周期管理。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution2.webp",
    title: "资产数据可视化",
    description:
      "资产台账清晰 记录完整资产情况一目了然；资产的分布情况和使用状态可视化管理，帮助企业发现资产闲置或过度使用问题，优化资产配置，提高资产整体利用率。",
  },
  {
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/network_solution3.webp",
    title: "资产标签化",
    description:
      "通过条形码、RFID等技术对所有资产进行一物一码管理，通过扫描设备实现资产的实时跟踪和记录更新，实现门店资产追踪；同时通过在线资产处置流程，确保资产在报废或处置过程中得到妥善处理，防止浪费和损失。",
  },
];
