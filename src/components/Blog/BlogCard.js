import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ card }) => {
    return (
        <div className=''>

            <Link to={card?.url} target="_blank">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='w-36' src={card.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center justify-center text-xs">{card.name}</h2>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default BlogCard