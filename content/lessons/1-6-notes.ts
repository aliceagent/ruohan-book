import type { MiniLesson, VocabItem } from "@/lib/types"
import { ex, ml, v } from "./note-helpers"

export const LESSON_1_6_CORE_VOCAB: VocabItem[] = [
  v("刚刚", "just now / a moment ago"),
  v("接到", "to receive (a call / message)"),
  v("不舒服", "unwell; not feeling well"),
  v("提早", "ahead of schedule; earlier than planned"),
  v("下班", "get off work"),
  v("麻烦", "to trouble (someone); trouble"),
  v("打印", "to print"),
  v("资料", "materials; documents"),
  v("要紧", "serious; urgent"),
  v("等一下", "in a moment; wait a bit"),
  v("怪不得", "no wonder"),
  v("出生率", "birth rate"),
  v("越来越", "more and more"),
  v("还好", "it's alright; not that bad"),
  v("听说", "I heard that…"),
  v("台币", "New Taiwan dollar (NTD)"),
  v("指望", "to count on; to rely on"),
  v("孝顺", "filial; to be filial"),
  v("佩服", "to admire"),
]

export const LESSON_1_6_LINE_NOTES: Record<string, MiniLesson[]> = {
  "不好意思，刚刚接到学校电话说小孩不舒服，我要提早下班，可以麻烦你帮我打印这些资料吗？":
    [
      ml(
        "刚刚接到",
        "just got (a call)",
        [
          "刚刚 is “a moment ago” — more immediate than 刚才. 接到 is a result complement: 接 is answering / receiving, 到 means it successfully arrived. 接到电话、接到消息、接到通知.",
          "学校电话说… is spoken shorthand for 学校打电话来说… — the school called and said…",
        ],
        {
          pattern: "刚刚 + 接到 + noun",
          examples: [
            ex("我刚刚接到妈妈的电话。", "I just got a call from my mom."),
            ex(
              "刚刚接到消息，明天放假。",
              "I just got the news — tomorrow is a holiday."
            ),
            ex("她刚才接到通知了。", "She received the notice just now."),
          ],
          compare: [
            {
              label: "this moment",
              hanzi: "刚刚",
              en: "just now (very recent)",
            },
            {
              label: "a bit earlier",
              hanzi: "刚才",
              en: "just now (a short while ago)",
            },
          ],
        }
      ),
      ml(
        "不舒服",
        "unwell / not feeling well",
        [
          "Polite, slightly vague: the kid isn’t well, without naming a disease. Softer than 生病了. You can also say 身体不舒服 or 肚子不舒服.",
        ],
        {
          examples: [
            ex("我今天有点不舒服。", "I’m a bit unwell today."),
            ex(
              "他肚子不舒服，想回家。",
              "His stomach feels bad; he wants to go home."
            ),
            ex(
              "小孩不舒服，我得早点走。",
              "The kid isn’t well — I have to leave early."
            ),
          ],
          compare: [
            { label: "soft", hanzi: "不舒服", en: "not feeling well" },
            { label: "direct", hanzi: "生病了", en: "is sick" },
          ],
        }
      ),
      ml(
        "提早下班",
        "leave work early",
        [
          "提早 + verb = do it earlier than planned: 提早出门、提早睡觉、提早到. 下班 is “get off work.” Pair it with 加班 (work overtime).",
        ],
        {
          pattern: "提早 + V",
          examples: [
            ex("我今天要提早下班。", "I need to leave work early today."),
            ex(
              "我们提早出门吧，怕堵车。",
              "Let’s leave earlier — I’m worried about traffic."
            ),
            ex(
              "他很少加班，常常准时下班。",
              "He rarely works overtime; he usually leaves on time."
            ),
          ],
        }
      ),
      ml(
        "可以麻烦你帮我…吗？",
        "could I trouble you to help me…?",
        [
          "A very polite workplace request. 可以…吗 softens it; 麻烦你 admits you are putting them out; 帮我 + verb is the actual favor. 打印这些资料 = print these materials.",
        ],
        {
          pattern: "可以麻烦你帮我 + V + 吗？",
          examples: [
            ex(
              "可以麻烦你帮我看一下吗？",
              "Could I trouble you to take a look for me?"
            ),
            ex("麻烦你帮我带一杯咖啡。", "Could you grab me a coffee?"),
            ex("可以帮我开门吗？", "Can you open the door for me?"),
          ],
        }
      ),
    ],
  "没问题。生病了？要紧吗？": [
    ml(
      "没问题",
      "no problem",
      [
        "A warm yes to a favor. Then two short follow-up questions: 生病了？ guesses the reason; 要紧吗？ asks how serious it is.",
      ],
      {
        examples: [
          ex(
            "帮我一下，可以吗？没问题。",
            "Can you give me a hand? No problem."
          ),
          ex(
            "这件事没问题，交给我吧。",
            "This is no problem — leave it to me."
          ),
        ],
      }
    ),
    ml(
      "要紧吗？",
      "is it serious?",
      [
        "要紧 = important / serious / urgent. 不要紧 is the everyday “it’s fine / not a big deal.” Asking 要紧吗？ after 生病了 shows concern without demanding details.",
      ],
      {
        examples: [
          ex("他发烧了，要紧吗？", "He has a fever — is it serious?"),
          ex(
            "不要紧，休息一下就好。",
            "It’s nothing serious — just rest a bit."
          ),
          ex(
            "这件事很要紧，今天一定要做完。",
            "This is urgent; it has to be finished today."
          ),
        ],
        compare: [
          { label: "asking", hanzi: "要紧吗？", en: "is it serious?" },
          {
            label: "reassuring",
            hanzi: "不要紧",
            en: "it’s fine / not a big deal",
          },
        ],
      }
    ),
  ],
  "不知道，我等一下带去看医生。": [
    ml(
      "等一下",
      "in a bit / wait a moment",
      [
        "等一下 can mean “wait a second” (to the person in front of you) or “in a little while” (soon). Here it is the second: I’ll take the child to the doctor shortly. 带去 = take (someone) there.",
      ],
      {
        pattern: "等一下 + V",
        examples: [
          ex("等一下，我马上回来。", "Wait a moment — I’ll be right back."),
          ex("我等一下去超市。", "I’m going to the supermarket in a bit."),
          ex(
            "等一下带他去医院。",
            "Take him to the hospital in a little while."
          ),
        ],
      }
    ),
  ],
  "有小孩真累，怪不得出生率越来越低。": [
    ml(
      "怪不得",
      "no wonder",
      [
        "怪不得 + situation = now that I see the reason, it makes sense. You name the cause first (有小孩真累), then 怪不得 + the result. 怪不得他没来 — no wonder he didn’t come.",
      ],
      {
        pattern: "reason，怪不得 + result",
        examples: [
          ex(
            "下雨了，怪不得路上这么多人。",
            "It’s raining — no wonder there are so many people on the road."
          ),
          ex(
            "他昨天没睡，怪不得一直打呵欠。",
            "He didn’t sleep yesterday — no wonder he keeps yawning."
          ),
          ex(
            "怪不得你汉语说得这么好，原来你在台湾住过。",
            "No wonder your Chinese is so good — you lived in Taiwan."
          ),
        ],
      }
    ),
    ml(
      "越来越…",
      "more and more…",
      [
        "越来越 + adjective / verb: a change over time. 越来越低、越来越贵、越来越喜欢. 出生率 is the birth rate — a useful news word in this unit.",
      ],
      {
        pattern: "越来越 + Adj / V",
        examples: [
          ex("天气越来越热。", "The weather is getting hotter and hotter."),
          ex("中文越来越难。", "Chinese is getting harder and harder."),
          ex("出生率越来越低。", "The birth rate keeps falling."),
        ],
      }
    ),
  ],
  "还好啦，大部分时间都很快乐，小孩很可爱。": [
    ml(
      "还好啦",
      "it’s alright / not that bad",
      [
        "还好 softens a complaint: “it’s not as bad as you think.” 啦 keeps it light and spoken. Then the speaker balances 真累 with 快乐 and 可爱.",
      ],
      {
        examples: [
          ex("还好啦，没有那么严重。", "It’s alright — it’s not that serious."),
          ex("考试还好，不算太难。", "The test was okay, not too hard."),
          ex("还好有你帮忙。", "Luckily I had you helping."),
        ],
        compare: [
          {
            label: "downplaying",
            hanzi: "还好啦",
            en: "it’s alright (softening)",
          },
          { label: "lucky", hanzi: "还好…", en: "luckily…" },
        ],
      }
    ),
  ],
  "听说养到大学要500万台币呢！父母老了还不一定能指望他们孝顺。": [
    ml(
      "听说…呢",
      "I heard that…",
      [
        "听说 + claim = I heard (no named source). 呢 at the end adds a “can you believe it” flavor. Compare 我听老师说… when the source matters (lesson 1-1).",
      ],
      {
        pattern: "听说 + statement",
        examples: [
          ex("听说明天会下雨。", "I heard it’s going to rain tomorrow."),
          ex("听说这家店很好吃。", "I heard this place is really good."),
          ex("听说他要搬家了呢！", "I heard he’s moving — can you believe it!"),
        ],
      }
    ),
    ml(
      "台币",
      "New Taiwan dollar",
      [
        "台币 is everyday for 新台币 (NTD). Numbers like 500万 = five million. In Taiwan you will also hear 块 after small amounts: 五十块.",
      ],
      {
        examples: [
          ex("这件衣服八百块台币。", "This shirt is 800 NTD."),
          ex(
            "养一个小孩真的要几百万台币。",
            "Raising a child really costs several million NTD."
          ),
          ex(
            "美金、人民币、台币都不一样。",
            "USD, RMB, and NTD are all different."
          ),
        ],
      }
    ),
    ml(
      "指望 / 孝顺",
      "count on / be filial",
      [
        "指望 + person + verb = count on them to do it. 不一定能指望 = you still might not be able to count on it. 孝顺 is filial piety — caring for and respecting parents. 他们孝顺: 他们 = the children.",
      ],
      {
        examples: [
          ex("别指望我做饭，我不会。", "Don’t count on me to cook — I can’t."),
          ex(
            "老了可以指望孩子吗？",
            "When you’re old, can you count on your kids?"
          ),
          ex("他很孝顺父母。", "He is very filial toward his parents."),
        ],
        compare: [
          {
            label: "count on",
            hanzi: "指望",
            en: "rely on someone for something",
          },
          {
            label: "filial",
            hanzi: "孝顺",
            en: "treat parents with care and respect",
          },
        ],
      }
    ),
  ],
  "没想那么多，现在只希望他们健康快乐地长大就好了。": [
    ml(
      "只希望…就好了",
      "I just hope… and that’s enough",
      [
        "没想那么多 = I don’t think that far / I don’t overthink it. 只希望 + wish + 就好了 = that’s all I ask. 地 turns 健康快乐 into how they grow up: 健康快乐地长大.",
      ],
      {
        pattern: "只希望 + wish + 就好了",
        examples: [
          ex(
            "我只希望你开心就好了。",
            "I just hope you’re happy — that’s enough."
          ),
          ex("只希望考试过了就好了。", "I just hope I pass the test."),
          ex(
            "没想那么多，先做再说。",
            "I’m not overthinking it — I’ll just start."
          ),
        ],
      }
    ),
  ],
  "真佩服你们这些爸爸妈妈。你快去吧。这些就好了吗？": [
    ml(
      "真佩服",
      "I really admire (you)",
      [
        "佩服 is respect mixed with “I couldn’t do what you do.” 真 + reaction, like 真羡慕 in 1-1. 你们这些爸爸妈妈 = you parents (as a group). Then 你快去吧 hurries them out; 这些就好了吗？ checks the printing job.",
      ],
      {
        examples: [
          ex(
            "真佩服你，一个人带两个小孩。",
            "I really admire you — raising two kids on your own."
          ),
          ex(
            "我很佩服会说三种语言的人。",
            "I admire people who speak three languages."
          ),
          ex("这些就好了吗？还是还有？", "Is this all, or is there more?"),
        ],
        compare: [
          {
            label: "admire effort",
            hanzi: "佩服",
            en: "admire (what they can do)",
          },
          { label: "wish I had that", hanzi: "羡慕", en: "envy / lucky you" },
        ],
      }
    ),
  ],
  "对，麻烦你了，谢谢！我先走了。": [
    ml(
      "麻烦你了",
      "sorry for the trouble / thanks for doing this",
      [
        "Said after someone agrees to help, or as you leave. Softer and more grateful than a plain 谢谢. 对 here confirms “yes, that’s all.”",
      ],
      {
        examples: [
          ex(
            "麻烦你了，真不好意思。",
            "Sorry for the trouble — I really appreciate it."
          ),
          ex(
            "今天麻烦你了，下次我请你吃饭。",
            "Thanks for helping today — next time dinner’s on me."
          ),
          ex("那就麻烦你了。", "Then I’ll leave it to you — thanks."),
        ],
      }
    ),
    ml(
      "我先走了",
      "I’m heading out (first)",
      [
        "先 marks that you are leaving before the other person. A standard, polite exit at work or a gathering. Often packed with 谢谢 / 再见.",
      ],
      {
        examples: [
          ex("我先走了，明天见。", "I’m heading out — see you tomorrow."),
          ex("你们继续聊，我先走了。", "You all keep chatting — I’m off."),
          ex(
            "时间不早了，我们先走了。",
            "It’s getting late — we’re heading out."
          ),
        ],
      }
    ),
  ],
}

