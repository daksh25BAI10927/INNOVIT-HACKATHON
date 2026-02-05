import React, { useEffect } from 'react'
import { useStore } from '../store/useStore'

export default function DarkModeToggle(){
  const dark = useStore(state => state.dark)
  const setDark = useStore(state => state.setDark)
  useEffect(()=>{ useStore.getState().loadPrefs() }, [])
  return (
    <button
      aria-label="toggle dark"
      onClick={()=> setDark(!dark)}
      className="p-2 rounded border"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
