import type { MiniLesson, VocabItem } from "@/lib/types"
import { ex, ml, v } from "./note-helpers"

export const LESSON_1_4_CORE_VOCAB: VocabItem[] = [
  v("女朋友", "girlfriend"),
  v("未婚", "unmarried"),
  v("联谊", "mixer; singles event"),
  v("结婚", "to get married"),
  v("急着", "in a hurry to"),
  v("另一半", "the other half (partner)"),
  v("理想", "ideal"),
  v("伴侣", "partner (life partner)"),
  v("条件", "conditions; criteria"),
  v("温柔体贴", "gentle and considerate"),
  v("高富帅", "tall, rich, and handsome"),
  v("不够格", "not qualified; not up to standard"),
  v("缘分", "fate (in relationships)"),
  v("势利眼", "snobbish; status-obsessed"),
]

export const LESSON_1_4_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你现在有女朋友吗？这周末有个未婚联谊要不要一起去？": [
    ml(
      "要不要一起…",
      "want to … together?",
      ["Soft invite. 要不要 + verb. 未婚联谊 = mixer for unmarried people."],
      {
        pattern: "要不要 + V",
        examples: [ex("要不要一起吃饭？", "Want to eat together?")],
      }
    ),
  ],
  "联谊？听起来挺好玩的，可是我还不想结婚。": [
    ml(
      "听起来挺…的",
      "sounds pretty…",
      ["听起来 = it sounds. 挺…的 = fairly / pretty. Soft positive."],
      {
        pattern: "听起来挺 + adj + 的",
        examples: [ex("听起来挺不错的。", "Sounds pretty good.")],
      }
    ),
    ml(
      "还不想",
      "don't want to … yet",
      [
        "还 = still / yet. 还不想结婚 = not ready to marry yet, not a hard never.",
      ],
      {
        examples: [ex("我还不想回家。", "I don't want to go home yet.")],
      }
    ),
  ],
  "不一定要急着结婚，先交个朋友也不错。我想看看能不能在35岁前找到另一半。": [
    ml(
      "不一定要",
      "you don't necessarily have to",
      ["不一定 softens advice. 急着 + V = in a rush to do something."],
      {
        examples: [ex("不一定要现在决定。", "You don't have to decide now.")],
      }
    ),
    ml("先…也不错", "… first wouldn't be bad either", [
      "先 + smaller step. 交个朋友 — 个 makes it casual, 'make a friend'.",
    ]),
    ml(
      "能不能…另一半",
      "whether I can find a partner",
      [
        "看看能不能 = see if I can. 另一半 = the other half, common for spouse/partner. 岁前 = before (age).",
      ],
      {
        examples: [ex("30岁前想买房。", "Want to buy a house before 30.")],
      }
    ),
  ],
  "你理想伴侣的条件是什么？": [
    ml(
      "理想伴侣的条件",
      "criteria for an ideal partner",
      ["条件 = conditions / what you require. Very common dating-talk noun."],
      {
        examples: [ex("工作条件不错。", "The job conditions are pretty good.")],
      }
    ),
  ],
  "温柔体贴、个性好就好了。": [
    ml(
      "…就好了",
      "that's enough / that's all I ask",
      ["Lists traits, then 就好了 = I don't need more than this."],
      {
        examples: [ex("健康就好了。", "As long as (we're) healthy.")],
      }
    ),
    ml("温柔体贴", "gentle and thoughtful", [
      "Often paired. 个性好 = good personality — vague but common.",
    ]),
  ],
  "同意，我听说女生可挑了，要高富帅、体贴耐心、有房有车、有好婆婆等等，我们可能都不够格。":
    [
      ml(
        "可挑了",
        "really picky",
        ["可 + adj + 了 for emphasis. 挑 = picky / choosy."],
        {
          examples: [ex("这孩子可聪明了。", "This kid is really smart.")],
        }
      ),
      ml(
        "高富帅 / 有房有车",
        "ideal-man checklist slang",
        [
          "高富帅 = tall, rich, handsome. 有房有车 = has a house and a car. 好婆婆 = a nice mother-in-law. 等等 = and so on.",
        ],
        {
          compare: [
            {
              label: "slang checklist",
              hanzi: "高富帅、有房有车",
              en: "tall-rich-handsome, house and car — dating-ad jokes",
            },
            {
              label: "real talk",
              hanzi: "温柔体贴、个性好",
              en: "gentle, considerate, a good personality",
            },
          ],
        }
      ),
      ml(
        "不够格",
        "not up to the standard",
        ["格 = qualification. 不够格 = we wouldn't even make the cut."],
        {
          examples: [
            ex("我不够格当老师。", "I'm not qualified to be a teacher."),
          ],
        }
      ),
    ],
  "缘分吧，不是每一个女生都那么势利眼的。怎么样，一起去看看吧。": [
    ml("缘分吧", "it's fate, I guess", [
      "缘分 is destiny that brings two people together. 吧 shrugs: leave it to fate.",
    ]),
    ml("势利眼", "snobbish / only cares about money and status", [
      "势利 = snobbish. 眼 = the way they look at people. Strong, a bit teasing here.",
    ]),
    ml("一起去看看吧", "let's go check it out", [
      "看看 = have a look, low pressure. 怎么样，…吧 pushes the invite again.",
    ]),
  ],
  "好吧，几点？": [
    ml(
      "好吧",
      "fine / all right then",
      [
        "Reluctant yes. Different from 好的 (plain ok). Then 几点？ jumps to logistics.",
      ],
      {
        compare: [
          { label: "plain ok", hanzi: "好的", en: "sure" },
          { label: "reluctant yes", hanzi: "好吧", en: "okay, I give in" },
        ],
      }
    ),
  ],
  "周六上午11点我去你家接你。": [
    ml(
      "接你",
      "pick you up",
      [
        "接 + person = pick someone up (car, school, airport). Time + 去 + place + 接你 is a full plan.",
      ],
      {
        examples: [ex("我去机场接你。", "I'll pick you up at the airport.")],
      }
    ),
  ],
}

