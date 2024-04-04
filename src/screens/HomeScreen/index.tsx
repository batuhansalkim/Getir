import { ScrollView, View } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCoursel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";

export default function index(){
  return(
    <ScrollView stickyHeaderIndices={[0]} style={{}}>
      <HeaderMain/>
      <BannerCoursel/>
      <CategoryItem/>
    </ScrollView>
  )
}