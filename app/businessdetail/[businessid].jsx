import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { db } from "@/configs/FirebaseConfig";
import { Colors } from "@/constants/Colors";
import { doc, getDoc } from "firebase/firestore";
import Intro from "@/components/BusinessDetail/Intro";
import ActionButton from "@/components/BusinessDetail/ActionButton";
import About from "@/components/BusinessDetail/About";
import Reviews from "./../../components/BusinessDetail/Reviews";

export default function BusinessDetail() {
	const { businessid } = useLocalSearchParams();
	const [business, setBusiness] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		GetBusinessDetailById();
	}, []);

	const GetBusinessDetailById = async () => {
		const docRef = doc(db, "BusinessList", businessid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
			setBusiness({ id: docSnap.id, ...docSnap.data()});
			setLoading(false);
		} else {
			console.log("No such document!");
		}
		setLoading(false);
	};

	const renderItem = ({ item }) => {
		return (
			<View>
				<Intro business={item} />
				<ActionButton business={item} />
				<About business={item} />
				<Reviews business={item} />
			</View>
		);
	};

	return loading ? (
		<ActivityIndicator
			style={{ marginTop: "70%" }}
			size="large"
			color={Colors.PRIMARY}
		/>
	) : (
		<FlatList
			data={[business]}
			renderItem={renderItem}
			keyExtractor={(item, index) => item.id || index.toString()}
		/>
	);
}
