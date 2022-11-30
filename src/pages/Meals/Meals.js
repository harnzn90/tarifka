import Config from 'react-native-config';
import React from 'react';
import { FlatList, View } from 'react-native';
import MealCard from "../../components/MealCard/MealCard";
import useFetch from '../../hooks/useFetch';
import styles from "./Meals.style";

const Meals = ({route, navigation}) => {
    const strCategory = route.params.strCategory;
    
    const {data} = useFetch(Config.FILTER_URL+"="+strCategory)

    const handleMealSelect = (strMeal) => {
        navigation.navigate("Details", strMeal)
    }

    const renderMeal = ({item}) => <MealCard meal={item} onSelect={()=>handleMealSelect(item.strMeal)}/>;



    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
                keyExtractor={(item, index) => item.idMeal}
            />
        </View>
    );
};

export default Meals;