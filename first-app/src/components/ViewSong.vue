<template>

    <div>

        <div style="display:flex">
            <div style="border:solid;max-width: 50%; ">
                <p>id : {{song.id}}</p>
                <p>titre : {{song.title}}</p>
                <p>artist : {{song.artist}}</p>
                <p>genre : {{song.genre}}</p>
                <p>Album : {{song.album}}</p>

                <p style="color:red">{{song.lyrics}}</p>

                <img style="max-height:200px" :src="song.albumImageUrl" alt="">
                <p></p>
            </div>

            <div>
        <youtube-media player-width="800" player-height="400" :video-id="song.youtubeId"></youtube-media>

            </div>
        </div>

     

    </div>
    
</template>



<script>
    import SongsServices from '../services/SongsServices';

export default {
    data(){
        return {
            resultmsg:"futur msg",
            song : {
                "artist": "Je",
                "title": "U",
                "genre": "PO",
                "album": "Ma ",
                "albumImageUrl": "jpg",
                "youtubeId": "IJ",
                "lyrics": "lait ",
                "tab": "inJena",
            }
        }
    },
    methods:{
        async createSong(){
        },
    },
     async mounted(){
         const songId = this.$store.state.route.params.songId
        this.song = (await  SongsServices.getOne(songId)).data;
        console.log("Le sons ",this.song);
    },
    components:{
      
    }
}
</script>

<style scoped>

</style>