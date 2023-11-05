<template>

    <div class="container row justify-center " id="my-greeting">

        <div class="col-md-8  col-xs-12">
            <h1 class="q-mt-none q-mb-md text-white">{{ $t("myGreeting.title") }}</h1>
            <b class="text-white text-weight-light text-body1">{{ $t("myGreeting.p") }}</b>
        </div>

    </div>

</template>

<style scoped>
    .container{
        background: #000;
        padding: 70px 50px 300px 50px;
    }

    h1{
        line-height: normal;
        font-size: 2em;
    }

    b{
        font-size: 1.1em;
    }

</style>
