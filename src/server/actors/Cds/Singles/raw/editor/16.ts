import { SingleRaw } from "server/actors/Cds/Singles/models";
import { createSingleRaw } from "server/actors/Cds/Singles/raw/creator";
import { SingleTitle } from "server/constants/cds";
import { CdType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SONGS } from "server/constants/songs";

export const SIXTEENTH_SINGLE: SingleRaw = createSingleRaw({
  title: SingleTitle.Sayonaranoimi,
  number: "16",
  release: "2016-11-09",
  cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  songs: [
    {
      title: SONGS["サヨナラの意味"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["孤独な青空"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      title: SONGS["あの教室"].title,
      inCdType: [CdType.A],
    },
    {
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.B],
    },
    {
      title: SONGS["2度目のキスから"].title,
      inCdType: [CdType.C],
    },
    {
      title: SONGS["君に贈る花がない"].title,
      inCdType: [CdType.D],
    },
    {
      title: SONGS["ないものねだり"].title,
      inCdType: [CdType.T],
    },
  ],
  underMembers: [
    MemberNameKey.KawamuraMahiro,
    MemberNameKey.HiguchiHina,
    MemberNameKey.TeradaRanze,
    MemberNameKey.NakadaKana,
    MemberNameKey.NoujouAmi,
    MemberNameKey.SaitouYuuri,
    MemberNameKey.YamazakiRena,
    MemberNameKey.WatanabeMiria,
    MemberNameKey.SuzukiAyane,
    MemberNameKey.SaitouChiharu,
    MemberNameKey.ItouJunna,
    MemberNameKey.WadaMaaya,
    MemberNameKey.ItouKarin,
    MemberNameKey.KawagoHina,
    MemberNameKey.SasakiKotoko,
    MemberNameKey.SagaraIori,
  ],
});
