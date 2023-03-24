window.addEventListener('load',() => {
    // 音声データの習得
        // 応援歌
        const nishioka = new Audio("https://o289.github.io/audioList/audio/audio1.mp3");
        const nakamura = new Audio("https://o289.github.io/audioList/audio/audio2.mp3");
        const yamakawa = new Audio("https://o289.github.io/audioList/audio/audio3.mp3");
        const ogata = new Audio("https://o289.github.io/audioList/audio/audio4.mp3");
        const maeda = new Audio("https://o289.github.io/audioList/audio/audio5.mp3");
        const imaoka = new Audio("https://o289.github.io/audioList/audio/audio6.mp3");
        const rose = new Audio("https://o289.github.io/audioList/audio/audio7.mp3");
        const haru = new Audio("https://o289.github.io/audioList/audio/audio8.mp3");
        const Chance = new Audio("https://o289.github.io/audioList/audio/audio9.mp3");
        const arai = new Audio("https://o289.github.io/audioList/audio/audio10.mp3");
        const Chance2 = new Audio("https://o289.github.io/audioList/audio/audio11.mp3");
        const fukudome = new Audio("https://o289.github.io/audioList/audio/audio12.mp3");
        const itoi = new Audio("https://o289.github.io/audioList/audio/audio13.mp3");
        const sekikawa = new Audio("https://o289.github.io/audioList/audio/audio14.mp3");
        const ohmura = new Audio("https://o289.github.io/audioList/audio/audio15.mp3");
        const Chance3 = new Audio("https://o289.github.io/audioList/audio/audio16.mp3");
        const ishii = new Audio("https://o289.github.io/audioList/audio/audio17.mp3");
        const Chance4 = new Audio("https://o289.github.io/audioList/audio/audio18.mp3");
        const takahashi = new Audio("https://o289.github.io/audioList/audio/audio19.mp3");
        const shibahara = new Audio("https://o289.github.io/audioList/audio/audio20.mp3");
        const iguchi = new Audio("https://o289.github.io/audioList/audio/audio21.mp3");
        const mayumi = new Audio("https://o289.github.io/audioList/audio/audio22.mp3");
        const Chance5 = new Audio("https://o289.github.io/audioList/audio/audio23.mp3");
        const ogasawara = new Audio("https://o289.github.io/audioList/audio/audio24.mp3");
        const hiyama = new Audio("https://o289.github.io/audioList/audio/audio25.mp3");
        // BGM
        const spectre = new Audio("https://o289.github.io/audioList/audio/AlanWalker-spectre.mp3");
        const MetaKnightStrikesBack = new Audio("https://o289.github.io/audioList/audio/MetaKnightStrikesBack.mp3");
        const terminus = new Audio("https://o289.github.io/audioList/audio/terminus.mp3")
        const SuperBellHill = new Audio("https://o289.github.io/audioList/audio/SuperBellHill.mp3");
        const ChampionRoad = new Audio("https://o289.github.io/audioList/audio/ChampionRoad.mp3")
    // ボタンデータの取得
        // 応援歌
        const nishioka_button = document.getElementById('nishioka_button');
        const nakamura_button = document.getElementById('nakamura_button');
        const yamakawa_button = document.getElementById('yamakawa_button');
        const ogata_button = document.getElementById('ogata_button');
        const maeda_button = document.getElementById('maeda_button');
        const imaoka_button = document.getElementById('imaoka_button');
        const rose_button = document.getElementById('rose_button');
        const haru_button = document.getElementById('haru_button');
        const Chance_button = document.getElementById('Chance_button');
        const arai_button = document.getElementById('arai_button');
        const Chance2_button = document.getElementById('Chance2_button');
        const fukudome_button = document.getElementById('fukudome_button');
        const itoi_button = document.getElementById('itoi_button');
        const sekikawa_button = document.getElementById('sekikawa_button');
        const ohmura_button = document.getElementById('ohmura_button');
        const Chance3_button = document.getElementById('Chance3_button');
        const ishii_button = document.getElementById('ishii_button');
        const Chance4_button = document.getElementById('Chance4_button');
        const takahashi_button = document.getElementById('takahashi_button');
        const shibahara_button = document.getElementById('shibahara_button');
        const iguchi_button = document.getElementById('iguchi_button');
        const mayumi_button = document.getElementById('mayumi_button');
        const Chance5_button = document.getElementById('Chance5_button');
        const ogasawara_button = document.getElementById('ogasawara_button');
        const hiyama_button = document.getElementById('hiyama_button');
        // BGM
        const spectreButton = document.getElementById('spectreButton');
        const MetaKnightStrikesBackButton = document.getElementById('MetaKnightStrikesBackButton');
        const terminusButton = document.getElementById('terminusButton');
        const SuperBellHillButton = document.getElementById('SuperBellHillButton');
        const ChampionRoadButton = document.getElementById('ChampionRoadButton');
    // 例外
    const stop = document.getElementById('stop');
    // 音楽の選定をする処理
    function pause(){
        // 西岡剛
        nishioka.pause();
        nishioka.currentTime = 0;
        // 中村紀洋
        nakamura.pause();
        nakamura.currentTime = 0;
        // 山川穂高
        yamakawa.pause();
        yamakawa.currentTime = 0;
        // 緒方孝市
        ogata.pause();
        ogata.currentTime = 0;
        // 前田智徳
        maeda.pause();
        maeda.currentTime = 0;
        // 今岡誠
        imaoka.pause();
        imaoka.currentTime = 0;
        // ロバート・ローズ
        rose.pause();
        rose.currentTime = 0;
        // 波瑠敏夫
        haru.pause();
        haru.currentTime = 0;
        // 狙い撃ち
        Chance.pause();
        Chance.currentTime = 0;
        // 新井貴浩
        arai.pause();
        arai.currentTime = 0;
        // チャンス襲来
        Chance2.pause();
        Chance2.currentTime = 0;
        // 福留孝介
        fukudome.pause();
        fukudome.currentTime = 0;
        // 糸井嘉男
        itoi.pause();
        itoi.currentTime = 0;
        // 関川浩一
        sekikawa.pause();
        sekikawa.currentTime = 0;
        // 大村直之
        ohmura.pause();
        ohmura.currentTime = 0;
        // チャンステーマ1（ロッテ）
        Chance3.pause()
        Chance3.currentTime = 0;
        // 石井琢朗
        ishii.pause();
        ishii.currentTime = 0;
        // チャンステーマ4（西武）
        Chance4.pause();
        Chance4.currentTime = 0;
        // 高橋由伸
        takahashi.pause();
        takahashi.currentTime = 0;
        // 柴原洋
        shibahara.pause();
        shibahara.currentTime = 0;
        // 井口忠仁
        iguchi.pause();
        iguchi.currentTime = 0;
        // 真弓明信
        mayumi.pause();
        mayumi.currentTime = 0;
        // 藤本チャンステーマ
        Chance5.pause();
        Chance5.currentTime = 0;
        // 小笠原道大
        ogasawara.pause();
        ogasawara.currentTime = 0;
        // 桧山進次郎
        hiyama.pause();
        hiyama.currentTime = 0; 
        // spectre
        spectre.pause();
        spectre.currentTime = 0;
        // メタナイトの逆襲
        MetaKnightStrikesBack.pause();
        MetaKnightStrikesBack.currentTime = 0;
        // 終点
        terminus.pause();
        terminus.currentTime = 0;
        // スーパーベルの丘
        SuperBellHill.pause();
        SuperBellHill.currentTime = 0;
        // チャンピオンシップロード
        ChampionRoad.pause();
        ChampionRoad.currentTime = 0;
};
    // 音声を再生するイベント
        // 応援歌
        nishioka_button.addEventListener('click', () => {
        pause();
        nishioka.play();
        nishioka.loop = true;
        });
        nakamura_button.addEventListener('click', () => {
        pause()
        nakamura.play();
        nakamura.loop = true;

        });
        yamakawa_button.addEventListener('click', () => {
        pause()
        yamakawa.play();
        yamakawa.loop = true;
        });
        ogata_button.addEventListener('click', () => {
        pause()
        ogata.play();
        ogata.loop = true;
        });
        maeda_button.addEventListener('click', () => {
        pause()
        maeda.play();
        maeda.loop = true;
        });
        imaoka_button.addEventListener('click', () =>{
        pause()
        imaoka.play();
        imaoka.loop = true;
        });
        rose_button.addEventListener('click', () => {
        pause()
        rose.play();
        rose.loop = true;
        });
        haru_button.addEventListener('click', () => {
        pause()
        haru.play();
        haru.loop = true;
        });
        Chance_button.addEventListener('click', () => {
        pause();
        Chance.play();
        Chance.loop = true;
        });
        arai_button.addEventListener('click', () => {
        pause()
        arai.play();
        arai.loop = true;
        });
        Chance2_button.addEventListener('click', () => {
        pause()
        Chance2.play();
        Chance2.loop = true;
        });
        fukudome_button.addEventListener('click', () => {
        pause()
        fukudome.play();
        fukudome.loop = true;
        });
        itoi_button.addEventListener('click', () => {
        pause()
        itoi.play();
        itoi.loop = true;
        });
        sekikawa_button.addEventListener('click', () => {
        pause()
        sekikawa.play();
        sekikawa.loop = true;
        });
        ohmura_button.addEventListener('click', () => {
        pause()
        ohmura.play();
        ohmura.loop = true;
        });
        Chance3_button.addEventListener('click', () => {
        pause()
        Chance3.play();
        Chance3.loop = true;
        });
        ishii_button.addEventListener('click', () => {
        pause()
        ishii.play();
        ishii.loop = true;
        });
        Chance4_button.addEventListener('click', () => {
        pause()
        Chance4.play();
        Chance4.loop = true;
        });
        takahashi_button.addEventListener('click', () => {
        pause()
        takahashi.play();
        takahashi.loop = true;
        })
        shibahara_button.addEventListener('click', () => {
        pause()
        shibahara.play();
        shibahara.loop = true;
        });
        iguchi_button.addEventListener('click', () => {
        pause()
        iguchi.play();
        iguchi.loop = true;
        });
        mayumi_button.addEventListener('click', () => {
        pause()
        mayumi.play();
        mayumi.loop = true;
        });
        Chance5_button.addEventListener('click', () => {
        pause()
        Chance5.play();
        Chance5.loop = true;
        });
        ogasawara_button.addEventListener('click', () =>{
        pause()
        ogasawara.play();
        ogasawara.loop = true;
        });
        hiyama_button.addEventListener('click', () => {
        pause()
        hiyama.play();
        hiyama.loop = true;
        });
        // BGM
        spectreButton.addEventListener('click', () => {
            pause()
            spectre.play();
            spectre.loop = true;
        });
        MetaKnightStrikesBackButton.addEventListener('click', () => {
            pause()
            MetaKnightStrikesBack.play();
            MetaKnightStrikesBack.loop = true;
        });
        terminusButton.addEventListener('click', () => {
            pause()
            terminus.play();
            terminus.loop = true;
        });
        SuperBellHillButton.addEventListener('click', () => {
            pause()
            SuperBellHill.play();
            SuperBellHill.loop = true
        });
        ChampionRoadButton.addEventListener('click', () => {
            pause()
            ChampionRoad.play();
            ChampionRoad.loop = true;
        });
    // 音楽を止めるボタン
    stop.addEventListener('click', () => {
        pause();
    });
});
