const tag = '~!@#$%^&*()_+|}{:"?><,./;\'\[\]\\=\-}';
const char = 'abcdefghigklmnopqrstuvwxyz';
const name = [
  '疼痛',
  '猜测',
  '奔腾',
  '丑陋',
  '长久',
  '模仿',
  '固定',
  '寒冷',
  '恐惧',
  '奇怪',
  '整齐',
  '漂浮',
  '特殊',
  '虚假',
  '遥望',
  '微弱',
  '消灭',
  '珍贵',
  '祝愿',
  '缠绕',
  '颤抖',
  '抚摩',
  '拉扯',
  '柔软',
  '明亮',
  '宽敞',
  '黑暗',
  '破旧',
  '思玄',
  '思恋',
  '思凡',
  '思致',
  '思惟',
  '思潮',
  '思忆',
  '思元',
  '思绎',
  '思域',
  '思永',
  '思怀',
  '思越',
  '思纬',
  '思理',
  '思莼',
  '思服',
  '思咏',
  '思愆',
  '思议',
  '思秋',
  '思言',
  '馨香',
  '飘散',
  '舒展',
  '娇美',
  '神韵',
  '恬静',
  '醉人',
  '素雅',
  '娇嫩',
  '幽香',
  '淡雅',
  '朴素',
  '花瓣',
  '花蕊',
  '花粉',
  '鲜花',
  '怒放',
  '含苞',
  '孤单',
  '孤寂',
  '寂寞',
  '寥寂',
  '寂寥',
  '落寞',
  '孤独',
  '寂静',
  '僻静',
  '宁静',
  '寂然',
  '清静',
  '沉寂',
  '沉静',
  '安静',
  '孤立',
  '伶仃',
  '孤单',
  '零落',
  '落莫',
  '动静',
  '呼吸',
  '朝夕',
  '取舍',
  '善恶',
  '兴衰',
  '祸福',
  '甘苦',
  '彼此',
  '首尾',
  '褒贬',
  '吞吐',
  '黑白',
  '是非',
  '多少',
  '真假',
  '虚实',
  '反正',
  '生死',
  '悲欢',
  '前后',
  '始末',
  '早晚',
  '昼夜',
  '曲直',
  '东西',
  '善恶',
  '南北',
  '开关',
  '左右',
  '眷恋',
  '留恋',
  '依恋',
  '迷恋',
  '自恋',
  '爱恋',
  '失恋',
  '贪恋',
  '思恋',
  '热恋',
  '怀恋',
  '初恋',
  '顾恋',
  '流恋',
  '恋恋',
  '悲恋',
  '相恋',
  '婉恋',
  '忆恋',
  '积恋',
  '恳恋',
  '情恋',
  '凝恋',
  '耽恋',
  '欣恋',
  '绻恋',
  '感恋',
  '单恋',
  '遐恋',
  '嫪恋',
  '安恋',
  '慕恋',
  '兴奋',
  '快乐',
  '喜悦',
  '愉快',
  '畅快',
  '欢畅',
  '欢喜',
  '欢腾',
  '欢快',
  '欣喜',
  '积恋',
  '恳恋',
  '情恋',
  '凝恋',
  '耽恋',
  '欣恋',
  '绻恋',
  '感恋',
  '单恋',
  '遐恋',
  '嫪恋',
  '安恋',
  '慕恋',
  '兴奋',
  '快乐',
  '喜悦',
  '愉快',
  '畅快',
  '欢畅',
  '欢喜',
  '欢腾',
  '欢快',
  '欣喜',
  '激奋',
  '激昂',
  '激情',
  '敬佩',
  '佩服',
  '崇拜',
  '钦仰',
  '惊恐',
  '惊慌',
  '惊吓',
  '惧怕',
  '恐惧',
  '胆怯',
  '畏缩',
  '发慌',
  '心慌',
  '恐慌',
  '激怒',
  '恼火',
  '怒斥',
  '怒吼',
  '震怒',
  '气愤',
  '担忧',
  '发愁',
  '犯愁',
  '忧伤',
  '忧愁',
  '忧心',
  '愁闷',
  '悲伤',
  '悲痛',
  '悲惨',
  '悲凉',
  '哀伤',
  '哀怨',
  '忧伤',
  '伤感',
  '瘦削',
  '憔悴',
  '俊美',
  '恬静',
  '慈祥',
  '苍白',
  '白皙',
  '清秀',
  '光滑',
  '英俊',
  '红润',
  '挺直',
  '扁平',
  '小巧',
  '笔直',
  '端庄',
  '秀气',
  '秀美',
  '巧嘴',
  '朱唇',
  '苍白',
  '红润',
  '干裂',
  '娇嫩',
  '整齐',
  '整洁',
  '雪白',
  '焦黄',
  '洁净',
  '蓬松',
  '鲜嫩',
  '粉红',
  '通红',
  '红嫩',
  '滑润',
  '滋润',
  '干巴',
  '干裂',
  '干燥',
  '蜡黄',
  '洁白',
  '炭黑',
  '瘦弱',
  '矮小',
  '苗条',
  '丰满',
  '强壮',
  '清秀',
  '单薄',
  '文弱',
  '干瘦',
  '轩昂',
  '解释',
  '文辞',
  '短语',
  '单词',
  '词组',
  '词汇',
  '字眼',
  '范例',
  '语素',
  '丰富',
  '信息',
  '组成',
  '最小',
  '最大',
  '造句',
  '单位',
  '构成',
  '方式',
  '可以',
  '神奇',
  '单纯',
  '自由',
  '单音',
  '双音',
  '多音',
  '可以',
  '山高',
  '水深',
  '天高',
  '地厚',
  '拥有',
  '凑整',
  '仿佛',
  '苍茫',
  '参差',
  '上面',
  '前方',
  '内部',
  '中间',
  '方位',
  '名词',
  '学生',
  '老师',
  '群众',
  '老头',
  '妇女',
  '同志',
  '叔叔',
  '婶婶',
  '爸爸',
  '妈妈',
  '哥哥',
  '弟弟',
  '姐姐',
  '妹妹',
  '事物',
  '蜗牛',
  '猎豹',
  '棒球',
  '足球',
  '蓝求',
  '战机',
  '飞机',
  '地球',
  '思想',
  '中学',
  '物理',
  '科穴',
  '碗盘',
  '竹筷',
  '上午',
  '下午',
  '过去',
  '将来',
  '早晨',
  '午夜',
  '三更',
  '甲戊',
  '世纪',
  '今天',
  '昨天',
  '动词',
  '行为',
  '跑步',
  '唱歌',
  '喝水',
  '敲门',
  '吆喝',
  '踢求',
  '生长',
  '枯萎',
  '发芽',
  '结果',
  '产卵',
  '喜欢',
  '气愤',
  '觉得',
  '思考',
  '厌恶',
  '存现',
  '消失',
  '显现',
  '丢失',
  '幻灭',
  '使令',
  '使人',
  '让座',
  '命令',
  '禁止',
  '勒令',
  '能愿',
  '如会',
  '愿意',
  '能够',
  '宁可',
  '表示',
  '状貌',
  '特征',
  '状态',
  '气急',
  '怒火',
  '高兴',
  '形容',
  '高大',
  '高瘦',
  '矮胖',
  '粗细',
  '强壮',
  '性质',
  '香甜',
  '漂亮',
  '圆滑',
  '机智',
  '单调',
  '快速',
  '浓厚',
  '肥满',
  '许多',
  '迅速',
  '悄悄',
  '量词',
  '单位',
  '公尺',
  '分寸',
  '公里',
  '公斤',
  '一两',
  '一辆',
  '一角',
  '一元',
  '一次',
  '一趟',
  '一下',
  '回声',
  '一幢',
  '一座',
  '代词',
  '代替',
  '我们',
  '你们',
  '它们',
  '她们',
  '大家',
  '咱们',
  '疑问',
  '谁的',
  '什么',
  '怎么',
  '哪里',
  '何以',
  '这里',
  '那里',
  '那边',
  '拟声',
  '模拟',
  '声音',
  '轰隆',
  '淅沥',
  '噼里',
  '啪啦',
  '哗啦',
  '叽喳',
  '啪拉',
  '哄堂',
  '开怀',
  '笑颜',
  '笑容',
  '喜笑',
  '欢声',
  '笑语',
  '眉开',
  '生气',
  '火冒',
  '雷霆',
  '欣喜',
  '心情',
  '词汇',
  '忧愁',
  '丧气',
  '雾气',
  '满腹',
  '满腔',
  '愁肠',
  '百结',
  '欲断',
  '寸断',
  '九转',
  '百愁',
  '心事',
  '阴郁',
  '忧心',
  '如焚',
  '愁绪',
  '疼痛',
  '猜测',
  '奔腾',
  '丑陋',
  '长久',
  '模仿',
  '固定',
  '寒冷',
  '恐惧',
  '奇怪',
  '整齐',
  '漂浮',
  '特殊',
  '虚假',
  '遥望',
  '微弱',
  '消灭',
  '珍贵',
  '祝愿',
  '缠绕',
  '颤抖',
  '抚摩',
  '拉扯',
  '柔软',
  '明亮',
  '宽敞',
  '黑暗',
  '破旧',
  '思玄',
  '思恋',
  '思凡',
  '思致',
  '思惟',
  '思潮',
  '思忆',
  '思元',
  '思绎',
  '思域',
  '思永',
  '思怀',
  '思越',
  '思纬',
  '思理',
  '思莼',
  '思服',
  '思咏',
  '思愆',
  '思议',
  '思秋',
  '思言',
  '馨香',
  '飘散',
  '舒展',
  '娇美',
  '神韵',
  '恬静',
  '醉人',
  '素雅',
  '娇嫩',
  '幽香',
  '淡雅',
  '朴素',
  '花瓣',
  '花蕊',
  '花粉',
  '鲜花',
  '怒放',
  '含苞',
  '孤单',
  '孤寂',
  '寂寞',
  '寥寂',
  '寂寥',
  '落寞',
  '孤独',
  '寂静',
  '僻静',
  '宁静',
  '寂然',
  '清静',
  '沉寂',
  '沉静',
  '安静',
  '孤立',
  '伶仃',
  '孤单',
  '零落',
  '落莫',
  '动静',
  '呼吸',
  '朝夕',
  '取舍',
  '善恶',
  '兴衰',
  '祸福',
  '甘苦',
  '彼此',
  '首尾',
  '褒贬',
  '吞吐',
  '黑白',
  '是非',
  '多少',
  '真假',
  '虚实',
  '反正',
  '生死',
  '悲欢',
  '前后',
  '始末',
  '早晚',
  '昼夜',
  '曲直',
  '东西',
  '善恶',
  '南北',
  '开关',
  '左右',
  '眷恋',
  '留恋',
  '依恋',
  '迷恋',
  '自恋',
  '爱恋',
  '失恋',
  '贪恋',
  '思恋',
  '热恋',
  '怀恋',
  '初恋',
  '顾恋',
  '流恋',
  '恋恋',
  '悲恋',
  '相恋',
  '婉恋',
  '忆恋',
  '积恋',
  '恳恋',
  '情恋',
  '凝恋',
  '耽恋',
  '欣恋',
  '绻恋',
  '感恋',
  '单恋',
  '遐恋',
  '嫪恋',
  '安恋',
  '慕恋',
  '兴奋',
  '快乐',
  '喜悦',
  '愉快',
  '畅快',
  '欢畅',
  '欢喜',
  '欢腾',
  '欢快',
  '欣喜',
  '积恋',
  '恳恋',
  '情恋',
  '凝恋',
  '耽恋',
  '欣恋',
  '绻恋',
  '感恋',
  '单恋',
  '遐恋',
  '嫪恋',
  '安恋',
  '慕恋',
  '兴奋',
  '快乐',
  '喜悦',
  '愉快',
  '畅快',
  '欢畅',
  '欢喜',
  '欢腾',
  '欢快',
  '欣喜',
  '激奋',
  '激昂',
  '激情',
  '敬佩',
  '佩服',
  '崇拜',
  '钦仰',
  '惊恐',
  '惊慌',
  '惊吓',
  '惧怕',
  '恐惧',
  '胆怯',
  '畏缩',
  '发慌',
  '心慌',
  '恐慌',
  '激怒',
  '恼火',
  '怒斥',
  '怒吼',
  '震怒',
  '气愤',
  '担忧',
  '发愁',
  '犯愁',
  '忧伤',
  '忧愁',
  '忧心',
  '愁闷',
  '悲伤',
  '悲痛',
  '悲惨',
  '悲凉',
  '哀伤',
  '哀怨',
  '忧伤',
  '伤感',
  '瘦削',
  '憔悴',
  '俊美',
  '恬静',
  '慈祥',
  '苍白',
  '白皙',
  '清秀',
  '光滑',
  '英俊',
  '红润',
  '挺直',
  '扁平',
  '小巧',
  '笔直',
  '端庄',
  '秀气',
  '秀美',
  '巧嘴',
  '朱唇',
  '苍白',
  '红润',
  '干裂',
  '娇嫩',
  '整齐',
  '整洁',
  '雪白',
  '焦黄',
  '洁净',
  '蓬松',
  '鲜嫩',
  '粉红',
  '通红',
  '红嫩',
  '滑润',
  '滋润',
  '干巴',
  '干裂',
  '干燥',
  '蜡黄',
  '洁白',
  '炭黑',
  '瘦弱',
  '矮小',
  '苗条',
  '丰满',
  '强壮',
  '清秀',
  '单薄',
  '文弱',
  '干瘦',
  '轩昂',
  '解释',
  '文辞',
  '短语',
  '单词',
  '词组',
  '词汇',
  '字眼',
  '范例',
  '语素',
  '丰富',
  '信息',
  '组成',
  '最小',
  '最大',
  '造句',
  '单位',
  '构成',
  '方式',
  '可以',
  '神奇',
  '单纯',
  '自由',
  '单音',
  '双音',
  '多音',
  '可以',
  '山高',
  '水深',
  '天高',
  '地厚',
  '拥有',
  '凑整',
  '仿佛',
  '苍茫',
  '参差',
  '上面',
  '前方',
  '内部',
  '中间',
  '方位',
  '名词',
  '学生',
  '老师',
  '群众',
  '老头',
  '妇女',
  '同志',
  '叔叔',
  '婶婶',
  '爸爸',
  '妈妈',
  '哥哥',
  '弟弟',
  '姐姐',
  '妹妹',
  '事物',
  '蜗牛',
  '猎豹',
  '棒球',
  '足球',
  '蓝求',
  '战机',
  '飞机',
  '地球',
  '思想',
  '中学',
  '物理',
  '科穴',
  '碗盘',
  '竹筷',
  '上午',
  '下午',
  '过去',
  '将来',
  '早晨',
  '午夜',
  '三更',
  '甲戊',
  '世纪',
  '今天',
  '昨天',
  '行为',
  '跑步',
  '唱歌',
  '喝水',
  '敲门',
  '吆喝',
  '踢求',
  '生长',
  '枯萎',
  '发芽',
  '结果',
  '产卵',
  '喜欢',
  '气愤',
  '觉得',
  '思考',
  '厌恶',
  '存现',
  '消失',
  '显现',
  '丢失',
  '幻灭',
  '使令',
  '使人',
  '让座',
  '命令',
  '禁止',
  '勒令',
  '能愿',
  '如会',
  '愿意',
  '能够',
  '宁可',
  '表示',
  '状貌',
  '特征',
  '状态',
  '气急',
  '怒火',
  '高兴',
  '形容',
  '高大',
  '高瘦',
  '矮胖',
  '粗细',
  '强壮',
  '性质',
  '香甜',
  '漂亮',
  '圆滑',
  '机智',
  '单调',
  '快速',
  '浓厚',
  '肥满',
  '许多',
  '迅速',
  '悄悄',
  '量词',
  '单位',
  '公尺',
  '分寸',
  '公里',
  '公斤',
  '一两',
  '一辆',
  '一角',
  '一元',
  '一次',
  '一趟',
  '一下',
  '回声',
  '一幢',
  '一座',
  '代词',
  '代替',
  '我们',
  '你们',
  '它们',
  '她们',
  '大家',
  '咱们',
  '疑问',
  '谁的',
  '什么',
  '怎么',
  '哪里',
  '何以',
  '这里',
  '那里',
  '那边',
  '拟声',
  '模拟',
  '声音',
  '轰隆',
  '淅沥',
  '噼里',
  '啪啦',
  '哗啦',
  '叽喳',
  '啪拉',
  '哄堂',
  '开怀',
  '笑颜',
  '笑容',
  '喜笑',
  '欢声',
  '笑语',
  '眉开',
  '生气',
  '火冒',
  '雷霆',
  '欣喜',
  '心情',
  '词汇',
  '忧愁',
  '丧气',
  '雾气',
  '满腹',
  '满腔',
  '愁肠',
  '百结',
  '欲断',
  '寸断',
  '九转',
  '百愁',
  '心事',
  '阴郁',
  '忧心',
];

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
