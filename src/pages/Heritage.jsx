import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markersData from '../data/heritage.json'
import Modal from '../shared/Modal'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/marker-icon-2x.png',
  iconUrl: '/assets/marker-icon.png',
  shadowUrl: '/assets/marker-shadow.png'
})

export default function Heritage(){
  const [selected, setSelected] = useState(null)
  const center = [22.0, 80.0]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Heritage Sites Map</h1>
      <div className="h-[60vh] rounded overflow-hidden shadow">
        <MapContainer center={center} zoom={5} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markersData.slice(0,200).map(site => (
            <Marker key={site.id} position={[site.lat, site.lng]} eventHandlers={{ click: ()=> setSelected(site) }}>
              <Popup>{site.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selected && <Modal onClose={()=>setSelected(null)}>
        <h2 className="text-xl font-bold">{selected.name}</h2>
        <p className="mt-2">{selected.desc}</p>
      </Modal>}
    </div>
  )
}
