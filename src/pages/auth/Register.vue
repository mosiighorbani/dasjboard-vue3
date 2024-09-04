<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-md-4 m-auto">
            <div id="login-page" >
                <p class="mosiweb">MosiWeb</p>
                <div class="card">
                    <!-- <div class="card-header"></div> -->
                    <div class="card-body">
                        <p class="title d-flex justify-content-center align-items-center">
                            <i class="fa fa-pencil-square-o"></i>
                            <span class="mx-2">ثبت نام</span>
                        </p>
                        <form @submit.prevent="register">
                            <div>
                                <div class="input-group mt-3">
                                <span class="input-group-text"><i class="fa fa-user fa-lg"></i></span>
                                <input type="text" v-model="formData.name" class="form-control" placeholder="نام ونام خانوادگی" autocomplete="false">
                            </div>
                            <div class="form-text text-danger text-center">{{ formDataError.name }}</div>
                            </div>
                            <div>
                                <div class="input-group mt-3">
                                <span class="input-group-text"><i class="fa fa-phone fa-rotate-180 fa-lg"></i></span>
                                <input type="text" v-model="formData.phone" class="form-control" placeholder="شماره همراه" autocomplete="false">
                            </div>
                            <div class="form-text text-danger text-center">{{ formDataError.phone }}</div>
                            <div class="form-text text-danger text-center">{{ formDataError.phone_len }}</div>
                            </div>
                            <div>
                                <div class="input-group mt-3">
                                <span class="input-group-text"><i class="fa fa-key fa-rotate-90 fa-lg"></i></span>
                                <input type="password" v-model="formData.password" class="form-control" placeholder="گذرواژه" autocomplete="false">
                            </div>
                            <div class="form-text text-danger text-center">{{ formDataError.password }}</div>
                            <div class="form-text text-danger text-center">{{ formDataError.password_len }}</div>
                            </div>
                            <div>
                                <div class="input-group mt-3">
                                <span class="input-group-text"><i class="fa fa-key fa-rotate-90 fa-lg"></i></span>
                                <input type="password" v-model="formData.confirm_password" class="form-control" placeholder="تکرار گذرواژه" autocomplete="false">
                            </div>
                            <div class="form-text text-danger text-center">{{ formDataError.confirm_password }}</div>
                            </div>
                            <div class="d-grid gap-2 my-2">
                                <button type="submit" class="btn btn-color1">ثبت نام</button>
                            </div>
                        </form>
                        <p class="text-center my-2">
                            <a href="#" class="text-muted">قبلا ثبت نام کرده ام </a>
                        </p>
                        <!-- <hr> -->
                    </div>
                    <div class="card-footer d-flex flex-column mx-auto">
                        <button class="btn btn-sm btn-outline-danger d-flex justify-content-between align-items-center">
                            <span>Sign Up With Google</span>
                            <span><i class="fa fa-google fa-lg ms-1"></i></span>
                        </button>
                        <button class="btn btn-sm btn-outline-dark  my-1 d-flex justify-content-between align-items-center">
                            <span>Sign Up With GitHub</span>
                            <span><i class="fa fa-github fa-lg ms-1"></i></span>
                        </button>
                        <button class="btn btn-sm btn-outline-primary">
                            <span>Sign Up With FaceBook</span>
                            <span><i class="fa fa-facebook fa-lg ms-1"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import router from '@/router';
import Swal from 'sweetalert2';
import { ref } from 'vue';



const formData = ref({
    name: '',
    phone: '',
    password: '',
    confirm_password: '',
});
const formDataError = ref({
    name: '',
    phone: '',
    phone_len: '',
    password: '',
    password_len: '',
    confirm_password: '',
})

function check_form_errors(){
    if(formData.value.name.trim() == ""){
        formDataError.value.name = 'فیلد نام الزامی است '
    }
    if(formData.value.phone.trim() == ""){
        formDataError.value.phone = 'فیلد شماره همراه الزامی است'
    }
    if(formData.value.phone.length != 11){
        formDataError.value.phone_len = 'شماره همراه باید 11 کاراکتر باشد'
    }
    if(formData.value.password.trim() == ""){
        formDataError.value.password = 'گذرواژه خود را وارد نمایید'
    }
    if(formData.value.password.length < 8){
        formDataError.value.password_len = 'طول گذرواژه شما حداقل باید 8 کاراکتر باشد'
    }
    if(formData.value.confirm_password != formData.value.password){
        formDataError.value.confirm_password = 'تکرار گذرواژه با گذرواژه یکسان نیست'
    }
}

async function register() {
    check_form_errors();
    const data = {
        name: formData.value.name,
        phone: formData.value.phone,
        password: formData.value.password,
    };
    await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (response.status == 201){
            Swal.fire({
            position: "top-start",
            toast: "true",
            timerProgressBar: "true",
            icon: "success",
            title: "ثبت نام شما با موفقیت انجام شد",
            showConfirmButton: false,
            timer: 5000
            });
            router.push({name:'login'})
        }
    })
    .catch((error) => console.log(error));
    }

</script>

<style>

</style>