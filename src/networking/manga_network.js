const global = require('../global/global');

async function getManga(){

    apiGetManga = global.website+"/getallmanga";
    try{
        let reponesive = await fetch(apiGetManga);
        let reponesiveJson = await reponesive.json();

        return reponesiveJson.data;
    }catch(err){
        console.log(err);
    }
}
async function getChapter(manga){
    apiGetChapter = global.website+"/getchapter?manga="+manga;

    try{
        let reponesive = await fetch(apiGetChapter);
        let reponesiveJson = await reponesive.json();

        return reponesiveJson.data;
    }catch(err){
        console.log(err);
    }
}
async function getChapterImage(idChapter){
    apiGetChapterImage = global.website+"/getchapterimage?idChapter="+idChapter;

    try{
        let reponesive = await fetch(apiGetChapterImage);
        let reponesiveJson = await reponesive.json(); 
        return reponesiveJson.data;
    }catch(err){
        console.log(err);
    }
}

async function SearchMangas(KeyManga){

    apiSearchKeyManga = global.website+"/searchManga?keySearch="+KeyManga;

    try{
        let reponesive = await fetch(apiSearchKeyManga);
        let reponesiveJson = await reponesive.json();
        return reponesiveJson.data;
    }catch(err){
        console.log(err);
    }
}
export {getManga,getChapter,getChapterImage,SearchMangas};