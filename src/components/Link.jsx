import React from 'react'

const Link = ({ image, name }) => {
    return (
        <li className="p-2 group hover:rounded-md transition  font-medium hover:bg-logo/10 flex items-center gap-x-2 text-text-mainColor">
            <img src={image} alt={name} />
            <a className="w-full px-1 rounded-sm capitalize  group-hover:text-logo group-hover:rounded-sm group-hover:bg-fff transition" href="#">{name}</a>
        </li>
    )
}

export default Link