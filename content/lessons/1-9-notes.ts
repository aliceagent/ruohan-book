import type { MiniLesson, VocabItem } from "@/lib/types"
import { ex, ml, v } from "./note-helpers"

export const LESSON_1_9_CORE_VOCAB: VocabItem[] = [
  v("剪纸", "paper cutting"),
  v("爱好", "hobby"),
  v("年初", "the beginning of the year"),
  v("有意思", "interesting"),
  v("拼贴画", "collage"),
  v("实物", "real object"),
  v("材料", "material"),
  v("油画", "oil painting"),
  v("行动", "to take action"),
  v("培养", "to cultivate; to take up (a hobby)"),
  v("迷上", "to get hooked on"),
  v("摄影", "photography"),
  v("单眼相机〔单反相机〕", "SLR / DSLR camera"),
  v("出外景", "to shoot on location"),
]

export const LESSON_1_9_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你在做什么？": [
    ml(
      "在做什么？",
      "what are you doing?",
      [
        "在 + verb marks an action in progress. 你在做什么？ is the default “what are you up to?” when you walk in on someone. Shorter: 在干嘛？ (very casual).",
      ],
      {
        pattern: "在 + V",
        examples: [
          ex("你在看什么？", "What are you looking at?"),
          ex("我在做饭。", "I’m cooking."),
          ex("他在打电话。", "He’s on the phone."),
        ],
      }
    ),
  ],
  "剪纸。": [
    ml(
      "剪纸",
      "paper cutting",
      [
        "A one-word answer matching the tight question. 剪纸 is both the craft and the finished paper-cut. Verb-object: 剪 + 纸.",
      ],
      {
        examples: [
          ex("她很会剪纸。", "She’s really good at paper cutting."),
          ex("这是一张红色的剪纸。", "This is a red paper-cut."),
          ex(
            "过年的时候很多人贴剪纸。",
            "A lot of people put up paper-cuts at New Year."
          ),
        ],
      }
    ),
  ],
  "剪纸？你什么时候开始有这个爱好的？我怎么不知道！": [
    ml(
      "什么时候开始…的",
      "when did you start…?",
      [
        "什么时候开始 + verb + 的 asks when a habit or skill began. The 的 at the end marks a past event you want details about. 有这个爱好 = have this hobby.",
      ],
      {
        pattern: "什么时候开始 + V + 的？",
        examples: [
          ex(
            "你什么时候开始学中文的？",
            "When did you start learning Chinese?"
          ),
          ex("他什么时候开始跑步的？", "When did he start running?"),
          ex(
            "你们什么时候开始认识的？",
            "When did you two meet / get to know each other?"
          ),
        ],
      }
    ),
    ml(
      "我怎么不知道",
      "how did I not know?!",
      [
        "怎么 + 不知道 is surprise, not a request for a method. It means “I can’t believe I missed this.” Echoing 剪纸？ first shows the hobby is news.",
      ],
      {
        examples: [
          ex("你搬家了？我怎么不知道！", "You moved? How did I not know!"),
          ex(
            "明天考试？我怎么不知道。",
            "There’s a test tomorrow? How come I didn’t know."
          ),
          ex("他结婚了？我怎么不知道！", "He got married? I had no idea!"),
        ],
      }
    ),
  ],
  "今年年初才开始的，很有意思。": [
    ml(
      "才开始",
      "only just started",
      [
        "才 + verb stresses that it happened late or only recently: 今年年初才开始的. 年初 = the start of the year. 很有意思 is the standard “it’s interesting / fun” for a hobby.",
      ],
      {
        pattern: "time + 才 + V",
        examples: [
          ex(
            "我去年才开始学游泳。",
            "I only started learning to swim last year."
          ),
          ex("他九点才到。", "He didn’t arrive until nine."),
          ex("这个课很有意思。", "This class is really interesting."),
        ],
        compare: [
          {
            label: "only just",
            hanzi: "才开始",
            en: "started only then / recently",
          },
          {
            label: "already",
            hanzi: "就开始了",
            en: "already started (so soon)",
          },
        ],
      }
    ),
  ],
  "好漂亮！嗯……在我的拼贴画上贴你的剪纸，应该不错！": [
    ml(
      "应该不错",
      "that should be pretty good",
      [
        "应该不错 is a soft prediction: I think that would work. 嗯…… is thinking out loud. 在 + place + 上 + 贴 = stick it onto that surface.",
      ],
      {
        examples: [
          ex("这家店应该不错。", "This place should be pretty good."),
          ex("把照片贴在墙上。", "Stick the photo on the wall."),
          ex("一起做，应该很好玩。", "Doing it together should be fun."),
        ],
      }
    ),
  ],
  "拼贴画？什么拼贴画？": [
    ml(
      "回声 + 什么 + noun",
      "echo the new word",
      [
        "Same pattern as 派对？什么派对？ Repeat the unknown word, then 什么 + noun. A natural way to ask for a definition in conversation.",
      ],
      {
        examples: [
          ex("外景？什么外景？", "On-location? What do you mean, on-location?"),
          ex("量贩店？什么量贩店？", "A warehouse store? What’s that?"),
          ex("油画？什么油画？", "Oil painting? What kind?"),
        ],
      }
    ),
  ],
  "把实物或各种材料贴在画面上的一种画，像这样……": [
    ml(
      "把…贴在…",
      "take … and stick it on …",
      [
        "把 + object + 贴在 + place: the 把 sentence moves the object before the result. 实物 = real objects; 材料 = materials. 一种画 = a kind of picture. 像这样…… is said while showing.",
      ],
      {
        pattern: "把 + object + 贴在 + place",
        examples: [
          ex("把邮票贴在信封上。", "Stick the stamp on the envelope."),
          ex("把照片贴在本子上。", "Stick the photo in the notebook."),
          ex("把名字写在纸上。", "Write the name on the paper."),
        ],
      }
    ),
  ],
  "哇！这些都是你拼贴的吗？好厉害！": [
    ml(
      "都是你…的吗？ / 好厉害",
      "did you … all of these? / that’s amazing",
      [
        "这些都是你拼贴的吗？ uses 的 to stand for the artworks. 好厉害 is high everyday praise — stronger than 很好, lighter than a formal compliment.",
      ],
      {
        examples: [
          ex("这些都是你做的吗？", "Did you make all of these?"),
          ex("你中文说得好好厉害！", "Your Chinese is amazing!"),
          ex("哇，好漂亮！", "Wow, so pretty!"),
        ],
      }
    ),
  ],
  "没有啦！随便弄的。其实我最想学的是油画，可是一直没行动。如果可以培养任何爱好，你还想要有什么兴趣爱好？":
    [
      ml(
        "没有啦 / 随便弄的",
        "nah / I just threw them together",
        [
          "没有啦 modestly waves off praise. 随便弄的 = I just knocked them together; 弄 is a spoken catch-all for making / doing. Together they are a classic humble reply after 好厉害.",
        ],
        {
          examples: [
            ex("没有啦，还差得远。", "Nah, I’ve still got a long way to go."),
            ex(
              "这是随便弄的，不好看。",
              "I just threw this together — it’s not great."
            ),
            ex("饭是我随便炒的。", "I just stir-fried the rice however."),
          ],
          compare: [
            { label: "modest no", hanzi: "没有啦", en: "nah, not really" },
            {
              label: "casual making",
              hanzi: "随便弄的",
              en: "just knocked together",
            },
          ],
        }
      ),
      ml(
        "其实 / 一直没行动",
        "actually / never got around to acting",
        [
          "其实 pivots to the real wish. 最想学的是油画 — 的 nominalizes “what I most want to learn.” 一直没行动 = I still haven’t taken action, a useful phrase for hobbies you only think about.",
        ],
        {
          examples: [
            ex("其实我不喜欢咖啡。", "Actually I don’t like coffee."),
            ex(
              "我想去旅行，可是一直没行动。",
              "I want to travel, but I never act on it."
            ),
            ex(
              "他说要戒烟，一直没行动。",
              "He says he’ll quit smoking, but he never does."
            ),
          ],
        }
      ),
      ml(
        "培养爱好",
        "take up / cultivate a hobby",
        [
          "培养 is “cultivate” — used for hobbies, habits, and skills. 如果可以培养任何爱好 is a hypothetical. 兴趣爱好 often travel as a pair; 还想要有什么 asks for an extra one.",
        ],
        {
          pattern: "培养 + 爱好 / 习惯",
          examples: [
            ex("我想培养一个新爱好。", "I want to take up a new hobby."),
            ex(
              "从小培养好习惯很重要。",
              "Building good habits from childhood matters."
            ),
            ex("你有什么兴趣爱好？", "What hobbies / interests do you have?"),
          ],
        }
      ),
    ],
  "我最近迷上了摄影，想换单眼相机〔单反相机〕。": [
    ml(
      "迷上了",
      "I’ve gotten hooked on…",
      [
        "迷上 + hobby / person / show = become obsessed with. 了 marks that this is a new state. 最近迷上了 is a high-frequency small-talk opener.",
      ],
      {
        pattern: "迷上 + noun",
        examples: [
          ex("我最近迷上了韩剧。", "I’ve gotten into Korean dramas lately."),
          ex("她迷上了跑步。", "She’s hooked on running."),
          ex("小孩迷上了那只猫。", "The kid is obsessed with that cat."),
        ],
      }
    ),
    ml(
      "单眼相机〔单反相机〕",
      "SLR camera — Taiwan vs Mainland wording",
      [
        "The textbook writes 单眼相机 and notes 〔单反相机〕. 单眼 is the Taiwan name; 单反 (single-lens reflex) is the Mainland name. Learn both; this course’s dialogue uses the Taiwan form. 换 = switch to / upgrade.",
      ],
      {
        examples: [
          ex("他想买一台单眼相机。", "He wants to buy an SLR."),
          ex("单反相机比较重。", "DSLRs are pretty heavy."),
          ex("我想换一个新手机。", "I want to switch to a new phone."),
        ],
        compare: [
          {
            label: "Taiwan",
            hanzi: "单眼相机",
            en: "SLR (this textbook’s word)",
          },
          {
            label: "Mainland note",
            hanzi: "单反相机",
            en: "DSLR (textbook 〔〕 note)",
          },
        ],
      }
    ),
  ],
  "太好了！你要出外景的时候记得找我啊！": [
    ml(
      "出外景",
      "go shoot on location",
      [
        "外景 is an outdoor / on-location shoot (as opposed to a studio). 出外景 = go out to shoot. Photographers and film people use it; here it’s friendly exaggeration.",
      ],
      {
        examples: [
          ex("周末我们要出外景。", "We’re shooting on location this weekend."),
          ex(
            "这部电影的外景在海边。",
            "This film’s location shots are at the seaside."
          ),
          ex(
            "出外景要带很多器材。",
            "You have to bring a lot of gear for a location shoot."
          ),
        ],
      }
    ),
    ml(
      "记得找我啊",
      "remember to come get me",
      [
        "记得 + verb = don’t forget to…. 找我 = come find me / take me along. 啊 keeps it warm and slightly teasing. 的时候 = when (you do that).",
      ],
      {
        pattern: "记得 + V + 啊",
        examples: [
          ex("到了记得打电话给我。", "Remember to call me when you arrive."),
          ex(
            "你去玩的时候记得找我啊！",
            "When you go out, remember to include me!"
          ),
          ex("记得带伞。", "Remember to bring an umbrella."),
        ],
      }
    ),
  ],
}
