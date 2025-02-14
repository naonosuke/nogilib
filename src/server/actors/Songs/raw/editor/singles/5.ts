import { SongRaw } from 'server/actors/Songs/models';
import { createSongRaw } from 'server/actors/Songs/raw/creator';

export const FIFTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: '君の名は希望',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '有木竜郎'],
      direct: ['山下敦弘'],
    },
    center: ['ikomarina'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: ['ikutaerika', 'ikomarina', 'hoshinominami'],
      secondRow: [
        'sakuraireika',
        'hashimotonanami',
        'shiraishimai',
        'matsumurasayuri',
        'akimotomanatsu',
      ],
      thirdRow: [
        'itounene',
        'nakadakana',
        'inouesayuri',
        'nishinonanase',
        'wakatsukiyumi',
        'fukagawamai',
        'nagashimaseira',
        'takayamakazumi',
      ],
    },
  }),
  createSongRaw({
    title: '13日の金曜日',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['網本ナオノブ'],
      arrange: ['湯浅篤'],
      direct: ['山田篤宏'],
    },
    center: ['saitouyuuri'],
    formations: {
      firstRow: ['itoumarika', 'saitouyuuri', 'saitouasuka'],
      secondRow: ['kawamuramahiro', 'etoumisa', 'noujouami', 'ichikirena'],
      thirdRow: [
        'yamatorina',
        'wadamaaya',
        'nakamotohimeka',
        'saitouchiharu',
        'kashiwayukina',
        'andoumikumo',
        'hatanakaseira',
        'higuchihina',
        'kawagohina',
        'miyazawaseira',
      ],
    },
  }),
  createSongRaw({
    title: 'シャキイズム',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['岡本健介'],
      arrange: ['岡本健介'],
      direct: ['柳沢翔'],
    },
    center: ['ikomarina', 'hoshinominami'],
    formations: {
      firstRow: [
        'ikomarina',
        'hoshinominami',
        'akimotomanatsu',
        'ikutaerika',
        'itounene',
        'inouesayuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nagashimaseira',
        'nishinonanase',
        'hashimotonanami',
        'fukagawamai',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'ロマンティックいか焼き',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['横健介'],
      arrange: ['重永亮介'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itounene',
        'inouesayuri',
        'sakuraireika',
        'shiraishimai',
        'takayamakazumi',
        'nakadakana',
        'nagashimaseira',
        'nishinonanase',
        'hashimotonanami',
        'fukagawamai',
        'hoshinominami',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: 'でこぴん',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
      direct: ['中村太洸'],
    },
    formations: {
      firstRow: [
        'shiraishimai',
        'takayamakazumi',
        'hashimotonanami',
        'fukagawamai',
        'matsumurasayuri',
      ],
    },
  }),
  createSongRaw({
    title: 'サイコキネシスの可能性',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中土智博'],
      arrange: ['中土智博'],
      direct: ['中村太洸'],
    },
    center: ['sakuraireika', 'nishinonanase'],
    formations: {
      firstRow: [
        'akimotomanatsu',
        'itounene',
        'inouesayuri',
        'sakuraireika',
        'nakadakana',
        'nagashimaseira',
        'nishinonanase',
        'wakatsukiyumi',
      ],
    },
  }),
];
