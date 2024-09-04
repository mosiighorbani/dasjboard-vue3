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
                                <i class="fa fa-sign-in"></i>
                                <span class="mx-2">ورود</span>
                            </p>
                            <form @submit.prevent="login">
                                <div class="input-group mb-3">
                                    <span class="input-group-text"><i class="fa fa-phone fa-rotate-180 fa-lg"></i></span>
                                    <input type="text" v-model="formData.phone" class="form-control" placeholder="شماره همراه">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text"><i class="fa fa-key fa-rotate-90 fa-lg"></i></span>
                                    <input type="password" v-model="formData.password" class="form-control" placeholder="گذرواژه">
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-color1"> ورود</button>
                                </div>
                            </form>
                            <p class="text-center my-2"><a href="#" class="text-muted">ثبت نام</a></p>
                            <p class="text-center my-2"><a href="#" class="text-muted">گذرواژه خود را گم کرده ام</a></p>
                            <!-- <hr> -->
                        </div>
                        <div class="card-footer d-flex flex-column mx-auto">
                            <button class="btn btn-sm btn-outline-danger d-flex justify-content-between align-items-center">
                                <span>Sign In With Google</span>
                                <span><i class="fa fa-google fa-lg ms-1"></i></span>
                            </button>
                            <button class="btn btn-sm btn-outline-dark  my-1 d-flex justify-content-between align-items-center">
                                <span>Sign In With GitHub</span>
                                <span><i class="fa fa-github fa-lg ms-1"></i></span>
                            </button>
                            <button class="btn btn-sm btn-outline-primary">
                                <span>Sign In With FaceBook</span>
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
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';




const store = useAuthStore();

const formData = ref({
    phone: '',
    password: '',
});
const formDataError = ref({
    phone: '',
    phone_len: '',
    password: '',
    password_len: '',
});

function check_form_errors(){
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
}

function login() {
    check_form_errors();
    const data = {
        phone: formData.value.phone,
        password: formData.value.password,
    };
    store.login(data)
}
</script>

<style>

</style>