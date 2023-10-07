import React from 'react'
import './Blog.css'

import ADZI from '../../assets/All Logos/All Logos/Adzi.png'
import AVERLIN from '../../assets/All Logos/All Logos/Averlin.png'
import GRAMEEN from '../../assets/All Logos/All Logos/Grameen.png'
import HARVEST from '../../assets/All Logos/All Logos/Harvest-Agro.png'
import HARVEST_CROP from '../../assets/All Logos/All Logos/Harvest-Crop.png'
import IDT from '../../assets/All Logos/All Logos/IDT.png'
import LABEL_EDGE from '../../assets/All Logos/All Logos/Label-Edge.png'
import LABEL_MAKERS from '../../assets/All Logos/All Logos/Label-Maker.png'
import SMARTDOTS from '../../assets/All Logos/All Logos/Smart.png'
import UNIFARMA from '../../assets/All Logos/All Logos/Unifarma.png'
import { Link } from 'react-router-dom'

const Blog = () => {


    return (
        <div className='blog-bg'>
            <div className="flex flex-col justify-center max-w-4xl m-auto">
                <div className="my-10">
                    <h1 className='uppercase text-white text-center text-4xl '>
                        Click The Logo Button Below
                        <br />
                        <span className='font-extrabold mt-2'> To visit our affiliates </span>
                    </h1>
                    <div className="red-line"></div>
                </div>

                <div className="sm:grid sm:grid-cols-1 gap-5 md:flex md:flex-col justify-center items-center my-10 m-auto">

                    <div className="grid md:grid-cols-4 gap-5">
                        <div className=''>
                            <Link to='https://www.adzitrims.com/' target="_blank">
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={ADZI} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">ADZI TRIMS LTD</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={AVERLIN} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">AVERLIN TRADERS</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={GRAMEEN} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">GRAMEEN AGRO LTD</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link to='https://www.facebook.com/harvestagrovet' target="_blank" >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={HARVEST} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">HARVEST AGROVET LTD</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-5">
                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={HARVEST_CROP} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">HARVEST CROP CARE</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={IDT} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">IDT GLOBAL LABELS BD. LTD</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link to='https://labeledge.com.bd/' target="_blank" >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={LABEL_EDGE} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">LABEL EDGE LTD</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={LABEL_MAKERS} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">LABEL MAKERS LTD.</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>



                    <div className="grid md:grid-cols-4 gap-5">
                        <div className=""></div>
                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={UNIFARMA} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">UNIFARMA BANGLADESH</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=''>
                            <Link  >
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-46' src={SMARTDOTS} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center justify-center text-xs">SMARTDOTS LTD.</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=""></div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default Blog