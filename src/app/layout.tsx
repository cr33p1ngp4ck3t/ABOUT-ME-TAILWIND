/* eslint-disable @next/next/no-img-element */
"use client";
import Breadcrumb  from "../../components/ux/breadcrumb"
import {Header, Footer} from '../../components/ux/nav'
import { Analytics } from "@vercel/analytics/react"
import './styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
          <div className="content">
            <Breadcrumb/>
            {children}
          </div>
          <Analytics />
        <Footer/>
      </body>
    </html>
  )
}