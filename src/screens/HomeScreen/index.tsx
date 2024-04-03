import { ScrollView, View } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCoursel from "../../components/BannerCarousel";
export default function index(){
  return(
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"red"}}>
      <HeaderMain/>
      <BannerCoursel/>
    </ScrollView>
  )
}