import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import router from '@/router'



const BASE_URL = "http://127.0.0.1:8000/api"

function updateLocalStorage(data){
  localStorage.setItem('access_token', JSON.stringify(data.access_token))
  localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token))
}

function register_swal(){
  Swal.fire({
    position: "top-start",
    toast: "true",
    timerProgressBar: "true",
    icon: "success",
    title: "ثبت نام شما با موفقیت انجام شد",
    showConfirmButton: false,
    timer: 5000
    });
}

function login_swal(){
  Swal.fire({
    position: "top-start",
    toast: "true",
    timerProgressBar: "true",
    icon: "success",
    title: " ورود شما با موفقیت انجام شد",
    showConfirmButton: false,
    timer: 5000
  });
};

function logout_swal(){
  Swal.fire({
    position: "top-start",
    toast: "true",
    timerProgressBar: "true",
    icon: "warning",
    title: "شما از سایت خارج شدید",
    showConfirmButton: false,
    timer: 5000
    });
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      current_user: localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : [],
      access_token: localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null,
      refresh_token: localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null,
      isAuthenticated: null,
    }
  },
    getters: {
      getToken(){
        return state.access_token
      },
      isAuthenticated(state) {
        return state.isAuthenticated
      },
      currentUser(state){
        return state.current_user
      }
    },
    actions: {
      // ................................. register ..............................
      async register(data){
        await fetch(`${BASE_URL}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      })
      .then((response) => {
          if (response.status == 201){
              register_swal()
              router.push({name:'login'})
          }
      })
      .catch((error) => console.log(error));
      },
      // ................................. login .................................
      async login(data){
        await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
          if(data.access_token){
              updateLocalStorage(data)
              // console.log(localStorage.getItem('access_token'))
              login_swal()
              router.push({name:'home'})
          } else{
              console.log(data)
          }
      })
      .catch((error) => console.log(error));
      },
      // ................................ logout ................................
      async logout(){
        // const token = this.access_token;
        let token = JSON.parse(localStorage.getItem('access_token'));
        // console.log(token)
        await fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            if(response.status == 200){
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              logout_swal()
              router.push({name:'login'})
            } else{
                console.log(response)
            }
        })
        .catch((error) => console.log(error));
          }

        }
    
})