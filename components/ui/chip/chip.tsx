import React from "react";
import {
    TouchableOpacity,
    Text
  } from "react-native";
  
  type Variant = 'ghost' | 'solid';
  type Size = 'md';
  type Radius = 'sm' | 'md' | 'lg' | 'full';
  
  interface ChipProps {
    variant?: Variant,
    size?: Size,
    radius?: Radius,
    children?: React.ReactNode,
    styles?: string
  };
  
  const VARIANT_STYLES = {
    ghost: {
      container: 'bg-primary/20',
      text: 'text-primary'
    },
    solid: {
      container: 'border-[#DDDCDB] border-[1px]',
      text: 'text-white'
    }
  };
  
  const SIZE_STYLES = {
    md: {
      container: 'px-2 py-1',
      text: 'font-inter text-xs tracking-tight'
    }
  };
  
  const RADIUS_STYLES = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  
  const Chip = ({
    variant = 'solid',
    radius = 'full',
    size = 'md',
    children,
    styles = ''
  }: ChipProps) => {
    
    const variantStyles = VARIANT_STYLES[variant];
    const sizeStyles = SIZE_STYLES[size];
    const radiusStyles = RADIUS_STYLES[radius];
  
  return (
      <TouchableOpacity className={`flex items-center justify-center ${variantStyles.container} ${sizeStyles.container} ${radiusStyles} ${styles}`}>
        <Text className={`${variantStyles.text} ${sizeStyles.text}`}>
          { children !== undefined ? children : 'Chip' }
        </Text>
      </TouchableOpacity>
    );
  }
  
  export { Chip };