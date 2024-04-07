import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const Map = () => {
    const mapStyles = {
        height: '23rem',
        width: '100%',
    }

    const defaultCenter = {
        lat: 4.68383,
        lng: -74.04656,
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyD_aOS4qhFeR9SDocbelkfCkZ7EClvnsDk">
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}
