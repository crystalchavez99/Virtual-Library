// import the Media class:
const Media = require('./Media.js')
// create your Music class:

class Music extends Media{
    constructor(title,year,genre, artist, length){
        super(title,year,genre)
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum (arr){
        let shortest = arr[0].length
        let result 
        for(const song of arr){
            if(song.length < shortest){
                shortest = song.length
                result = song
            }
        }
        return result
    }
}
// don't change below
// module.exports = Music;
module.exports = Music