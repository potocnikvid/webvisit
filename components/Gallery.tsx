/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ImageComponent from "./Image";
import type { GetStaticProps, NextPage } from "next";
import getResults from "../utils/cachedImages";
import { ImageProps } from "../utils/types";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import cloudinary from "../utils/cloudinary";

const Gallery = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <div className="gap-4 m-4 columns-1 md:columns-2 lg:columns-3 2xl:columns-4">
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          alt={""}
          src="/images/Screenshot 2022-11-26 at 23.19.57.png"
          width={1000}
          height={1000}
        />
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.48.03.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.48.03.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.48.03.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.56.01.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.56.01.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.56.01.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.56.01.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.25.31.png"
          alt={""}
          width={1000}
          height={1000}
        />{" "}
        <ImageComponent
          className={"mt-0 m-2 mb-4 align-middle w-full"}
          src="/images/Screenshot 2022-11-26 at 23.51.22.png"
          alt={""}
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};
export default Gallery;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const results = await getResults();
//   let reducedResults: ImageProps[] = [];
//   let i = 0;
//   for (let result of results.resources) {
//     reducedResults.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     });
//     i++;
//   }

//   const currentPhoto = reducedResults.find(
//     (img) => img.id === Number(context?.params?.photoId)
//   );
//   if (currentPhoto)
//     currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);
//   return {
//     props: {
//       currentPhoto: currentPhoto,
//     },
//   };
// };

// export async function getStaticPaths() {
//   const results = await cloudinary.v2.search
//     .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by("public_id", "desc")
//     .max_results(400)
//     .execute();

//   let fullPaths: { params: { photoId: String } }[] = [];
//   for (let i = 0; i < results.resources.length; i++) {
//     fullPaths.push({ params: { photoId: i.toString() } });
//   }

//   return {
//     paths: fullPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   const results = await cloudinary.v2.search
//     .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by('public_id', 'desc')
//     .max_results(400)
//     .execute()
//   let reducedResults: ImageProps[] = []
//   console.log(results)
//   let i = 0
//   for (let result of results.resources) {
//     reducedResults.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     })
//     i++
//   }

//   const blurImagePromises = results.resources.map((image: ImageProps) => {
//     return getBase64ImageUrl(image)
//   })
//   const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

//   for (let i = 0; i < reducedResults.length; i++) {
//     reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
//   }

//   return {
//     props: {
//       images: reducedResults,
//     },
//   }
// }