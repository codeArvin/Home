const tag = '~!@#$%^&*()_+|}{:"?><,./;\'\[\]\\=\-}';
const char = 'abcdefghigklmnopqrstuvwxyz';
const pi = '14159265358979323846264338327950288419716939937510'
           +  '58209749445923078164062862089986280348253421170679'
           +  '82148086513282306647093844609550582231725359408128'
           +  '48111745028410270193852110555964462294895493038196'
           +  '44288109756659334461284756482337867831652712019091'
           +  '45648566923460348610454326648213393607260249141273'
           +  '72458700660631558817488152092096282925409171536436'
           +  '78925903600113305305488204665213841469519415116094'
           +  '33057270365759591953092186117381932611793105118548'
           +  '07446237996274956735188575272489122793818301194912'
           +  '98336733624406566430860213949463952247371907021798'
           +  '60943702770539217176293176752384674818467669405132'
           +  '00056812714526356082778577134275778960917363717872'
           +  '14684409012249534301465495853710507922796892589235'
           +  '42019956112129021960864034418159813629774771309960'
           +  '51870721134999999837297804995105973173281609631859'
           +  '50244594553469083026425223082533446850352619311881'
           +  '71010003137838752886587533208381420617177669147303'
           +  '59825349042875546873115956286388235378759375195778'
           +  '18577805321712268066130019278766111959092164201989';
