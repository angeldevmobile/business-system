import { View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { FlatList } from 'react-native-gesture-handler';

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList(prev => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 20,
        paddingLeft: 20,
        paddingTop:20, 
        marginBottom: 5
      }}>
        #Special for you
      </Text>
      <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: 20
        }}
        renderItem={({ item, index }) => (
          <Image 
            source={{ uri: item.imageUrl }}
            style={{
              width: 300,
              height: 160,
              borderRadius: 15,
              marginRight: 15, 
            }}
            onError={(e) => console.log(`Error loading image: ${e.nativeEvent.error}`)}
          />
        )}
      />
    </View>
  );
}