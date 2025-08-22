import React from 'react';


export default function Category({finalCategory,setCatname}) {

    let cat =finalCategory.map((v,i)=>{
        return(
            <li className='cat' onClick={()=>setCatname(v)} key={i} >
                {v}
            </li>
        )
    })

    return(
        <div>
            <h3 className='catt'>Product Category</h3>

            <ul>
                {cat}
            </ul>
        </div>
    )
}