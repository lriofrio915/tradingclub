'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.06 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Liberty Trading"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold"> Liberty </span> es una comunidad de traders que se reúne cada domingo para hacer cosas de traders, realizamos backtesting semanal, revisamos gráficas, solventamos dudas de los miembros del club, analizamos los <span className="font-extrabold">proyectos cripto</span> de nuestro portafolio. <span className="font-extrabold">En el Club de Trading</span> siempre tienes disponible las clases actualizadas de la estrategia de day trading y la estrategia con <span className="font-extrabold">acciones y criptoactivos.</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
