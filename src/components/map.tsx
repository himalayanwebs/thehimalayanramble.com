'use client'

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function GoogleMapCard() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  const centerLocation = { lat: 31.1061074, lng: 77.1934208 }

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle>Commutes and Destinations Map</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[450px] w-full relative">
          <APIProvider apiKey={apiKey}>
            <Map
              style={{ width: '100%', height: '100%' }}
              defaultCenter={centerLocation}
              defaultZoom={15}
              mapId="DEMO_MAP_ID"
              gestureHandling={'greedy'}
              disableDefaultUI={false}
            >
              <AdvancedMarker position={centerLocation}>
                <Pin background={'#EA4335'} borderColor={'#C5221F'} glyphColor={'#FFF'} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </CardContent>
    </Card>
  )
}