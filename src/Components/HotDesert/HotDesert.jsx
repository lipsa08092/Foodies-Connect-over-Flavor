import React from 'react'
import plate1 from "../../assets/food-plate-foodies.png"
import plate2 from "../../assets/food2-plate-foodies.png"
import plate3 from "../../assets/food-plate3-foodies.png"
import {motion} from "framer-motion";
import { Slideup } from '../Hero/Hero';

const HotDesertData =[
    {
        id:1,
        name: "Hot Dessert",
        image: plate1,
        price: "$5.00",
        delay: 0.4, 
    },
    {
        id:2,
        name: "Spicy Salad",
        image: plate2,
        price: "$5.50",
        delay: 0.8, 
    },
    {
        id:3,
        name: "Hot plater",
        image: plate3,
        price: "$7.00",
        delay: 1.2, 
    },
]

function HotDesert() {
  return (
    <section>
        <div className="container py-12">
            <h3 className='text-2xl font-bold text-darkGreen py-8'>HOT DESSERT</h3>
        </div>
    </section>
  )
}

export default HotDesert
