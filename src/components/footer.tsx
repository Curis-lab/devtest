import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="mx-[16px] md:mx-[150px] justify-items-center mt-[27px] md:mt-[119px] mb-12">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full p-12 gap-[45px] md:gap-[36px]">
          <div className="flex flex-col md:flex-row gap-[63px]">
            <div>
              <p>Work with us</p>
              <p>info@alpinfluence.com</p>
            </div>
            <div>
              <p>Follow Us</p>
              <div className="flex">
                <p>twitter</p>
                <p>Dribble</p>
                <p>linkedin</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/assets/logo.svg" width={48} height={48} alt="logo" />
            <div>
              <p className="font-normal text-[16px] leading-[32px] tracking-[-0.32px] align-middle text-[hsla(206,31%,42%,1)]">
                Portfolio
              </p>
              <p className="font-normal text-[16px] leading-[32px] tracking-[-0.32px] align-middle text-[hsla(206,31%,42%,1)]">
                Dev Test Alpinfluence
              </p>
            </div>
          </div>
        </div>
        Dev Test Alpinfluence
      </footer>
  )
}

export default Footer
