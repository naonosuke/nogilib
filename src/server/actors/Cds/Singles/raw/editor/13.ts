import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SINGLES } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Songs/constants";
import { SONGS } from "server/constants/songs";

export const THIRTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SINGLES["今、話したい誰かがいる"].title,
  number: "13",
  release: "2015-10-28",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["今、話したい誰かがいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["ポピパッパパー"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["大人への近道"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["悲しみの忘れ方"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["隙間"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.KitanoHinako,
    MemberNameKey.HoriMiona,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.ShinuchiMai,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.NoujouAmi,
    MemberNameKey.HiguchiHina,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.KawagoHina,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.YamazakiRena,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
    MemberNameKey.ItouJunna,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.ItouKarin,
    MemberNameKey.WadaMaaya,
  ],
});
