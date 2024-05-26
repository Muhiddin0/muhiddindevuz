"use client";

import React from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ProjectImage } from "@/app/lib/types";
import Image from "next/image";

type Props = {
  images: ProjectImage[];
  title: string;
};

export default function Gallery({ images, title }: Props) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="container mx-auto pt-6 md:pt-10 pb-16">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images?.map(({ id, image }, index) => (
          <a key={id} href={image} className="block mb-16">
            <img
              width={1800}
              height={800}
              className="shadow-xl mx-auto w-[80%]"
              alt={`${index + 1}-${title} | Muhiddindev.uz`}
              src={image}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
