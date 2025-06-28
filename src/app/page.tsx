// src\app\page.tsx
"use server";
import React from 'react'
import ClientComponent from './components/ClientComponent/ClientComponent';


export default async function Page() {




   

  return (
   <div className="min-h-screen bg-green-300">
      <ClientComponent/>
    
    </div>
  )
}

