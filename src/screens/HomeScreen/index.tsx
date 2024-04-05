import { ScrollView, View } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCoursel from "../../components/BannerCarousel";
import MainCategories from "../../components/MainCategories";

export default function index(){
  return(
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#f5f5f5"}}>
      <HeaderMain/>
      <BannerCoursel/>
      <MainCategories/>
    </ScrollView>
  )
}