const data = [
  [
    '总叙',
    '弟子规 圣人训 ',
    '首孝悌 次谨信',
    '泛爱众 而亲仁 ',
    '有余力 则学文',
  ],
  [
    '入则孝',
    '父母呼 应勿缓 ',
    '父母命 行勿懒 ',
    '父母教 须敬听 ',
    '父母责 须顺承',
    '冬则温 夏则清 ',
    '晨则省 昏则定 ',
  ],
  [
    '出必告 反必面 ',
    '居有常 业无变',
    '事虽小 勿擅为 ',
    '苟擅为 子道亏 ',
    '物虽小 勿私藏 ',
    '苟私藏 亲心伤',
    '亲所好 力为具 ',
    '亲所恶 谨为去 ',
  ],
  [
    '身有伤 贻亲忧 ',
    '德有伤 贻亲羞',
    '亲爱我 孝何难 ',
    '亲憎我 孝方贤 ',
    '亲有过 谏使更 ',
    '怡吾色 柔吾声',
    '谏不入 悦复谏 ',
    '号泣随 挞无怨',
  ],
  [
    '亲有疾　药先尝　',
    '昼夜侍　不离床',
    '丧三年　常悲咽　',
    '居处变　酒肉绝',
    '丧尽礼　祭尽诚　',
    '事死者　如事生',
  ],
  [
    '出则弟',
    '兄道友 弟道恭',
    '兄弟睦 孝在中 ',
    '财物轻 怨何生 ',
    '言语忍 忿自泯',
    '或饮食 或坐走 ',
    '长者先 幼者后 ',
  ],
  [
    '长呼人 即代叫 ',
    '人不在 己即到',
    '称尊长 勿呼名 ',
    '对尊长 勿见能 ',
    '路遇长 疾趋揖 ',
    '长无言 退恭立',
    '骑下马 乘下车 ',
    '过犹待 百步馀 ',
  ],
  [
    '长者立 幼勿坐 ',
    '长者坐 命乃坐',
    '尊长前 声要低 ',
    '低不闻 却非宜 ',
    '近必趋 退必迟 ',
    '问起对 视勿移',
    '事诸父 如事父 ',
    '事诸兄 如事兄',
  ],
  [
    '谨',
    '朝起早 夜眠迟 ',
    '老易至 惜此时 ',
    '晨必盥 兼漱口 ',
    '便溺回 辄净手',
    '冠必正 纽必结 ',
    '袜与履 俱紧切 ',
  ],
  [
    '置冠服 有定位 ',
    '勿乱顿 致污秽',
    '衣贵洁 不贵华 ',
    '上循分 下称家 ',
    '对饮食 勿拣择 ',
    '食适可 勿过则',
    '年方少 勿饮酒 ',
    '饮酒醉 最为丑 ',
  ],
  [
    '步从容 立端正 ',
    '揖深圆 拜恭敬',
    '勿践阈 勿跛倚 ',
    '勿箕踞 勿摇髀 ',
    '缓揭帘 勿有声 ',
    '宽转弯 勿触棱',
    '执虚器 如执盈 ',
    '入虚室 如有人 ',
  ],
  [
    '事勿忙 忙多错 ',
    '勿畏难 勿轻略',
    '斗闹场 绝勿近 ',
    '邪僻事 绝勿问 ',
    '将入门 问孰存 ',
    '将上堂 声必扬',
    '人问谁 对以名 ',
    '吾与我 不分明 ',
  ],
  [
    '用人物 须明求 ',
    '倘不问 即为偷',
    '借人物 及时还 ',
    '后有急 借不难',
    '信',
    '凡出言 信为先 ',
    '诈与妄 奚可焉 ',
  ],
  [
    '话说多 不如少 ',
    '惟其是 勿佞巧',
    '奸巧语 秽污词 ',
    '市井气 切戒之 ',
    '见未真 勿轻言 ',
    '知未的 勿轻传',
    '事非宜 勿轻诺 ',
    '苟轻诺 进退错 ',
  ],
  [
    '凡道字 重且舒 ',
    '勿急疾 勿模糊',
    '彼说长 此说短 ',
    '不关己 莫闲管 ',
    '见人善 即思齐 ',
    '纵去远 以渐跻',
    '见人恶 即内省 ',
    '有则改 无加警 ',
  ],
  [
    '唯德学 唯才艺 ',
    '不如人 当自砺',
    '若衣服 若饮食 ',
    '不如人 勿生戚 ',
    '闻过怒 闻誉乐 ',
    '损友来 益友却',
    '闻誉恐 闻过欣 ',
    '直谅士 渐相亲 ',
  ],
  [
    '无心非 名为错 ',
    '有心非 名为恶',
    '过能改 归于无 ',
    '倘掩饰 增一辜',
    '泛爱众',
    '凡是人 皆须爱 ',
    '天同覆 地同载 ',
  ],
  [
    '行高者 名自高 ',
    '人所重 非貌高',
    '才大者 望自大 ',
    '人所服 非言大 ',
    '己有能 勿自私 ',
    '人所能 勿轻訾',
    '勿谄富 勿骄贫 ',
    '勿厌故 勿喜新 ',
  ],
  [
    '人不闲 勿事搅 ',
    '人不安 勿话扰',
    '人有短 切莫揭 ',
    '人有私 切莫说 ',
    '道人善 即是善 ',
    '人知之 愈思勉',
    '扬人恶 既是恶 ',
    '疾之甚 祸且作 ',
  ],
  [
    '善相劝 德皆建 ',
    '过不规 道两亏',
    '凡取与 贵分晓 ',
    '与宜多 取宜少 ',
    '将加人 先问己 ',
    '己不欲 即速已',
    '恩欲报 怨欲忘 ',
    '报怨短 报恩长 ',
  ],
  [
    '待婢仆 身贵端 ',
    '虽贵端 慈而宽',
    '势服人 心不然 ',
    '理服人 方无言',
    '亲 仁',
    '同是人　类不齐　',
    '流俗众　仁者希',
  ],
  [
    '果仁者　人多畏　',
    '言不讳　色不媚',
    '能亲仁　无限好　',
    '德日进　过日少',
    '不亲仁　无限害　',
    '小人进　百事坏',
    '余力学文',
  ],
  [
    '不力行 但学文 ',
    '长浮华 成何人 ',
    '但力行 不学文 ',
    '任己见 昧理真',
    '读书法 有三到 ',
    '心眼口 信皆要 ',
    '方读此 勿慕彼 ',
    '此未终 彼勿起',
  ],
  [
    '宽为限 紧用功 ',
    '工夫到 滞塞通 ',
    '心有疑 随札记 ',
    '就人问 求确义',
    '房室清 墙壁净 ',
    '几案洁 笔砚正 ',
    '墨磨偏 心不端 ',
    '字不敬 心先病',
  ],
  [
    '列典籍 有定处 ',
    '读看毕 还原处 ',
    '虽有急 卷束齐 ',
    '有缺坏 就补之',
    '非圣书 屏勿视 ',
    '敝聪明 坏心志 ',
    '勿自暴 勿自弃 ',
    '圣与贤 可驯致',
  ]
].map(arr => arr.map(text => text.trim()))
