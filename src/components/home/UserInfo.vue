<template>
<div>
<section id="user-info" class="my-2">
    <div class="row g-2">
        <div id="info" class="col-12 col-md-4">
            <div class="card">
                <div class="card-header">
                    <img src="../../assets/images/avatar/1.png" class="img-fluid mx-auto d-block" alt="">
                    <form>
                        <input class="form-control mt-2" type="file" accept="image/*" name="avatar" id="avatar">
                    </form>
                </div>
                <div class="card-body">
                    <ul>
                        <li>
                            <span class="fa fa-user"></span>
                            <span>مصطفی قربانی</span>
                        </li>
                        <li>
                            <span class="fa fa-sitemap"></span>
                            <span>کاربر عادی</span>
                        </li>
                        <li>
                            <span class="fa fa-hashtag"></span>
                            <span>mosii_ghorbani</span>
                            <!-- <span class="text-muted">نام کاربری ثبت نشده است</span> -->
                        </li>
                        <li>
                            <span class="fa fa-envelope"></span>
                            <span>mosi.ghorbani@gmail.com</span>
                        </li>
                        <li>
                            <span class="fa fa-graduation-cap"></span>
                            <span>مهندسی کامپیوتر</span>
                        </li>
                        <li>
                            <span class="fa fa-map-marker"></span>
                            <span>استان اصفهان - آران و بیدگل - خیابان محمدهلال</span>
                        </li>
                    </ul>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-outline-color1"
                        data-bs-toggle="modal" data-bs-target="#editUserModal">
                        <span class="fa fa-edit"></span>
                        <span>ویرایش</span>
                    </button>
                </div>
            </div>
        </div>
        <div id="logs" class="col-12 col-md-8">
            <div class="row g-2">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <p>آخرین فعالیت ها</p>
                        </div>
                        <div class="card-body">
                            <ul class="row">
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-sign-in"></span>
                                        <span>احراز هویت سیستمی</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-newspaper-o"></span>
                                        <span>هوش مصنوعی فراتر از حد انتظار ..</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-shopping-basket"></span>
                                        <span>خرید از دیجی کالا</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn btn-sm btn-outline-color1">مشاهده بیشتر</button>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <p>آخرین  کامنت ها</p>
                        </div>
                        <div class="card-body">
                            <ul class="row">
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-newspaper-o"></span>
                                        <span>احراز هویت سیستمی</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-newspaper-o"></span>
                                        <span>هوش مصنوعی فراتر از حد انتظار ..</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-newspaper-o"></span>
                                        <span>خرید از دیجی کالا</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn btn-sm btn-outline-color1">مشاهده بیشتر</button>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <p>آخرین فعالیت ها</p>
                        </div>
                        <div class="card-body">
                            <ul class="row">
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-sign-in"></span>
                                        <span>احراز هویت سیستمی</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-newspaper-o"></span>
                                        <span>هوش مصنوعی فراتر از حد انتظار ..</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-12 justify-content-md-between">
                                    <div class="title">
                                        <span class="fa fa-shopping-basket"></span>
                                        <span>خرید از دیجی کالا</span>
                                    </div>
                                    <div class="datetime">
                                        <div>
                                            <span class="fa fa-calendar"></span>
                                            <span>1403/05/22</span>
                                        </div>
                                        <div class="ms-2">
                                            <span class="fa fa-clock-o"></span>
                                            <span>13:52:00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer text-center">
                            <button class="btn btn-sm btn-outline-color1">مشاهده بیشتر</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- modal -->
<div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                <span>ویرایش کاربر : </span>
                                                <span>مصطفی قربانی</span>
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="user-name" class="form-label">
                                                        <i class="fa fa-user"></i>
                                                        <span>نام و نام خانوادگی</span>
                                                    </label>
                                                    <input type="text" class="form-control" id="user-name" placeholder="مصطفی قربانی" aria-describedby="">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="user-name" class="form-label">
                                                        <i class="fa fa-hashtag"></i>
                                                        <span> نام کاربری </span>
                                                    </label>
                                                    <input type="text" class="form-control" id="user-name" placeholder="mosii_ghorbani" aria-describedby="">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="user-email" class="form-label">
                                                        <i class="fa fa-envelope"></i>
                                                        <span>ایمیل</span>
                                                    </label>
                                                    <input type="email" class="form-control" id="user-email" placeholder="mosi.ghorbani@gmail.com" aria-describedby="">
                                                    <!-- <div id="emailHelp" class="form-text">We'll never share your emailwith anyone else.</div> -->
                                                </div>
                                                <div class="mb-3">
                                                    <label for="user-address" class="form-label"> 
                                                        <i class="fa fa-map"></i>
                                                        <span>آدرس</span>
                                                    </label>
                                                    <input type="text" class="form-control" id="user-address-province" placeholder="اصفهان" aria-describedby="">
                                                    <input type="text" class="form-control my-2" id="user-address-city" placeholder="آران و بیدگل" aria-describedby="">
                                                    <input type="text" class="form-control" id="user-address-street" placeholder="محمدهلال" aria-describedby="">
                                                    <!-- <div id="emailHelp" class="form-text">We'll never share your emailwith anyone else.</div> -->
                                                </div>
                                                <div class="mb-3">
                                                    <label for="user-education" class="form-label">
                                                        <i class="fa fa-graduation-cap"></i>
                                                        <span>تحصیلات</span>
                                                    </label>
                                                    <input type="text" class="form-control" id="user-education-filed" placeholder="مهندسی کامپیوتر" aria-describedby="">
                                                    <input type="text" class="form-control my-2" id="user-education-subfield" placeholder="نرم افزار" aria-describedby="">
                                                    <!-- <div id="emailHelp" class="form-text">We'll never share your emailwith anyone else.</div> -->
                                                </div>
                                                <div class="text-center align-items-center">
                                                    <button type="submit" class="btn btn-outline-color1">ویرایش اطلاعات</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
</div>
<!-- end of modal -->
</div>
</template>

<script setup>

</script>

<style>

</style>