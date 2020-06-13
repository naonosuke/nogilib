import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SECOND_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Oideshampo,
  number: "2",
  release: "2012-05-02",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.T],
  songs: [
    {
      title: SONGS["おいでシャンプー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["心の薬"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.T],
    },
    {
      title: SONGS["偶然を言い訳にして"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["水玉模様"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["狼に口笛を"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["ハウス!"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.FukagawaMai,
    MemberNameKey.ItouMarika,
    MemberNameKey.WakatsukiYumi,
    MemberNameKey.KawagoHina,
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.NagashimaSeira,
    MemberNameKey.EtouMisa,
    MemberNameKey.ItouNene,
    MemberNameKey.SaitouAsuka,
    MemberNameKey.NakamotoHimeka,
    MemberNameKey.HiguchiHina,
    MemberNameKey.KashiwaYukina,
    MemberNameKey.AndouMikumo,
    MemberNameKey.YamatoRina,
    MemberNameKey.NoujouAmi,
    MemberNameKey.WadaMaaya,
  ],
  skips: [MemberNameKey.AkimotoManatsu],
});
