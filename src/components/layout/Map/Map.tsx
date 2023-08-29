import React, { useState } from 'react'
import styled from 'styled-components'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayView,
} from '@react-google-maps/api'

// import mapStyles from 'styles/mapStyles'

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 3rem 0 -3rem;

  ${({ theme }) => theme.media.lg.min} {
    height: 500px;
    margin: 5rem 0 -5rem;
  }
`

// const Tooltip = styled.div`
//   transform: translate(22px, -115%);
//   font-size: 14px;
//   font-family: ${({ theme }) => theme.fonts.secondary};
//   text-transform: uppercase;
//   background: ${({ theme }) => theme.colors.white};
//   padding: 5px 10px;
// `

// const getMapIcon = (icon: string) => {
//   switch (icon) {
//     case 'investment':
//       return '/map-pin.svg'
//     case 'schools':
//       return '/school-placeholder.svg'
//     case 'libraries':
//       return '/school-placeholder.svg'
//     case 'roads':
//       return '/school-placeholder.svg'
//     case 'parks':
//       return '/school-placeholder.svg'
//     case 'shops':
//       return '/school-placeholder.svg'
//     case 'canoes':
//       return '/school-placeholder.svg'
//     default:
//       return '/school-placeholder.svg'
//   }
// }

export type Pin = {
  lat: number
  lng: number
  type: string
  icon: string
  visible?: boolean
  link?: string
  title?: string
}

type Props = {
  pins: Pin[]
}

const Map: React.FC<Props> = ({ pins }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAdJbmbj8BUZxkpo0V0O7ZE01pNWBxtvRg',
  })

  const [infoState, setInfoState] = useState({
    position: { lat: 0, lng: 0 },
    title: '',
    visible: false,
  })

  const [mapref, setMapRef] = useState<google.maps.Map | null>(null)
  const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral | null>(
    null
  )

  //   const { t } = useTranslation('common')
  //   const { push } = useRouter()

  const handleOnLoad = (map: google.maps.Map) => {
    setMapRef(map)
  }
  const onDragEnd = () => {
    if (mapref) {
      const newCenter = {
        lat: mapref?.getCenter()?.lat()!,
        lng: mapref?.getCenter()?.lng()!,
      }

      setMapCenter(newCenter)
    }
  }

  const renderMap = () => {
    return (
      <MapWrapper className="map">
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          center={{
            lat: mapCenter?.lat || 50.07042638705701,
            lng: mapCenter?.lng || 21.772631225794076,
          }}
          zoom={15.25}
          // options={{ styles: mapStyles }}
          onLoad={handleOnLoad}
          onDragEnd={onDragEnd}
          onZoomChanged={onDragEnd}
        >
          <Marker
            position={{ lat: 50.07042638705701, lng: 21.772631225794076 }}
          />
          {/* {pins?.map(({ lat, lng, visible, icon, link, title }, index) => (
            <Marker
              key={`pin-${index}`}
              onMouseOver={(e) =>
                setInfoState({
                  //@ts-ignore
                  position: e.latLng,
                  title: title || '',
                  visible: true,
                })
              }
              onMouseOut={() =>
                setInfoState({
                  position: { lat: 0, lng: 0 },
                  title: '',
                  visible: false,
                })
              }
              onClick={() => {
                if (link) {
                  push(link)
                }
              }}
              position={{ lat, lng }}
              visible={typeof visible !== 'undefined' ? visible : true}
              icon={{
                url: getMapIcon(icon),
                scaledSize: new google.maps.Size(44, 44),
              }}
            />
          ))}
          <OverlayView
            position={infoState.position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <Tooltip>{infoState.title}</Tooltip>
          </OverlayView> */}
        </GoogleMap>
      </MapWrapper>
    )
  }

  if (loadError) {
    return <div>Błąd wczytywania mapy</div>
  }

  return isLoaded ? renderMap() : <div>Wczytywanie mapy...</div>
}

export default Map
