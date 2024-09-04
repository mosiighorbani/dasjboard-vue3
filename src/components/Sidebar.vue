<template>
<!-- <section id="sidebar" :class="open ? 'active' : 'inactive' "> -->
    <section id="sidebar" :class="open ? 'active' : 'inactive' ">
            <div id="sidebar-box">
                <div id="sidebar-box-title">
                    <h5>MosiWeb</h5>
                </div>
                <div id="sidebar-box-content">
                    <ul>
                        <li>
                            <a href="">
                                <span class="fa fa-dashboard"></span>
                                <span class="title">داشبورد</span>
                            </a>
                        </li>
                        <li @click="toggle()">
                            <a href="#">
                                <span class="fa fa-users"></span>
                                <span class="title">کاربران</span>
                            </a>
                            <div v-show="dropdown">
                                <ul>
                                    <li>
                                        <a href="">
                                            <span class="fa fa-circle"></span>
                                            <span class="title">افزودن کاربر</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span class="fa fa-circle"></span>
                                            <span class="title">لیست کاربران</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span class="fa fa-circle"></span>
                                            <span class="title">کاربران غیرفعال</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span class="fa fa-circle"></span>
                                            <span class="title">کاربران آنلاین</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">
                                <span class="fa fa-calendar"></span>
                                <span class="title">تقویم</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';

let open = ref(true);
let dropdown = ref(false);
function toggle(){
    console.log(dropdown);
    dropdown.value = !dropdown.value;
}
</script>