function solve(arr){
    class Song {
        constructor(type, name, time){
            this.type = type
            this.name = name
            this.time = time
     }
    }
let songs  = []
let numberOfSongs = input.shift()
let typeSOng = input.pop()

for (let i = 0; i <numberOfSongs.length; i++) {
  let[type, name, time] = input[i].split('_')
  let song = new Song(type,name,time)
  songs.push(song)
  if(typeSOng === 'all'){
      songs.forEach((i) => console.log(i.name))
  }else{
      let filtered = songs.filtered((i) => i.type === typeSong)
      filtered.forEach((i) => console.log(i.name))
  }
    
    }
}


solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )