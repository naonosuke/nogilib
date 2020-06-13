import { MemberNameKey } from "server/actors/Members/constants/memberName";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/actors/Songs/constants/songType";
import { SONGS } from "server/actors/Songs/constants/songTitle";

export const THIRD_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["走れ!Bicycle"].title,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Shusui", "伊藤涼", "木村篤史", "ヒロイズム"],
      arrange: ["湯浅篤"],
      direct: ["中島哲也"],
    },
    center: [MemberNameKey.IkomaRina],
    fukujin: [
      MemberNameKey.IkutaErika,
      MemberNameKey.IkomaRina,
      MemberNameKey.HoshinoMinami,
      MemberNameKey.HashimotoNanami,
      MemberNameKey.ShiraishiMai,
      MemberNameKey.MatsumuraSayuri,
      MemberNameKey.NishinoNanase,
    ],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.SakuraiReika,
      ],
      secondRow: [
        MemberNameKey.NakadaKana,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.NishinoNanase,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.SaitouYuuri,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.InoueSayuri,
        MemberNameKey.IchikiRena,
        MemberNameKey.ItouMarika,
        MemberNameKey.FukagawaMai,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["涙がまだ悲しみだった頃"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["内田智之"],
      arrange: ["TATOO"],
      direct: ["関和亮"],
    },
    center: [MemberNameKey.ItouNene],
    formations: {
      firstRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.ItouNene,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.EtouMisa,
        MemberNameKey.NoujouAmi,
        MemberNameKey.KawagoHina,
      ],
      thirdRow: [
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.KashiwaYukina,
        MemberNameKey.YamatoRina,
        MemberNameKey.NagashimaSeira,
      ],
      fourthRow: [
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.AndouMikumo,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.IwaseYumiko,
        MemberNameKey.WadaMaaya,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.SaitouChiharu,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["せっかちなかたつむり"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["山本加津彦"],
      arrange: ["湯浅篤"],
      direct: ["中村太洸"],
    },
    center: [MemberNameKey.MatsumuraSayuri],
    formations: {
      firstRow: [
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.MatsumuraSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["人はなぜ走るのか?"].title,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["キタムラタケシ", "田上陽一"],
      arrange: ["田上陽一"],
      direct: ["久保茂昭"],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.IchikiRena,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.KashiwaYukina,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NagashimaSeira,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.MiyazawaSeira,
        MemberNameKey.YamatoRina,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["音が出ないギター"].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Jam9", "ArmySlick"],
      arrange: ["シライシ紗トリ"],
      direct: ["丸山健志"],
    },
    center: [MemberNameKey.IkomaRina],
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.IchikiRena,
        MemberNameKey.ItouNene,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.IwaseYumiko,
        MemberNameKey.EtouMisa,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouYuuri,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NakadaKana,
        MemberNameKey.NishinoNanase,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HashimotoNanami,
        MemberNameKey.FukagawaMai,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["海流の島よ"].title,
    type: SongType.Unit,
    creators: {
      lyrics: ["秋元康"],
      compose: ["Akira Sunset"],
      arrange: ["京田誠一"],
    },
    center: [MemberNameKey.SaitouAsuka],
    formations: {
      firstRow: [
        MemberNameKey.AndouMikumo,
        MemberNameKey.KawagoHina,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.HatanakaSeira,
        MemberNameKey.HiguchiHina,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
];
