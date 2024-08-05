'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-2`}>
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/icons/icononly_transparent_nobuffer.png"
        alt="Liberty Founder"
        width={24}
        height={24}
        className="object-contain"
      />

      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        LIBERTY
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;
