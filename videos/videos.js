const { spawn } = require('child_process');
var parms = process.argv[2];
var videos = [];

console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);

if (process.argv[2]) {
    var nomeVideo = process.argv[3];
    var nomeFinal = process.argv[4];
    videos.push(nomeVideo);
    videos.reverse();
    chamaVideo();
} else {
    console.log('É necessario criar uma pasta no nivel superior')
}


function videoR(video, qualidade) {
    var p = new Promise((resolve, reject) => {
        var ffmpeg = spawn('../teste/bin/ffmpeg', [
            '-i',
            `${parms}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '800k',
            '-maxrate',
            '800k',
            '-bufsize',
            '1600k',
            '-vf',
            `scale=-2:${qualidade}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parms}/Videos/${nomeFinal}-${qualidade}px.mp4`
        ]);

        ffmpeg.stderr.on('data', (data) => {
           // console.log(data);
        });
        ffmpeg.on('close', (code) => {
            resolve();
        });

    });
    return p
}

async function chamaVideo() {
    var video = videos.pop();
    if (video) {
        try {
            await videoR(video, 1080);
            await videoR(video, 720);
            await videoR(video, 480);

            console.log(`Videos renderizados: ${video}`);
            chamaVideo();
        } catch (erro) {
            console.log(erro);
        }
    }
}

// para rodar node videos ./src Forma <<<-----  nome do arquivo na pasta src