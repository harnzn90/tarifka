import Config from 'react-native-config';
import React from 'react';
import { Alert, FlatList, Linking, View } from 'react-native';
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import useFetch from '../../hooks/useFetch';

const Details = ({route}) => {
    const strMeal = route.params;

    const {data} = useFetch(Config.SEARCH_URL+"="+strMeal); 

    const goToYoutube = (url) => {
        try {
            Linking.openURL(url);
        }
        catch {
            Alert.alert("No video!");
        }
    }
    
    const renderDetail = ({item}) => <DetailsCard detail={item} openYoutube={()=> goToYoutube(item.strYoutube)}/>


    return(
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
            />
        </View>
    );
};

export default Details;