import React from 'react'
import './productList.css'
import Product from '../product/Product'
// import { products } from '../../data'
import project1 from '../../img/p1-1-1.png'
import project2 from '../../img/p2-2.png'
import project4 from '../../img/p4-14.png'
import project3 from '../../img/grace-leaves.png'
import project5 from '../../img/p5-1.png'
import project6 from '../../img/p7-1.png'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>My Projects</h1>
            <p className='pl-desc'>Please click on them to learn more.</p>
        </div>
        <div className="pl-list">
          <Product img={project1} link="/project1"/>
          <Product img={project4} link="/project4"/>
          <Product img={project6} link="/project6"/>
          <Product img={project2} link="/project2"/>
          <Product img={project3} link="/project3"/>
          <Product img={project5} link="/project5"/>
          {/* <Product img={project6} link="/project6"/> */}
        </div>
    </div>
  )
}

export default ProductList
