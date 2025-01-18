import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Circle,
  useMapEvent,
} from 'react-leaflet'
import { useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'

interface CustomerLocation {
  id: number
  name: string
  lat: number
  lon: number
}

const customers: CustomerLocation[] = [
  { id: 1, name: 'Customer 1', lat: 51.505, lon: -0.09 },
  { id: 2, name: 'Customer 2', lat: 51.515, lon: -0.1 },
  {
    id: 3,
    name: 'Customer 3',
    lat: 51.507262016427354,
    lon: -0.13441341891284211,
  },
]

const ResizeMap = () => {
  const map = useMap()
  useEffect(() => {
    map.invalidateSize()
  }, [map])
  return null
}

const Map = () => {
  const position: LatLngExpression = [51.50699490391611, -0.11595879422682699]
  const [clickedLocation, setClickedLocation] =
    useState<LatLngExpression | null>(null)
  const [popupContent, setPopupContent] = useState<string | null>(null)
  const polygonCoords: LatLngExpression[] = [
    [51.50122489145557, -0.09],
    [51.497965580060146, -0.08154414576180048],
    [51.500156290451265, -0.07871212246618686],
    [51.505392195964, -0.08798327651080352],
  ]
  
  const MapClickEventHandler = () => {
    useMapEvent('click', (e) => {
      const { lat, lng } = e.latlng
      setClickedLocation([lat, lng])
      setPopupContent(
        `You clicked the map at latitude: ${lat}, longitude: ${lng}`
      )
    })
    return null
  }

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ width: '100%', height: '400px' }}
    >
      <ResizeMap />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {customers.map((customer) => (
        <Marker key={customer.id} position={[customer.lat, customer.lon]}>
          <Popup>{customer.name}</Popup>
        </Marker>
      ))}
      <MapClickEventHandler />
      <Polygon
        positions={polygonCoords}
        color="blue"
        fillColor="blue"
        fillOpacity={0.2}
      />
      <Circle
        center={[51.51345858710875, -0.08935801901629682]}
        radius={100}
        color="red"
        fillColor="red"
        fillOpacity={0.2}
      />
      {clickedLocation && popupContent && (
        <Popup position={clickedLocation}>{popupContent}</Popup>
      )}
    </MapContainer>
  )
}

export default Map
