microwaves.map(m => (
    <Marker
       key={m.id}
       position={[m.lat, m.lng]}
       eventHandlers={{
          click: () => onSelect(m)
       }}
    />
 ))