export const LESSON_1_6_GRAMMAR_FOCUS: MiniLesson[] = [
  ml(
    "可以麻烦你帮我…吗",
    "Could I trouble you to help me…?",
    ["Polite request. 可以麻烦你帮我打印这些资料吗？ 麻烦你 + 帮我 + verb."],
    {
      pattern: "可以麻烦你帮我 + V + 吗？",
      examples: [
        ex("可以麻烦你帮我打印吗？", "Could you print this for me?"),
        ex("可以麻烦你帮我看一下吗？", "Could you take a look for me?"),
        ex("麻烦你帮我带一杯咖啡。", "Could you grab me a coffee?"),
      ],
    },
  ),
  ml(
    "怪不得",
    "No wonder…",
    ["怪不得出生率越来越低. After you hear a reason, 怪不得 + result. “That explains it.”"],
    {
      pattern: "怪不得 + result",
      examples: [
        ex("怪不得你这么累。", "No wonder you’re so tired."),
        ex("怪不得他没来。", "No wonder he didn’t come."),
        ex("怪不得出生率越来越低。", "No wonder the birth rate keeps falling."),
      ],
    },
  ),
  ml(
    "越来越…",
    "More and more…",
    ["出生率越来越低. 越来越 + adj / verb: a change over time."],
    {
      pattern: "越来越 + Adj / V",
      examples: [
        ex("天气越来越冷。", "The weather is getting colder and colder."),
        ex("他越来越忙。", "He’s getting busier and busier."),
        ex("生活越来越贵。", "Life is getting more and more expensive."),
      ],
    },
  ),
  ml(
    "只希望…就好了",
    "I only hope that…",
    ["现在只希望他们健康快乐地长大就好了. 只希望 + wish + 就好了 = that’s all I ask."],
    {
      pattern: "只希望 + situation + 就好了",
      examples: [
        ex("只希望他们健康就好了。", "I only hope they’re healthy."),
        ex("只希望考试顺利就好了。", "I only hope the exam goes smoothly."),
        ex("只希望别迟到就好了。", "I only hope we’re not late."),
      ],
    },
  ),
  ml(
    "我先走了 / 麻烦你了",
    "Leaving politely",
    ["对，麻烦你了，谢谢！我先走了. 麻烦你了 thanks someone who just helped. 我先走了 is how you exit a conversation at work."],
    {
      pattern: "麻烦你了 / 我先走了",
      examples: [
        ex("麻烦你了，谢谢！", "Sorry for the trouble — thanks!"),
        ex("我先走了。", "I’ll head out now."),
        ex("那我先走了，明天见。", "I’ll head out then. See you tomorrow."),
      ],
    },
  ),
]

