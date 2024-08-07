'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <h4 className="text-center font-bold md:text-[64px] text-[44px] text-white">
        Únete al Trading Club
      </h4>
      <div className="flex items-center justify-between flex-wrap gap-5 md:text-[30px] text-[24px] text-white">
        <p className="">Coaching en Trading de Futuros y CFDs</p>
        <Link
          href="https://www.boomslag.com/courses/view/tradingclub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Inscribirme
          </span>
        </Link>
        <p className="">Coaching de Inversiones en Blockchain</p>
        <Link
          href="https://www.boomslag.com/courses/view/inversiones-blockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Inscribirme
          </span>
        </Link>
        <p className="">Curso De Cero a Trader y de Trader a Gestor</p>
        <Link
          href="https://www.boomslag.com/courses/view/curso-completo-futuros-cfds"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Inscribirme
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 w-full" />

        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 w-full">
          <div className="flex gap-4">
            <Image
              src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/fulllogo_transparent_nobuffer.png"
              alt="search"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>
          <p className="font-normal text-[14px] text-white opacity-50 text-center md:text-left">
            Copyright © All Rights Reserved 2024.
          </p>

          <div className="flex gap-4 z-10">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Image
                  src={social.url}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
