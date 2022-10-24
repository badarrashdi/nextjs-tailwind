
  import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function FourOhFour({
  locale,
}) {
 
  return (
    <>
      <Head>
        <title>Accelerance tech</title>
      </Head>
      <div className="px-4 py-6 md:py-10 " style={{background: 'url(https://a.storyblok.com/f/171382/1280x853/2fd12c5a18/pexels-gratisography-4091.jpeg)'}}>
        <div className="max-w-screen-lg mx-auto min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-[54px] md:leading-[60px] text-black">This Page Is Not Available Or Does Not Exist</h1>
            <p className="text-black">Error 404</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg py-10 mx-auto px-4">
          <h2 className="text-primary text-lg text-center">Here Are Some Useful Links Instead</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="mb-4">
              <Link href={`/`}><a className="btn-primary block">Home</a></Link>
            </div>
           
          </div>
        </div>
    </>
  );
}




