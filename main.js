'use strict';

{
    function setWord() {
      word = words.splice(0,1)[0];
      target.textContent = word;
      translation.textContent = translations[word]; // 日本語の単語を表示
      loc = 0;
    }
    
    const originalWords = [
      'makahannya haramita shingyo',
      'kanjizaibosatsu gyojinhannya haramitaji',
      'shokengoonkaiku doissaikuyaku sharishi',
      'shikifuiku kufuishiki',
      'shikisokuzeku kusokuzeshiki',
      'jyusogyoshiki yakubunyoze sharishi',
      'zeshohoukuso fushofumetu',
      'fukufujyo fuzofugen',
      'zekokuuchu mushikimujyu sogyoshiki',
      'mugennibi zeshinni mushikishoko misokuhou',
      'mugenkai naishi muishikikai',
      'mumumyo yakumumumyojin',
      'naishi muroushi yakumuroushijin',
      
      'mukushumetsudo muchiyakumutoku',
      'imushotokuko bodaisatta ehannyaharamitako',
      'shinmukeige mukeigeko muukufu',
      'onriissai tendoumuso kukyounehan',
      'sanzeshobutsu ehannyaharamitako',
      'tokuanokutara sanmyakusanbodai',
      'kochihannya haramita zedaijinshu',
      'zedaimyoshu zemujyoshu zemutoudoushu',
      'noujyoissaiku shinjitsufuko',
      'kosetsuhannya haramitashu',
      'sokusetsushuwatsu gyateigyatei',
      'haragyatei harasougyatei',
      'boujisowaka hannyashingyo',

      // https://www.nhk-fdn.or.jp/han/pdf/hannyashingyou.pdf
      // https://www.youtube.com/watch?v=V-PN1QhyduY

    ];
    let words = [...originalWords]; // ゲームで使う単語リスト
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');
    const translation = document.getElementById('translation'); // 日本語の単語を表示するための要素
  const resetButton = document.getElementById('reset'); // 追加
  const translations = { // 単語とその日本語の対応をマッピング

    'makahannya haramita shingyo':'摩訶般若 波羅蜜多 心経',
    'kanjizaibosatsu gyojinhannya haramitaji': '観自在菩薩 行深般若 波羅蜜多時',
    'shokengoonkaiku doissaikuyaku sharishi': '照見五蘊皆空 度一切苦厄 舎利子',
    'shikifuiku kufuishiki': '色不異空 空不異色',
    'shikisokuzeku kusokuzeshiki': '色即是空 空即是色',
    'jyusogyoshiki yakubunyoze sharishi':'受想行識 亦復如是 舎利子',
    'zeshohoukuso fushofumetu':'是諸法空相 不生不滅',
    'fukufujyo fuzofugen':'不垢不浄 不増不減',
    'zekokuuchu mushikimujyu sogyoshiki' :'是故空中 無色無受 想行識',
    'mugennibi zeshinni mushikishoko misokuhou':'無眼耳鼻 舌身意 無色声香 味触法',
    'mugenkai naishi muishikikai':'無眼界 乃至 無意識界',
    'mumumyo yakumumumyojin':'無無明 亦無無明尽',
    'naishi muroushi yakumuroushijin':'乃至 無老死 亦無老死尽',
    
    'mukushumetsudo muchiyakumutoku':'無苦集滅道 無智亦無得',
    'imushotokuko bodaisatta ehannyaharamitako':'以無所得故 菩提薩埵 依般若波羅蜜多故',
    'shinmukeige mukeigeko muukufu':'心無罣礙 無罣礙故 無有恐怖',
    'onriissai tendoumuso kukyounehan':'遠離一切 顛倒夢想 究竟涅槃',
    'sanzeshobutsu ehannyaharamitako':'三世諸仏 依般若波羅蜜多故',
    'tokuanokutara sanmyakusanbodai':'得阿耨多羅 三藐三菩提',
    'kochihannya haramita zedaijinshu':'故知般若 波羅蜜多 是大神呪',
    'zedaimyoshu zemujyoshu zemutoudoushu':'是大明呪 是無上呪 是無等等呪',
    'noujyoissaiku shinjitsufuko':'能除一切苦 真実不虚',
    'kosetsuhannya haramitashu':'故説般若 波羅蜜多呪',
    'sokusetsushuwatsu gyateigyatei':'即説呪日 羯諦羯諦',
    'haragyatei harasougyatei':'波羅羯帝 波羅僧羯帝',
    'boujisowaka hannyashingyo':'菩提薩婆訶 般若心経',

  };
// "244秒かかった"

    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      startTime = Date.now();
      setWord(); // この行をここに移動
    });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }
   
    loc++;
    
    // 1: _ed, 2: __d, 3: ___
    target.textContent = '_'.repeat(loc) + word.substring(loc);
 
    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `素晴らしい!! ${elapsedTime} 秒です!`;
        const result2 = document.getElementById('result2');
        result2.textContent = `ステキな一日になりますよーに!!＼(^o^)／`;
        resetButton.style.display = 'block'; // この行を追加
        return;
      }
      setWord();
    }
  });
  // この部分を追加
  resetButton.addEventListener('click', () => {
    words = [...originalWords]; // 単語リストをリセット
    setWord();
    const result = document.getElementById('result');
    result.textContent = '';
    const result2 = document.getElementById('result2');
    result2.textContent = '';
    resetButton.style.display = 'none'; // ボタンを非表示にする
    isPlaying = false; // ゲームの状態をリセット
  });
}
