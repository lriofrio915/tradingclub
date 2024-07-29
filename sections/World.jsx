'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from 'next/image';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.06 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Traders en el Mundo" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Conoce a otros traders alrededor del mundo y forma parte de una comunidad
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <Image
      src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/map.png"
      alt="map"
      width={1920}
      height={1080}
      className="w-full h-full object-cover"
    />

    {/* Here We are displaying chararcters on the map */}
    <div className="absolute top-[32%] left-[62%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-02.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
    <div className="absolute top-[40%] left-[32%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-01.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
    <div className="absolute sm:top-10 bottom-40 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-03.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
    <div className="hidden lg:block absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-04.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>

    <div className="hidden lg:block absolute bottom-[32%] left-[0%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-05.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
    <div className="absolute top-0 right-[22%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
      <Image
        src="https://luis-liberty.s3.us-east-2.amazonaws.com/assets/people-06.png"
        alt="people"
        width={70}
        height={70}
        className="w-full h-full"
      />
    </div>
        {/* Character on Map ends */}

      </motion.div>
    </motion.div>
  </section>
);

export default World;
