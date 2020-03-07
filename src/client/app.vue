<template>
    <v-app>
        <div id="app">
            <div v-show="int" id="nav">
                <ul>
                    <li id="logo">
                        <router-link to="/"><img src="./assets/toysc.png" alt="Glimpsy"></router-link>
                    </li>
                    <li>
                        <router-link v-show='int' to="/"><i class="far fa-newspaper"></i>
                            <span>Welcome</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div id="content">
                <div v-show="int" id="navbar">
                    <ul id="list1">
                        <li id="user">
                            <p>{{user | capital}}</p>
                        </li>
                        <li id="logout">
                            <v-btn color="primary">Cerrar Sesion</v-btn>
                        </li>
                    </ul>
                    <ul id="list2">
                        <li>
                            <i class="fas fa-bars"></i>
                        </li>
                        <li>
                            <span>SafeGarden</span>
                        </li>
                    </ul>
                </div>
                <div id="rest">
                    <router-view/>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    import {mapState, mapGetter, mapActions} from 'vuex';

    export default {
        name:'app',
        components:{
            // vuetify
        },
        data(){
            return{
                int: true
            }
        },
        methods:{
            logout(){
                // this.$store.dispatch('logout');
            }
        },
        computed:{
            ...mapState([
            ]),
            user(){
                return this.$store.state.user;
            },
        },
        filters:{
            capital (value){
                if(!value){return ''}
                value= value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.2s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    #app{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;

        #nav{
            display: flex;
            justify-content: center;
            width: 12vw;
            height: 92vh;
            align-self: flex-end;
            background-color: #1976D2;
            color: #ffffff;
            box-shadow: 1px 0px 8px -1px rgba(0,0,0,0.75);
            ul{
                padding: 0;
                li{
                    i{
                        margin-right: .5vw;
                        font-size: 18px;
                    }
                    list-style: none;
                    font-size: 16px;
                    margin-bottom: 2vh;
                    a.router-link-exact-active {
                        color: #8be27e;
                        font-weight: 600;
                    }
                    a{
                        color: white;
                        text-decoration: none;
                    }
                }
                #logo{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    img{
                        width: 10.5vw;
                        margin-bottom: 3vh;
                        margin-top: 5vh;
                    }
                }
            }
        }
        #content{
            width: 88vw;
            display: flex;
            flex-direction: column;
            #navbar{
                height: 8vh;
                display: flex;
                width: 100vw;
                justify-content: space-between;
                align-items: center;
                align-self: flex-end;
                flex-direction: row-reverse;
                box-shadow: 0px 0px 4px 0px rgba(105,105,105,1);
                ul{
                    display: flex;
                    align-items: center;
                    margin-bottom: 0;
                    li{
                        list-style: none;
                    }
                }
                #list1{
                    
                    padding: 0;
                    li{
                        margin-right: 1vw;
                    }
                    #user{
                        p{
                            height: 1vh;
                        }
                    }
                }
                #list2{
                    padding: 0;
                    li{
                        margin-left: 1vw;
                        i{
                            font-size: 30px;
                            color: #ff0000;
                            cursor: pointer;
                        }
                        span{
                            color: #1976D2;
                            font-size: 22px;
                        }
                    }
                }
            }
            #rest{
                height: 92vh;
            }
        }
        @media screen and (max-width: 700px)/* and (min-width: 350px)*/{
            #nav{
                width: 38px;
                ul{
                    width: 100%;
                    li{
                        display: flex;
                        justify-content: center;
                        span{
                            display: none;
                        }
                    }
                    #logo{
                    img{
                        width: 50px;
                    }
                }
                }
            }
        }
    }

</style>