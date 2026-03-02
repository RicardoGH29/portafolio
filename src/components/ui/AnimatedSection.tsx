'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}: AnimatedSectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const directionMap = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    const { x, y } = directionMap[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x, y }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
