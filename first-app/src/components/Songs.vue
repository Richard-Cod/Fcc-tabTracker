<template>

    <div>

        <div style="display:flex">
            <div style="border:solid;max-width: 50%; " v-for="song in songs" :key="song.id">
                <p>id : {{song.id}}  </p>

                <router-link  :to="{ name: 'ViewSong', params: { songId: song.id }}" >Voir ce sons</router-link>
                
                <button @click="navigateTo(song.id)">Voir ce sons</button>
                <p>titre : {{song.title}}</p>
                <p>artist : {{song.artist}}</p>
                <p>genre : {{song.genre}}</p>
                <p>Album : {{song.album}}</p>

                <p style="color:red">{{song.lyrics}}</p>

                <img style="max-height:200px" :src="song.albumImageUrl" alt="">
                <p></p>
            </div>
        </div>

        <div>
            <h1>Poster un son </h1>
            <label for="artist">artist</label>
            <input name="artist" id="artist" class="" type="text" v-model="song.artist">
            <br>

            <label for="title">title</label>
            <input name="title" id="title" class="" type="text" v-model="song.title">
            <br>

            <label for="genre">genre</label>
            <input name="genre" id="genre" class="" type="text" v-model="song.genre">
            <br>

            <label for="album">album</label>
            <input name="album" id="album" class="" type="text" v-model="song.album">
            <br>

            <label for="albumImageUrl">albumImageUrl</label>
            <input name="albumImageUrl" id="albumImageUrl" class="" type="text" v-model="song.albumImageUrl">
            <br>

            <label for="youtubeId">youtubeId</label>
            <input name="youtubeId" id="youtubeId" class="" type="text" v-model="song.youtubeId">
            <br>

            <label for="lyrics">lyrics</label>
            <input name="lyrics" id="lyrics" class="" type="text" v-model="song.lyrics">
            <br>

            <label for="tab">tab</label>
            <input name="tab" id="tab" class="" type="text" v-model="song.tab">
            <br>

            <button @click="createSong" type="submit">Creer un son </button>
            <h4 style="color:red" class="error" v-html="resultmsg"> </h4>
      
        </div>


    </div>
    
</template>



<script>
    import SongsServices from '../services/SongsServices';

export default {
    data(){
        return {
            songs : [],
            
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
        navigateTo(id){
            this.$router.push({
                name:"ViewSong", params: { songId: id }
            })
        },
        async createSong(){
            alert("Création d'un son")
            const result = await SongsServices.create(this.song);
            
            if(result.status== "201"){
                console.log("Succes");
                console.log(result);
                console.log(result.data.song);
                this.resultmsg="Succès !!!!";
                
            }else{
                this.resultmsg=result.data.error;
            }

        },
    },
     async mounted(){
        this.songs = (await  SongsServices.list()).data;
        console.log("Les sons ",this.songs);
    }
}
</script>

<style scoped>

</style>