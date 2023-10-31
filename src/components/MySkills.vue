<template>

<div class="container margin">
    <div class="row justify-center border-radius">
    <div class="row justify-center position-relative width-90 height">
        <div class="row width-90 justify-center positin-absolute ">
        <CardSkills :tecnologias="tecnologiasBack" titulo="Frontend" :srcImage="frontLogo" id="card-skill-izq" :class=" `${cardSkillsClases}`"></CardSkills>
        <CardSkills :tecnologias="tecnologiasFront" titulo="Backend" :srcImage="backLogo" id="card-skill-der" :class=" `${cardSkillsClases}`"></CardSkills>
    </div>
    </div>
</div> 

</div>
</template>

<script setup>

    import CardSkills from './CardSkills.vue';
    
    import backLogo from "../../public/img/back-logo.png";
    import frontLogo from "../../public/img/front-logo.png";

    const cardSkillsClases = "col-md-6 col-xs-12 border-none"

    const tecnologiasBack = ["express", "git", "mongo", "adad"]
    const tecnologiasFront = ["html", "css", "vue", "adad"]

</script>

<style>

    .margin{
        margin-bottom: 60px;
    }

  
    .width-90{
        width: 90%;
       
    }
    .height{
        height: 300px;
    }
  
    .border-none{
        border-radius: 0;
    }

    #card-skill-izq{
        border-top-left-radius: 10px;
        border-right: 0;
    }
    #card-skill-der{
        border-top-right-radius: 10px;
    }
    .positin-absolute{
        position: absolute;
        top: -180px;
    }
    .position-relative{

        position: relative;
    }

    @media (max-width: 1023px) {
        #card-skill-izq{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-right: thin solid #E6ECF8;
            border-bottom: 0;
        }
        #card-skill-der{
            border-top-right-radius: 0;
        }
        .height{
            height: 670px;
        }

        .margin{
            margin-bottom: 90px;
        }

    
    }

    @media (max-width: 582px) {
        .height{
            height: 600px;
        }
    }

    @media (max-width: 372px) {
        .margin{
        margin-bottom: 160px;
        }

        .height{
            height: 620px;
        }
    }

    @media (max-width: 181px) {
        .margin{
        margin-bottom: 160px;
        }

        .height{
            height: 720px;
        }
    }
</style>