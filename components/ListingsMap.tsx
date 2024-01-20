import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { ListingGeo } from "@/interfaces/listingGeo";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

interface ListingsMapProps {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 51.478583,
  longitude: 10,
  latitudeDelta: 9,
  longitudeDelta: 9,
};
const ListingsMap = ({ listings }: ListingsMapProps) => {
  const router = useRouter();
  const onMarkerSelected = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  };
  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;
    return (
      <Marker
        key={`cluster-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: "#000",
              fontFamily: "mon-sb",
              textAlign: "center",
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        renderCluster={renderCluster}
      >
        {listings.features.map((item: ListingGeo) => {
          return (
            <Marker
              onPress={() => onMarkerSelected(item)}
              key={item.properties.id}
              coordinate={{
                latitude: item.geometry.coordinates[1],
                longitude: item.geometry.coordinates[0],
              }}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>$ {item.properties.price}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: 6,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
});

export default ListingsMap;
