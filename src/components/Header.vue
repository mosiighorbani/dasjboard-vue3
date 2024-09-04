<template>
<section id="header">
            <div id="header-box" class="d-flex justify-content-between align-items-center">
                <div id="toggleSidebarBtn">
                    <span @click="toggleSidebar()" class="fa fa-navicon"></span>
                </div>

                <div class="d-flex justify-content-center align-items-center">
                    <div id="searchbox">
                        <form class="form-inline d-flex ">
                            <input class="form-control form-control-sm" type="search" placeholder="جستجو"
                                aria-label="Search">
                            <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
                        </form>
                    </div>
                    <div class="dropdown mx-3" id="last-messages">
                        <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            <span class="fa fa-bell-o"></span>
                            <!-- <span class="badge badge-warning navbar-badge">15</span> -->
                        </a>
                        <div class="dropdown-menu">
                            <div class="card">
                                <div class="card-header text-center">
                                    <span>15</span>
                                    <span> پیام جدید</span>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <span>
                                                    <i class="fa fa-envelope"></i>
                                                    <i class="ms-1">نامه های دریافتی</i>
                                                </span>
                                                <span>3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <span>
                                                    <i class="fa fa-book"></i>
                                                    <i class="ms-1">مقالات جدید</i>
                                                </span>
                                                <span>10</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <span>
                                                    <i class="fa fa-bomb"></i>
                                                    <i class="ms-1">یادآوری ها</i>
                                                </span>
                                                <span>2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#"> مشاهده کامل</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="dropdown" id="current-user">
                        <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/images/avatar/1.png" alt="">
                        </a>
                        <div class="dropdown-menu">
                            <div class="card">
                                <div class="card-body">
                                    <ul>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <span class="fa fa-gear"></span>
                                                <span>تنظیمات</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <span class="fa fa-clone"></span>
                                                <span>اطلاعات</span>
                                            </a>
                                        </li>
                                        <!-- <li>
                                            <hr width="80%" class="text-center mx-auto">
                                        </li> -->
                                        <li class="mt-2">
                                            <a class="dropdown-item" href="#" @click.prevent="logout">
                                                <span class="fa fa-sign-out"></span>
                                                <span class="text tex-danger">خروج</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</section>
</template>

<script setup>
import router from '@/router';
import Swal from 'sweetalert2';
import { ref } from "vue";


let open = ref(false);
function toggleSidebar(){
    console.log('clicked !!');
    open.value = !open.value;
}


async function logout(){
    let token = JSON.parse(localStorage.getItem('access_token'));
    console.log("logout is clicked", token, typeof(token));
    await fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`}
    })
    .then((response) => {
        if(response.status == 200){
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            Swal.fire({
            position: "top-start",
            toast: "true",
            timerProgressBar: "true",
            icon: "warning",
            title: "شما از سایت خارج شدید",
            showConfirmButton: false,
            timer: 5000
            });
            router.push({name:'login'})
        } else{
            console.log(response)
        }
    })
    .catch((error) => console.log(error));
}

</script>