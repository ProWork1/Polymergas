import React from 'react'
import './ourproduct.scss'
import OurProductAbout from './ourProductAbout'

const Ourproduct = () => {
    return (
        <div id={"Ourproduct"}>
            <section className="container py-3 py-md-5">
                <div className="title">
                    <h1>Bizning mahsulotlar</h1>
                    <p>Bizdagi mavjud mahsulotlarni o'zingizga ma'qul narxlarda harid qiling</p>
                </div>
                <div className="row pt-5">
                    <div class="col-md-6 col-12 mb-3 mb-md-0">
                        <div class="card card-product">
                            <div class="card-body">
                                <img src="./images/ourproduct/1.png" class="img-fluid" alt=""/>
                                <h4 class="mt-5 py-3 font-weight-bold text-capitalize">Polietilen I-0760</h4>
                                <p class="text-muted m-0">Umumiy maqsadlar uchun </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="row h-100">
                            <div class="col-md-6 mb-3">
                                <div class="card card-product card-product-sm">
                                    <div class="card-body">
                                            <img src="./images/ourproduct/2.png" class="img-fluid" alt=""/>
                                            <h4 class="m-0 py-3 font-weight-bold text-capitalize">Polipropilen J-150</h4>
                                            <p class="text-muted m-0"> Umumiy xo'jalik maqsadlar uchun </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card card-product card-product-sm">
                                    <div class="card-body">
                                        <img src="./images/ourproduct/2.png" class="img-fluid" alt=""/>
                                        <h4 class="m-0 py-3 font-weight-bold text-capitalize">Polipropilen J-350</h4>
                                        <p class="text-muted m-0">
                                            Batareya qutilari, uy jihozlari uchun korpuslar
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card card-product card-product-sm">
                                    <div class="card-body">
                                        <img src="./images/ourproduct/2.png" class="img-fluid" alt=""/>
                                        <h4 class="m-0 py-3 font-weight-bold text-capitalize">Polipropilen FR-170H</h4>
                                        <p class="text-muted m-0"> Umumiy xo'jalik maqsadlar uchun </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3 mb-md-0">
                            <div class="card card-product card-product-sm">
                                <div class="card-body">
                                    <img src="./images/ourproduct/3.png" class="img-fluid" alt=""/>
                                    <h4 class="m-0 py-3 font-weight-bold text-capitalize">15813-020</h4>
                                    <p class="text-muted m-0"> Oziq-ovqat mahsulotlari uchun mo'ljallangan</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-12 text-right py-5">
                        <a href="#" class="btn btn-primary">Yana ko'rsatish</a>
                    </div>
                </div>
            </section>
            
            <OurProductAbout/>
        </div>
    )
}

export default Ourproduct
