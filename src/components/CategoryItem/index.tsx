import { View,Text,TouchableOpacity,Image,Dimensions } from "react-native";

const {width,height} = Dimensions.get("window");

export default function index(){
    return(
        <TouchableOpacity>
            <Image style={{width:width*0.18,height:width*0.18}} source={"https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg"}/>
            <Text>İndirimler</Text>
        </TouchableOpacity>
    )
}