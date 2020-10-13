//import ThumbnailGenerator from 'video-thumbnail-generator';
import ffmpeg from 'fluent-ffmpeg';
import multer from 'multer';
import { copySync } from 'fs-extra';

export function generatorImages(urlvideo: string): string[] {
    // 1. solicitar una url del video guardado
    // 2. Crear una lista de 3 images
    // 3. Guardar las 3 imagen en Uploads/images/453f3fv4vvy444nb4jk/las tres imagenes,
    // 5. Retornar lista la url de las imagenes.

    const listImages: string[] = [];

    const list = urlvideo.split('\\');
    const idsucio = list[1];
    const id = idsucio.slice(0,-4);

    ffmpeg(urlvideo)
    .on('filenames', function(filenames) {
        console.log('Will generate ' + filenames.join(', '))
    })
    .on('end', function() {
        console.log('Screenshots taken');
    })
    .screenshots({
        // Will take screens at 20%, 40%, 60% and 80% of the video
        count: 3,
        filename: id,
        folder: 'uploads/thumbail/',
        size: '615x350'
    });
    return listImages;
}

