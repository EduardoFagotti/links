import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/logo.png")} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category
        name={categories[0].name}
        icon={categories[0].icon}
        isSelected
      />
      <Category name="Site" icon="14mp" isSelected={false} />
      <Category name="video" icon="123" isSelected={false} />
    </View>
  );
}
