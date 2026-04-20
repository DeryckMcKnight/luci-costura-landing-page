import { useInView } from '@/hooks/useInView';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale';
  delay?: number;
}

/**
 * Componente wrapper para seções com animações suaves ao scroll
 * Usa Intersection Observer para detectar quando a seção entra na viewport
 * 
 * Design Philosophy: Minimalismo Artesanal
 * - Animações suaves e elegantes
 * - Timing cúbico para movimento natural
 * - Sem excessos, apenas o necessário
 */
export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const animationClass = `section-${animation}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${isInView ? animationClass : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
