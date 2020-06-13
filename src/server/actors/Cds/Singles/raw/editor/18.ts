import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const EIGHTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Nigemizu,
  number: "18",
  release: "2017-08-09",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["逃げ水"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["女は一人じゃ眠れない"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["ひと夏の長さより…"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["泣いたっていいじゃないか?"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["アンダー"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ライブ神"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["未来の答え"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.HiguchiHina,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.KitanoHinako,
    MemberNameKey.TeradaRanze,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.NakadaKana,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouKarin,
    MemberNameKey.ItouJunna,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SagaraIori,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.WadaMaaya,
  ],
  trainees: [
    MemberNameKey.ItouRiria,
    MemberNameKey.IwamotoRenka,
    MemberNameKey.UmezawaMinami,
    MemberNameKey.KuboShiori,
    MemberNameKey.SakaguchiTamami,
    MemberNameKey.SatouKaede,
    MemberNameKey.NakamuraReno,
    MemberNameKey.MukaiHazuki,
    MemberNameKey.YamashitaMizuki,
    MemberNameKey.YoshidaAyanoChristie,
  ],
});
