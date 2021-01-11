import { createSongRaw } from 'server/actors/Songs/raw/creator';
import { SongRaw } from 'server/actors/Songs/models';
import { SONGS } from 'server/actors/Songs/constants/songTitle';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';

export const TWENTY_SIXTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS['僕は僕を好きになる'].title,
    type: SongType.Title,
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: [],
      direct: ['奥山大史'],
    },
    center: [MemberNameKey.YamashitaMizuki],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        MemberNameKey.IkutaErika,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
      ],
      secondRow: [
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.EndouSakura,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.HoriMiona,
        MemberNameKey.YodaYuuki,
        MemberNameKey.KakiHaruka,
        MemberNameKey.AkimotoManatsu,
      ],
      thirdRow: [
        MemberNameKey.ShinuchiMai,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TamuraMayu,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.TakayamaKazumi,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['冷たい水の中'].title,
    type: SongType.Solo,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: ['山戸結希'],
    },
    solo: MemberNameKey.HoriMiona,
  }),
  createSongRaw({
    title: SONGS['Out of the blue'].title,
    type: SongType.FourthGeneration,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [MemberNameKey.HayakawaSeira],
    formations: {
      firstRow: [
        MemberNameKey.EndouSakura,
        MemberNameKey.KakiHaruka,
        MemberNameKey.KakehashiSayaka,
        MemberNameKey.KanagawaSaya,
        MemberNameKey.KitagawaYuri,
        MemberNameKey.KuromiHaruka,
        MemberNameKey.SatouRika,
        MemberNameKey.ShibataYuna,
        MemberNameKey.SeimiyaRei,
        MemberNameKey.TamuraMayu,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.HayakawaSeira,
        MemberNameKey.HayashiRuna,
        MemberNameKey.MatsuoMiyu,
        MemberNameKey.YakuboMio,
        MemberNameKey.YumikiNao,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['口ほどにもないKISS'].title,
    type: SongType.Under,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [MemberNameKey.SakaguchiTamami],
    formations: {
      firstRow: [
        MemberNameKey.ItouJunna,
        MemberNameKey.ItouRiria,
        MemberNameKey.KitanoHinako,
        MemberNameKey.SakaguchiTamami,
        MemberNameKey.SatouKaede,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NakamuraReno,
        MemberNameKey.HiguchiHina,
        MemberNameKey.MukaiHazuki,
        MemberNameKey.YamazakiRena,
        MemberNameKey.YoshidaAyanoChristie,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['明日がある理由'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [MemberNameKey.IwamotoRenka],
    formations: {
      firstRow: [
        MemberNameKey.AkimotoManatsu,
        MemberNameKey.IkutaErika,
        MemberNameKey.IwamotoRenka,
        MemberNameKey.UmezawaMinami,
        MemberNameKey.EndouSakura,
        MemberNameKey.OozonoMomoko,
        MemberNameKey.KakiHaruka,
        MemberNameKey.KitanoHinako,
        MemberNameKey.KuboShiori,
        MemberNameKey.SaitouAsuka,
        MemberNameKey.ShinuchiMai,
        MemberNameKey.TakayamaKazumi,
        MemberNameKey.TsutsuiAyame,
        MemberNameKey.HoshinoMinami,
        MemberNameKey.HoriMiona,
        MemberNameKey.MatsumuraSayuri,
        MemberNameKey.YamashitaMizuki,
        MemberNameKey.YodaYuuki,
      ],
    },
  }),
  createSongRaw({
    title: SONGS['Wilderness world'].title,
    type: SongType.Coupling,
    creators: {
      lyrics: ['秋元康'],
      compose: [],
      arrange: [],
      direct: [],
    },
    center: [],
  }),
  createSongRaw({
    title: SONGS['友情ピアス'].title,
    type: SongType.Unit,
    creators: {
      lyrics: ['秋元康'],
    },
    formations: {
      firstRow: [MemberNameKey.EndouSakura, MemberNameKey.OozonoMomoko],
    },
  }),
];
