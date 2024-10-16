import { View, Text, TouchableOpacity } from "react-native";

type Color = "primary" | "secondary" | "none";
type Size = "sm" | "md" | "lg" | "xl";
type Radius = "sm" | "md" | "lg" | "full";
type TextSize = "md" | "lg" | "xl";

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
  size?: Size;
  radius?: Radius;
  textSize?: TextSize;
  color?: Color;
}

const SIZE_STYLES = {
  sm: {
    outer: "w-4 h-4",
    inner: "w-4 h-4",
  },
  md: {
    outer: "w-5 h-5",
    inner: "w-5 h-5",
  },
  lg: {
    outer: "w-6 h-6",
    inner: "w-6 h-6",
  },
  xl: {
    outer: "w-7 h-7",
    inner: "w-7 h-7",
  },
};

const RADIUS_STYLES = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const TEXT_STYLES = {
  sm: "text-sm font-thin",
  md: "text-md font-thin",
  lg: "text-lg font-regular",
  xl: "text-xl font-regular",
};

const COLOR_STYLES = {
  primary: {
    container: "bg-[#1E1E1E] border-2 border-[#DDDCDB]",
    inner: "bg-[#DDDCDB]",
  },
  secondary: {
    container: "bg-secondary",
    inner: "text-[#FEFEFF]",
  },
  none: {
    container: "",
    inner: "",
  },
};

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  isChecked,
  onToggle,
  size = "md",
  radius = "md",
  textSize = "md",
  color = "primary",
}: CheckBoxProps) => {
  const sizeStyles = SIZE_STYLES[size];
  const radiusStyles = RADIUS_STYLES[radius];
    const textStyles = TEXT_STYLES[textSize];
    const colorStyles = COLOR_STYLES[color];

  return (
    <TouchableOpacity
      onPress={onToggle}
      className="flex flex-row items-center justify-center"
    >
      <View
        className={`${sizeStyles.outer} ${radiusStyles} ${colorStyles.container}`}
      >
        {isChecked && (
          <View
            className={`${sizeStyles.inner} ${radiusStyles} ${colorStyles.inner} `}
          />
        )}
      </View>
      <Text className={`${textStyles} text-[#DDDCDB] ml-2`}>{label}</Text>
    </TouchableOpacity>
  );
};

export { CheckBox };
