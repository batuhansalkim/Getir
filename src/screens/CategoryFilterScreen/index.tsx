import { View, Text } from 'react-native'
import React,{useState} from 'react'
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from '../../models';
const index = (props) => {
  const [category,setCategory] = useState<Category>(props.route.params.category)
  return (
    <View>
      <CategoryFiltering category={category}/>
    </View>
  )
}

export default index