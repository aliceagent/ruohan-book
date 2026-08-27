import type { MiniLesson, VocabItem } from "@/lib/types"
import { ex, ml, v } from "./note-helpers"

export const LESSON_1_10_CORE_VOCAB: VocabItem[] = [
  v("宵夜", "late-night snack"),
  v("生煎包", "pan-fried bun (shengjianbao)"),
  v("消化", "to digest"),
  v("抽烟〔吸烟〕", "to smoke"),
  v("喝酒", "to drink alcohol"),
  v("戒烟", "to quit smoking"),
  v("戒不掉", "can’t quit (it)"),
  v("说不定", "maybe; perhaps"),
  v("改掉", "to get rid of (a habit)"),
  v("晚睡", "to stay up late"),
  v("不知不觉", "without noticing"),
  v("要不然", "otherwise / in that case"),
  v("芒果冰", "mango ice (shaved ice)"),
]

export const LESSON_1_10_LINE_NOTES: Record<string, MiniLesson[]> = {
  "你要不要吃宵夜？我要去买生煎包。": [
    ml(
      "要不要",
      "want to… or not?",
      [
        "要不要 + verb is a soft offer, same family as lesson 1-4’s 要不要一起去. It expects a yes or a polite no, not a long explanation.",
      ],
      {
        pattern: "要不要 + V",
        examples: [
          ex("要不要喝咖啡？", "Want some coffee?"),
          ex("要不要我帮你？", "Want me to help you?"),
          ex("你要不要一起去？", "Want to go together?"),
        ],
      }
    ),
    ml(
      "宵夜 / 生煎包",
      "late-night snack / pan-fried buns",
      [
        "宵夜 (also written 消夜) is food eaten late, after dinner, often after 9 or 10 p.m. 生煎包 are pan-fried pork buns — a classic night-market order. 我要去买… states the plan, not just a question.",
      ],
      {
        examples: [
          ex("我很少吃宵夜。", "I rarely eat a late-night snack."),
          ex("这家的生煎包很有名。", "This place’s pan-fried buns are famous."),
          ex(
            "晚上十点去买宵夜刚刚好。",
            "Ten at night is just right for a late snack."
          ),
        ],
      }
    ),
  ],
  "我不吃宵夜。吃宵夜不好吧，要睡觉了，不好消化。": [
    ml(
      "…不好吧",
      "that’s not great, right?",
      [
        "Adj + 吧 seeks agreement: 不好吧、太晚了吧、有点贵吧. Here it is mild advice, not a scolding. 我不吃宵夜 is a habit statement (I don’t do that).",
      ],
      {
        pattern: "statement + 吧",
        examples: [
          ex("现在出去有点晚吧。", "It’s a bit late to go out now, isn’t it?"),
          ex("这样对身体不好吧。", "That’s not great for your body, right?"),
          ex("这件太贵了吧。", "This is too expensive, isn’t it?"),
        ],
      }
    ),
    ml(
      "不好消化",
      "hard to digest",
      [
        "好 / 不好 + verb can mean easy / hard to do: 不好消化、不好懂、好吃. 要睡觉了 gives the reason — you’re about to sleep, so heavy food sits badly.",
      ],
      {
        examples: [
          ex("油的东西不好消化。", "Greasy food is hard to digest."),
          ex("这课不好懂。", "This lesson is hard to understand."),
          ex(
            "要睡觉了，别喝咖啡。",
            "You’re about to sleep — don’t drink coffee."
          ),
        ],
        compare: [
          {
            label: "hard to digest",
            hanzi: "不好消化",
            en: "doesn’t digest well",
          },
          {
            label: "easy / tasty",
            hanzi: "好吃 / 好消化",
            en: "tasty / easy to digest",
          },
        ],
      }
    ),
  ],
  "我不吃早餐，没问题。": [
    ml(
      "不吃…，没问题",
      "I skip … — it’s fine",
      [
        "A stubborn, joking defense: I already skip breakfast, so skipping a night snack isn’t a problem. 没问题 here means “no big deal for me,” not “I agree with you.”",
      ],
      {
        examples: [
          ex("我不吃辣，没问题。", "I don’t eat spicy food — it’s fine."),
          ex("少睡一点，没问题。", "A little less sleep is no problem."),
          ex("他不吃肉，没问题。", "He doesn’t eat meat — that’s okay."),
        ],
      }
    ),
  ],
  "你好像坏习惯不少，又抽烟〔吸烟〕又喝酒。": [
    ml(
      "又…又…",
      "both … and … (stacking habits)",
      [
        "Same pattern as 又新鲜又便宜, here listing two bad habits. 好像 + observation = it seems… 坏习惯不少 = quite a few bad habits (不少 = not few).",
      ],
      {
        pattern: "又 + V + 又 + V",
        examples: [
          ex("他又抽烟又喝酒。", "He both smokes and drinks."),
          ex("我又累又饿。", "I’m both tired and hungry."),
          ex("她坏习惯不少。", "She’s got quite a few bad habits."),
        ],
      }
    ),
    ml(
      "抽烟〔吸烟〕",
      "to smoke — two wordings",
      [
        "The dialogue uses 抽烟; the textbook notes 〔吸烟〕. 抽烟 is everyday; 吸烟 is a bit more formal / public-sign language (请勿吸烟). Learn both forms of the key.",
      ],
      {
        examples: [
          ex("这里不能抽烟。", "You can’t smoke here."),
          ex("请勿吸烟。", "No smoking. (sign)"),
          ex("他抽烟抽得很凶。", "He smokes heavily."),
        ],
        compare: [
          { label: "spoken", hanzi: "抽烟", en: "smoke (everyday)" },
          {
            label: "textbook note",
            hanzi: "吸烟",
            en: "smoke (more formal / signs)",
          },
        ],
      }
    ),
  ],
  "想戒烟啊！戒不掉，太难了。": [
    ml(
      "戒烟 / 戒不掉",
      "quit smoking / can’t quit",
      [
        "戒 + noun = quit / give up: 戒烟、戒酒、戒甜食. 戒不掉 is the potential complement: 不掉 = fail to get rid of it. Positive: 戒得掉. 想…啊！ admits the wish; 太难了 is the punchline.",
      ],
      {
        pattern: "戒 + noun    戒得掉 / 戒不掉",
        examples: [
          ex("我想戒烟，可是戒不掉。", "I want to quit smoking, but I can’t."),
          ex("酒他戒掉了。", "He quit drinking."),
          ex("甜食你戒得掉吗？", "Can you give up sweets?"),
        ],
        compare: [
          {
            label: "succeed",
            hanzi: "戒得掉 / 戒掉了",
            en: "can quit / have quit",
          },
          { label: "fail", hanzi: "戒不掉", en: "can’t quit it" },
        ],
      }
    ),
  ],
  "交个女朋友吧，说不定立刻改掉坏习惯。": [
    ml(
      "说不定",
      "maybe / you never know",
      [
        "说不定 + outcome = it might just happen. More spoken than 可能. 交个女朋友吧 is a suggestion (吧). 立刻改掉 = drop the habits overnight. 改掉 is another result: 改 + 掉.",
      ],
      {
        examples: [
          ex("说不定他已经到了。", "Maybe he’s already here."),
          ex("交个朋友说不定会好一点。", "Making a friend might help."),
          ex("你得改掉这个坏习惯。", "You need to drop this bad habit."),
        ],
        compare: [
          {
            label: "spoken maybe",
            hanzi: "说不定",
            en: "might / you never know",
          },
          { label: "neutral maybe", hanzi: "可能", en: "possibly" },
        ],
      }
    ),
  ],
  "希望如此，不过要是我的女友要我改这改那的也很烦。你呢？你没有坏习惯？": [
    ml(
      "改这改那",
      "change this, change that",
      [
        "希望如此 = I hope that’s true. 改这改那的 stacks 这 / 那 after the same verb: nagging about every little thing. 的 at the end turns it into a situation. 也很烦 = that would be annoying too.",
      ],
      {
        pattern: "V 这 V 那",
        examples: [
          ex("她一天到晚说这说那。", "She talks about this and that all day."),
          ex(
            "别问这问那的，先吃饭。",
            "Stop asking this and that — eat first."
          ),
          ex(
            "要是天天改这改那，谁受得了。",
            "If it’s change this, change that every day, who could stand it."
          ),
        ],
      }
    ),
    ml(
      "你呢？你没有坏习惯？",
      "what about you? you have no bad habits?",
      [
        "你呢？ tosses the question back. The second 你没有坏习惯？ is teasing — it expects “of course I do.”",
      ],
      {
        examples: [
          ex("我累了。你呢？", "I’m tired. You?"),
          ex("你真的没有坏习惯吗？", "You really don’t have any bad habits?"),
          ex(
            "希望如此，不过我不太信。",
            "I hope so, but I don’t quite believe it."
          ),
        ],
      }
    ),
  ],
  "Hmm. 我的坏习惯大概是晚睡吧，每次都想早点睡，一上网，不知不觉就半夜1点了。":
    [
      ml(
        "一…就…",
        "as soon as …, then …",
        [
          "The line starts with English Hmm. on purpose — a thinking sound before the confession. 一 + verb，就 + result: the second thing follows as soon as the first happens. 一上网，就半夜了.",
        ],
        {
          pattern: "一 + V，就 + result",
          examples: [
            ex("我一回家就睡觉。", "As soon as I get home, I sleep."),
            ex("他一喝酒就脸红。", "As soon as he drinks, his face turns red."),
            ex(
              "一上课我就想睡觉。",
              "As soon as class starts I want to sleep."
            ),
          ],
        }
      ),
      ml(
        "不知不觉",
        "without noticing / before you know it",
        [
          "不知不觉（就）+ time / result: time slipped by. 大概是晚睡吧 hedges the confession. 每次都想早点睡 = every time I mean to sleep early.",
        ],
        {
          examples: [
            ex("不知不觉就夏天了。", "Before I knew it, it was summer."),
            ex(
              "我们聊着聊着，不知不觉到了十二点。",
              "We talked and talked, and it was midnight before we noticed."
            ),
            ex(
              "我的坏习惯大概是爱迟到吧。",
              "My bad habit is probably being late."
            ),
          ],
        }
      ),
    ],
  "那更应该要吃宵夜！你真的不要？我去买了！": [
    ml(
      "更应该",
      "even more reason to…",
      [
        "更应该 + verb = then you especially should. 那 points back to “you stay up until 1 a.m.” 你真的不要？ pushes once more; 我去买了！ is already walking out — 了 marks a decided action.",
      ],
      {
        examples: [
          ex(
            "你生病了，更应该休息。",
            "You’re sick — you should rest even more."
          ),
          ex(
            "这么晚了，更应该吃一点。",
            "It’s so late — even more reason to eat something."
          ),
          ex(
            "你真的不要？那我走了。",
            "You really don’t want any? Then I’m going."
          ),
        ],
      }
    ),
  ],
  "要不然帮我带一碗芒果冰好了，好热！": [
    ml(
      "要不然 / 帮我带…",
      "in that case / bring me back…",
      [
        "要不然 here is “if that’s how it is / otherwise then…” — giving in with a new request. 帮我带 + food = pick it up for me (you’re already going). …好了 is the same on-the-spot decision as 要不…好了 in 1-7. 好热！ is the excuse.",
      ],
      {
        pattern: "要不然 + request + 好了",
        examples: [
          ex("要不然明天再去好了。", "Otherwise let’s just go tomorrow."),
          ex("帮我带一杯咖啡。", "Grab me a coffee."),
          ex("要不然你先走好了。", "In that case you go ahead."),
        ],
      }
    ),
  ],
}
