const tag = '~!@#$%^&*()_+|}{:"?><,./;\'\[\]\\=\-}';
const char = 'abcdefghigklmnopqrstuvwxyz';
const name = [
  '瞥',
  '瞅',
  '望',
  '瞄',
  '瞪',
  '盯',
  '观察',
  '凝视',
  '注视',
  '看望',
  '探望',
  '瞻仰',
  '扫视',
  '环视',
  '仰望',
  '俯视',
  '鸟瞰',
  '俯瞰',
  '远望',
  '眺望',
  '了望',
  '讲',
  '曰',
  '讨论',
  '议论',
  '谈论',
  '交流',
  '交谈',
  '嚷',
  '吼',
  '嚎',
  '啼',
  '鸣',
  '嘶',
  '嘶叫',
  '嚎叫',
  '叫嚷',
  '首',
  '元',
  '甲',
  '子',
  '首先',
  '冠军',
  '魁首',
  '首屈一指',
  '名列前茅',
  '吱呀',
  '喀嚓',
  '扑哧',
  '哗啦',
  '沙沙',
  '咕咚',
  '叮当',
  '咕噜',
  '嗖嗖',
  '唧唧喳喳',
  '叽叽喳喳',
  '轰轰隆隆',
  '叮叮当当',
  '叮叮咚咚',
  '哗哗啦啦',
  '鸟语花香',
  '春暖花开',
  '阳春三月',
  '万物复苏',
  '春风轻拂',
  '春光明媚',
  '烈日当空',
  '暑气逼人',
  '大汗淋漓',
  '挥汗如雨',
  '乌云翻滚',
  '热不可耐',
  '秋高气爽',
  '五谷丰登',
  '万花凋谢',
  '天高云淡',
  '落叶沙沙',
  '中秋月圆',
  '三九严寒',
  '天寒地冻',
  '雪花飞舞',
  '寒冬腊月',
  '千里冰封',
  '滴水成冰',
  '头重脚轻',
  '指手画脚',
  '愁眉苦脸',
  '心明眼亮',
  '目瞪口呆',
  '张口结舌',
  '交头接耳',
  '面黄肌瘦',
  '眼明手快',
  '眼高手低',
  '昂首挺胸',
  '心灵手巧',
  '摩拳擦掌',
  '摩肩接踵',
  '鼠目寸光',
  '谈虎色变',
  '兔死狐悲',
  '龙马精神',
  '杯弓蛇影',
  '马到成功',
  '与虎谋皮',
  '亡羊补牢',
  '雄狮猛虎',
  '鹤立鸡群',
  '狗急跳墙',
  '叶公好龙',
  '声名狼籍',
  '狐假虎威',
  '画蛇添足',
  '九牛一毛',
  '鸡犬不宁',
  '一箭双雕',
  '惊弓之鸟',
  '胆小如鼠',
  '打草惊蛇',
  '鸡飞蛋打',
  '指鹿为马',
  '顺手牵羊',
  '对牛弹琴',
  '鸟语花香',
  '虎背熊腰',
  '杀鸡儆猴',
  '莺歌燕舞',
  '鸦雀无声',
  '鱼目混珠',
  '鱼龙混杂',
  '龙争虎斗',
  '出生牛犊',
  '望女成凤',
  '望子成龙',
  '狗尾续貂',
  '爱屋及乌',
  '螳臂当车',
  '蛛丝马迹',
  '投鼠忌器',
  '门口罗雀',
  '管中窥豹',
  '马不停蹄',
  '马到成功',
  '龙马精神',
  '马失前蹄',
  '指鹿为马',
  '一马当先',
  '闻鸡起舞',
  '雄鸡报晓',
  '鹤立鸡群',
  '杀鸡取卵',
  '鸡犬不宁',
  '鸡飞蛋打',
  '鸡毛蒜皮',
  '小试牛刀',
  '九牛一毛',
  '牛头马面',
  '牛鬼蛇神',
  '牛马不如',
  '牛角挂书',
  '牛毛细雨',
  '如牛负重',
  '风马牛不相及',
  '初生牛犊不怕虎',
  '九牛二虎之力',
  '一诺千金',
  '一鸣惊人',
  '一马当先',
  '一触即发',
  '一气呵成',
  '一丝不苟',
  '一言九鼎',
  '一日三秋',
  '一落千丈',
  '一字千金',
  '一本万利',
  '一手遮天',
  '一文不值',
  '一贫如洗',
  '一身是胆',
  '一毛不拔二三其德',
  '两面三刀',
  '两肋插刀',
  '两败俱伤',
  '两情相悦',
  '两袖清风',
  '两全其美',
  '三生有幸',
  '三思而行',
  '三令五申',
  '三头六臂',
  '三更半夜',
  '三顾茅庐',
  '四面楚歌',
  '四面八方',
  '四海为家',
  '四通八达',
  '四平八稳',
  '四分五裂',
  '五大三粗',
  '五光十色',
  '五花八门',
  '五体投地',
  '五谷丰登',
  '五彩缤纷',
  '五湖四海',
  '六神无主',
  '六根清净',
  '六道轮回',
  '六亲不认',
  '七零八落',
  '七嘴八舌',
  '七高八低',
  '七窍生烟',
  '七上八下',
  '七折八扣',
  '七拼八凑',
  '八面玲珑',
  '八面威风',
  '八仙过海，各显神通',
  '九霄云外',
  '九牛一毛',
  '九死一生',
  '九鼎一丝',
  '九牛二虎之力',
  '十指连心',
  '十面埋伏',
  '十字街头',
  '十全十美',
  '十年寒窗',
  '十万火急',
  '十拿九稳',
  '百年大计',
  '百花齐放',
  '百思不解',
  '百家争鸣',
  '百感交集',
  '百读不厌',
  '百川归海',
  '千方百计',
  '千军万马',
  '千言万语',
  '千辛万苦',
  '千秋万代',
  '千真万确',
  '千里鹅毛',
  '万无一失',
  '万众一心',
  '万事大吉',
  '万人空巷',
  '万家灯火',
  '万象更新',
  '万人瞩目',
  '桃红柳绿',
  '万紫千红',
  '青红皂白',
  '黑白分明',
  '绿意盎然',
  '绿树成阴',
  '素车白马',
  '万古长青',
  '漆黑一团',
  '灯红酒绿',
  '面红耳赤',
  '青山绿水',
  '白纸黑字',
  '青黄不接',
  '金灿灿',
  '黄澄澄',
  '绿莹莹',
  '红彤彤',
  '红艳艳',
  '红通通',
  '白茫茫',
  '黑乎乎',
  '黑压压',
  '鹅黄',
  '乳白',
  '湖蓝',
  '枣红',
  '雪白',
  '火红',
  '梨黄',
  '孔雀蓝',
  '柠檬黄',
  '象牙白',
  '苹果绿',
  '五彩缤纷',
  '五光十色',
  '万紫千红',
  '绚丽多彩',
  '色彩斑斓',
  '千姿百态',
  '千姿万状',
  '姿态万千',
  '形态多样',
  '形态不一',
  '不胜枚举',
  '数不胜数',
  '不可胜数',
  '数以万计',
  '不计其数',
  '成千上万',
  '成群结队',
  '人山人海',
  '排山倒海',
  '琳琅满目',
  '车水马龙',
  '铺天盖地',
  '满山遍野',
  '变化多端',
  '变幻莫测',
  '千变万化',
  '瞬息万变',
  '一泻千里',
  '一目十行',
  '快如闪电',
  '移步换影',
  '健步如飞',
  '光阴似箭',
  '日月如梭',
  '星转斗移',
  '流星赶月',
  '慢慢',
  '缓缓',
  '冉冉',
  '徐徐',
  '缓慢',
  '一眨眼',
  '一瞬间',
  '刹那间',
  '顷刻间',
  '霎时间',
  '时而',
  '须臾',
  '去世',
  '已故',
  '牺牲',
  '阵亡',
  '逝世',
  '与世长辞',
  '为国捐躯',
  '驾崩',
  '苦思冥想',
  '静思默想',
  '绞尽脑汁',
  '拾金不昧',
  '舍己为人',
  '视死如归',
  '坚贞不屈',
  '不屈不挠',
  '身材魁梧',
  '亭亭玉立',
  '老态龙钟',
  '西装革履',
  '婀娜多姿',
  '洗耳恭听',
  '昂首阔步',
  '拳打脚踢',
  '交头接耳',
  '左顾右盼',
  '扬眉吐气',
  '怒目而视',
  '火眼金睛',
  '面红耳赤',
  '热泪盈眶',
  '泪流满面',
  '泪如雨下',
  '泪眼汪汪',
  '泪如泉涌',
  '嚎啕大哭',
  '喜笑颜开',
  '眉开眼笑',
  '哈哈大笑',
  '嫣然一笑',
  '微微一笑',
  '忐忑不安',
  '惊慌失措',
  '闷闷不乐',
  '激动人心',
  '焦急万分',
  '笑容可掬',
  '微微一笑',
  '开怀大笑',
  '喜出望外',
  '乐不可支',
  '火冒三丈',
  '怒发冲冠',
  '勃然大怒',
  '怒气冲冲',
  '咬牙切齿',
  '可憎可恶',
  '十分可恶',
  '深恶痛绝',
  '疾恶如仇',
  '恨之入骨',
  '伤心落泪',
  '欲哭无泪',
  '失声痛哭',
  '泣不成声',
  '潸然泪下',
  '无精打采',
  '顾虑重重',
  '忧愁不安',
  '愁眉苦脸',
  '闷闷不乐',
  '激动不已',
  '激动人心',
  '百感交集',
  '激动万分',
  '感慨万分',
  '舒舒服服',
  '高枕无忧',
  '无忧无虑',
  '悠然自得',
  '心旷神怡',
  '迫不及待',
  '急急忙忙',
  '急不可待',
  '操之过急',
  '焦急万分',
  '追悔莫及',
  '悔恨交加',
  '于心不安',
  '深感内疚',
  '羞愧难言',
  '心灰意冷',
  '大失所望',
  '灰心丧气',
  '毫无希望',
  '黯然神伤',
  '惊弓之鸟',
  '提心吊胆',
  '惊惶失措',
  '惊恐万状',
  '惶惶不安',
  '上行下效',
  '深入浅出',
  '借尸还魂',
  '买空卖空',
  '内忧外患',
  '前呼后拥',
  '异口同声',
  '声东击西',
  '三长两短',
  '凶多吉少',
  '不进则退',
  '大同小异',
  '大公无私',
  '承上启下',
  '天长日久',
  '天崩地裂',
  '天老地荒',
  '理直气壮',
  '云开日出',
  '粗细各异',
  '长短不同',
  '黑白相间',
  '表里如一',
  '是非曲直',
  '喜怒哀乐',
  '安危冷暖',
  '生死存亡',
  '月光似水',
  '茫雾似轻',
  '枫叶似火',
  '骄阳似火',
  '秋月似钩',
  '日月如梭',
  '雪花如席',
  '雪飘如絮',
  '细雨如烟',
  '星月如钩',
  '碧空如洗',
  '暴雨如注',
  '吉祥如意',
  '视死如归',
  '挥金如土',
  '疾走如飞',
  '一见如故',
  '和好如初',
  '心急如焚',
  '山清水秀',
  '早出晚归',
  '眉清目秀',
  '月圆花好',
  '李白桃红',
  '心直口快',
  '水落石出',
  '水滴石穿',
  '月白风清',
  '字正腔圆',
  '口蜜腹剑',
  '雨打风吹',
  '虎啸龙吟',
  '龙争虎斗',
  '走马观花',
  '废寝忘食',
  '张灯结彩',
  '招兵买马',
  '争分夺秒',
  '坐井观天',
  '思前顾后',
  '投桃报李',
  '行云流水',
  '乘热打铁',
  '生离死别',
  '舍近求远',
  '返老还童',
  '打草惊蛇',
  '载歌载舞',
  '难舍难分',
  '能屈能伸',
  '蹑手蹑脚',
  '有始有终',
  '若即若离',
  '古色古香',
  '无影无踪',
  '无牵无挂',
  '无边无际',
  '无情无义',
  '无忧无虑',
  '无缘无故',
  '无穷无尽',
  '不干不净',
  '不清不楚',
  '不明不白',
  '不闻不问',
  '不伦不类',
  '不吵不闹',
  '不理不睬',
  '自言自语',
  '自说自话',
  '自吹自擂',
  '自私自利',
  '自高自大',
  '自暴自弃',
  '自给自足',
  '时隐时现',
  '时高时低',
  '时明时暗',
  '时上时下',
  '半信半疑',
  '半明半昧',
  '半梦半醒',
  '半推半就',
  '摇摇摆摆',
  '恍恍惚惚',
  '清清楚楚',
  '明明白白',
  '干干净净',
  '飘飘洒洒',
  '顺顺利利',
  '整理整理',
  '打扫打扫',
  '清扫清扫',
  '舒活舒活',
  '清理清理',
  '忽闪忽闪',
  '雪白雪白',
  '碧绿碧绿',
  '金黄金黄',
  '乌黑乌黑',
  '瓦蓝瓦蓝',
  '闪闪发光',
  '窃窃私语',
  '津津乐道',
  '欣欣向荣',
  '栩栩如生',
  '滔滔不绝',
  '翩翩起舞',
  '神采奕奕',
  '星光熠熠',
  '小心翼翼',
  '炊烟袅袅',
  '白雪皑皑',
  '烈日灼灼',
  '赤日炎炎',
  '绿浪滚滚',
  '波浪滚滚',
  '云浪滚滚',
  '麦浪滚滚',
  '热浪滚滚',
  '江水滚滚',
  '车轮滚滚',
  '果实累累',
  '秋实累累',
  '硕果累累',
  '果实累累',
  '尸骨累累',
  '弹孔累累',
  '白骨累累',
  '生气勃勃',
  '生机勃勃',
  '生气勃勃',
  '朝气勃勃',
  '兴致勃勃',
  '雄心勃勃',
  '野心勃勃',
  '千辛万苦',
  '千军万马',
  '千言万语',
  '千变万化',
  '千山万水',
  '千秋万代',
  '千丝万缕',
  '千奇百怪',
  '千锤百炼',
  '千方百计',
  '千疮百孔',
  '千姿百态',
  '前因后果',
  '前呼后拥',
  '前思后想',
  '前赴后继',
  '前仰后合',
  '前倨后恭',
  '天经地义',
  '天罗地网',
  '天昏地暗',
  '天诛地灭',
  '天南地北',
  '天荒地老',
  '有眼无珠',
  '有气无力',
  '有始无终',
  '有备无患',
  '有恃无恐',
  '有勇无谋',
  '有名无实',
  '东倒西歪',
  '东张西望',
  '东奔西走',
  '东拉西扯',
  '东拼西凑',
  '东邻西舍',
  '东鳞西爪',
  '迫在眉睫',
  '千钧一发',
  '燃眉之急',
  '十万火急',
  '震耳欲聋',
  '惊天动地',
  '震天动地',
  '响彻云霄',
  '众志成城',
  '齐心协力',
  '同心同德',
  '万众一心',
  '废寝忘食',
  '刻苦钻研',
  '争分夺秒',
  '精益求精',
  '专心致志',
  '全神贯注',
  '聚精会神',
  '一心一意',
  '议论纷纷',
  '各抒己见',
  '七嘴八舌',
  '争论不休',
  '车水马龙',
  '人山人海',
  '人声鼎沸',
  '摩肩接踵',
  '热闹非凡',
  '生龙活虎',
  '人流如潮',
  '振奋人心',
  '异常激烈',
  '洁白无瑕',
  '白璧无瑕',
  '冰清玉洁',
  '洁白如玉',
  '言而有信',
  '一言九鼎',
  '一诺千金',
  '信守诺言',
  '毅然决然',
  '当机立断',
  '雷厉风行',
  '前所未有',
  '空前绝后',
  '绝无仅有',
  '史无前例',
  '犹豫不决',
  '出尔反尔',
  '优柔寡断',
  '狐疑不决',
  '浩浩荡荡',
  '气势磅礴',
  '气势恢弘',
  '气势非凡',
  '枝繁叶茂',
  '绿树成阴',
  '绿阴如盖',
  '闻名于世',
  '举世闻名',
  '闻名天下',
  '大名鼎鼎',
  '人尽皆知',
  '手足无措',
  '手忙脚乱',
  '手舞足蹈',
  '足下生辉',
  '赞不绝口',
  '赞叹不已',
  '连连称赞',
  '叹为观止',
  '交口称赞',
  '慷慨激昂',
  '壮志凌云',
  '铿锵有力',
  '语气坚定',
  '汹涌澎湃',
  '波涛汹涌',
  '白浪滔天',
  '惊涛骇浪',
  '浪花飞溅',
  '风平浪静',
  '水平如镜',
  '波光粼粼',
  '微波粼粼',
  '碧波荡漾',
  '旭日东升',
  '绵绵细雨',
  '桃红柳绿',
  '艳阳高照',
  '山河壮丽',
  '高山峻岭',
  '危峰兀立',
  '连绵不断',
  '高低起伏',
  '飞流直下',
  '一泻千里',
  '万丈瀑布',
  '水帘悬挂',
  '雄鸡报晓',
  '红日东升',
  '朝霞辉映',
  '金光万道',
  '中午时分',
  '丽日当空',
  '艳阳高照',
  '当午日明',
  '暮色苍茫',
  '夕阳西下',
  '天色模糊',
  '晚风习习',
  '华灯初上',
  '月明星稀',
  '灯火通明',
  '漫漫长夜',
  '万家灯火',
  '夜幕降临',
  '狂风暴雨',
  '倾盆大雨',
  '瓢泼大雨',
  '大雨淋漓',
  '暴风骤雨',
  '秋雨绵绵',
  '绵绵细雨',
  '细雨如烟',
  '淅淅沥沥',
  '暴雨如注',
  '风和日丽',
  '天高云淡',
  '万里无云',
  '秋高气爽',
  '艳阳高照',
  '纷纷扬扬',
  '粉妆玉砌',
  '银妆素裹',
  '白雪皑皑',
  '冰雪消融',
  '冰天雪地',
  '白雪皑皑',
  '雪花飞舞',
  '大雪封门',
  '雪中送炭',
  '和风拂面',
  '风狂雨猛',
  '秋风凉爽',
  '北风呼啸',
  '轻风徐徐',
  '令人发指',
  '丧失人性',
  '灭绝人性',
  '毛骨悚然',
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
