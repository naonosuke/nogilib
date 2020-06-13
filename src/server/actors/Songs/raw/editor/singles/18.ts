import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { FukujinType, SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const EIGHTEENTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Nigemizu,
    type: SongType.Title,
    creators: {
      lyrics: ["秋元康"],
      compose: ["谷村庸平"],
      arrange: ["谷村庸平"],
      direct: ["山岸聖太"],
    },
    center: [MemberNameKey.OozonoMomoko, MemberNameKey.YodaYuuki],
    fukujin: FukujinType.RowOneTwo,
    formations: {
      firstRow: [
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.YodaYuuki,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoriMiona,
      ],
      secondRow: [
        MemberNameKey.HoshinoMinami,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.IkutaErika,
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.EtouMisa,
        MemberNameKey.TakayamaKazumi,
      ],
      thirdRow: [
        MemberNameKey.ItouMarika,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.IkomaRina,
        MemberNameKey.SakuraiReika,
        MemberNameKey.WakatsukiYumi,
        MemberNameKey.InoueSayuri,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Under,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["白土亨"],
      arrange: ["遠藤ナオキ"],
      direct: ["金森孝宏"],
    },
    center: [MemberNameKey.NakamotoHimeka, MemberNameKey.KitanoHinako],
    formations: {
      firstRow: [
        MemberNameKey.HiguchiHina,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.NakamotoHimeka,
        MemberNameKey.KitanoHinako,
        MemberNameKey.TeradaRanze,
        MemberNameKey.SaitouYuuri,
      ],
      secondRow: [
        MemberNameKey.NakadaKana,
        MemberNameKey.YamazakiRena,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.SaitouChiharu,
      ],
      thirdRow: [
        MemberNameKey.NoujouAmi,
        MemberNameKey.SagaraIori,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Onnahahitorijanemurenai,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小形誠"],
      arrange: ["高橋浩一郎"],
      direct: ["萩原健太郎"],
    },
    center: [MemberNameKey.OozonoMomoko, MemberNameKey.YodaYuuki],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.Hitonatsunonagasayori,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["aokado"],
      arrange: ["aokado"],
    },
    center: [MemberNameKey.AkimotoManatsu, MemberNameKey.MatsumuraSayuri],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
  createSongRaw({
    title: SongTitle.LiveShin,
    type: SongType.SecondGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["SaSA"],
      arrange: ["SaSA"],
      direct: ["伊藤衆人"],
    },
    center: [MemberNameKey.HoriMiona],
    formations: {
      firstRow: [
        MemberNameKey.TeradaRanze,
        MemberNameKey.HoriMiona,
        MemberNameKey.KitanoHinako,
      ],
      secondRow: [
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.ShinuchiMai,
      ],
      thirdRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouKarin,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
      ],
    },
  }),

  createSongRaw({
    title: SongTitle.Mirainokotae,
    type: SongType.ThirdGeneration,
    creators: {
      lyrics: ["秋元康"],
      compose: ["板垣祐介"],
      arrange: ["板垣祐介"],
      direct: ["福島真希"],
    },
    center: [MemberNameKey.KuboShiori, MemberNameKey.YamashitaMizuki],
    formations: {
      firstRow: [
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.ItouRiria,
      ],
      secondRow: [
        MemberNameKey.IwamotoRenka,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.YodaYuuki,
        MemberNameKey.SakaguchiTamami,
      ],
      thirdRow: [
        MemberNameKey.NakamuraReno,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.SatouKaede,
      ],
    },
  }),

  createSongRaw({
    title: SongTitle.Naitatteiijanaika,
    type: SongType.Selected,
    creators: {
      lyrics: ["秋元康"],
      compose: ["K-WONDER", "SAS3"],
      arrange: ["遠藤ナオキ"],
    },
    center: [MemberNameKey.TakayamaKazumi],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IkomaRina,
        MemberNameKey.ItouMarika,
        MemberNameKey.InoueSayuri,
        MemberNameKey.EtouMisa,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.SakuraiReika,
        MemberNameKey.ShiraishiMai,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.NishinoNanase,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YodaYuuki,
        MemberNameKey.WakatsukiYumi,
      ],
    },
  }),
];
