import React from 'react'

export default function GalleryGrid(props) {
    return (
        <section className="relative py-20 px-8 lg:px-20">
            <h2 className="text-black dark:text-white text-title1">{props.galleryTitle}</h2>
            <div className="max-w-screen-xl -mx-8 lg:mx-auto grid grid-cols-3 gap-2 lg:grid-cols-5">
                {props.children}
            </div>
        </section>
    )
}