export const LESSON_1_4_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "要不要一起…",
    "Want to … together?",
    ["Soft invite. 要不要 + verb. 这周末有个未婚联谊要不要一起去？"],
    {
      pattern: "要不要 + V",
      examples: [
        ex("要不要一起吃饭？", "Want to eat together?"),
        ex("要不要一起去？", "Want to go together?"),
        ex("要不要看电影？", "Want to watch a movie?"),
      ],
    },
  ),
  ml(
    "听起来挺…的",
    "Sounds pretty…",
    ["听起来 = it sounds. 挺 + adj + 的 = fairly / pretty. Soft positive before a 可是."],
    {
      pattern: "听起来挺 + Adj + 的",
      examples: [
        ex("听起来挺好玩的。", "Sounds pretty fun."),
        ex("听起来挺不错的。", "Sounds pretty good."),
        ex("听起来挺累的。", "Sounds pretty tiring."),
      ],
    },
  ),
  ml(
    "不一定要",
    "You don’t necessarily have to",
    ["不一定 softens advice. 不一定要急着结婚 — you don’t have to rush into marriage."],
    {
      pattern: "不一定要 + V",
      examples: [
        ex("不一定要现在决定。", "You don’t have to decide now."),
        ex("不一定要结婚。", "You don’t necessarily have to get married."),
        ex("不一定要买贵的。", "You don’t have to buy the expensive one."),
      ],
    },
  ),
  ml(
    "…就好了",
    "That’s enough / that’s all I ask",
    ["温柔体贴、个性好就好了 — I don’t need more than this. Different from 如果…就好了 (a wish)."],
    {
      pattern: "condition + 就好了",
      examples: [
        ex("健康就好了。", "As long as we’re healthy."),
        ex("个性好就好了。", "A good personality is enough."),
        ex("你来就好了。", "You just coming is enough."),
      ],
    },
  ),
  ml(
    "接 + person",
    "Pick someone up",
    ["周六上午11点我去你家接你. 接 + person: car, school, airport."],
    {
      pattern: "去 + place + 接 + person",
      examples: [
        ex("我去机场接你。", "I’ll pick you up at the airport."),
        ex("我去学校接小孩。", "I’ll pick the kids up at school."),
        ex("晚上八点来接我。", "Come pick me up at eight."),
      ],
    },
  ),
]

