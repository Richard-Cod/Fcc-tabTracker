module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
      title: DataTypes.STRING,
      artist: DataTypes.STRING,
      genre: DataTypes.STRING,
      album: DataTypes.STRING,
      albumImageUrl: DataTypes.STRING,
      youtubeId: DataTypes.STRING,
      lyrics: DataTypes.TEXT,
      tab: DataTypes.TEXT
    })
  
    Song.associate = function (models) {
    }
  
    return Song
  }



  /*

  "artist": "Matt Pokora",
  "title": "Juste un instant",
  "genre": "R&B",
  "album": "À la poursuite du bonheur",
  "albumImageUrl": "https://sebastientuofficiel.files.wordpress.com/2012/08/m-pokora-part-bientot-en-tournee_1420256e577aa24b0c0f40bc21a7d38df64aca0a.jpg?w=584",
  "youtubeId": "IJ-uPxVYsbA",
  "lyrics": "Meme avec tout l'or du monde , Y'a des choses qui ne s'achetent pas, oh non",
  "tab": "inconnu"



  "artist": "Jena Lee",
  "title": "Us Boy",
  "genre": "POP",
  "album": "Ma référence",
  "albumImageUrl": "https://images.genius.com/817a64ee4bb450dbb241c8ea4f929230.500x500x1.jpg",
  "youtubeId": "NHpyJ3aOUEU",
  "lyrics": "Mets toi en situation: bal du lycée
        Le quarterback m'emmènerait danser et la reine nous ferait ch
        Un décor à la Desperate Housewives s'il te plait ",
  "tab": "inconnuJena"



  */