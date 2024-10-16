import * as Haptics from "expo-haptics";
import { TouchableOpacity, View, Text } from "react-native";

type Color = "primary" | "secondary" | "none";
type Size = "sm" | "md" | "lg" | "xl";
type Radius = "sm" | "md" | "lg" | "full";
type Variant = "primary" | "ghost";
type TextSize = "md" | "lg" | "xl";

interface ButtonProps {
  isIconOnly?: boolean;
  children?: React.ReactNode;
  color?: Color;
  size?: Size;
  radius?: Radius;
  styles?: string;
  variant?: Variant;
  onClick?: () => void;
  textSize?: TextSize;
}

const BASE_STYLES = {
  container: "flex items-center justify-center",
};

const TEXT_STYLES = {
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
};

const COLOR_STYLES = {
  primary: {
    container: "bg-primary",
    text: "font-roboto tracking-tighter font-medium text-[#FEFEFF]",
  },
  secondary: {
    container: "bg-primary border-[1px] border-secondary",
    text: "font-roboto tracking-tighter font-medium text-[#FEFEFF]",
  },
  none: {
    container: "bg-[#FEFEFF]",
    text: "font-roboto tracking-tighter font-medium text-[#212121]",
  },
};

const SIZE_STYLES = {
  sm: "px-3 py-1",
  md: "px-4 py-2",
  lg: "px-5 py-3",
  xl: "px-6 py-4",
};

const RADIUS_STYLES = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const VARIANT_STYLES = {
  primary: "bg-primary text-[#FEFEFF]",
  ghost: "bg-[#FEFEFF] text-[#FEFEFF]",
};

const Button = ({
  isIconOnly = false,
  children,
  color = "primary",
  size = "md",
  radius = "md",
  styles = "",
  variant = "primary",
  onClick,
  textSize = "md",
}: ButtonProps) => {
  const colorStyles = COLOR_STYLES[color];
  const sizeStyles = SIZE_STYLES[size];
  const radiusStyles = RADIUS_STYLES[radius];
  const variantStyles = VARIANT_STYLES[variant];
  const textStyles = TEXT_STYLES[textSize];

  const handleClick = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    if (onClick) onClick();
  };

  switch (isIconOnly) {
    case true:
      return (
        <TouchableOpacity
          onPress={handleClick}
          className={`${colorStyles.container} ${variantStyles} ${radiusStyles} ${styles}`}
        >
          <View>{children}</View>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          onPress={handleClick}
          className={`${BASE_STYLES.container} ${colorStyles.container} ${sizeStyles} ${radiusStyles} ${styles}`}
        >
          <Text className={`${colorStyles.text} ${textStyles}`}>{children}</Text>
        </TouchableOpacity>
      );
  }
};

export { Button };