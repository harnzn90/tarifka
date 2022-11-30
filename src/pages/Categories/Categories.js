import Config from 'react-native-config';
import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryCard from "../../components/CatCard/CatCard";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Categories.style";

const Categories = ({navigation}) => {


    const handleCategoriesSelect = (strCategory) => {
        navigation.navigate("Meals", {strCategory})
    }

    const {data} = useFetch(Config.CATEGORIES);

    const renderCategory = ({item}) => <CategoryCard 
    categories = {item} onSelect={() => handleCategoriesSelect(item.strCategory)}/>;
    
    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.idCategory}
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    );
};

export default Categories;