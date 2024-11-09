/* eslint-disable @next/next/no-img-element */
"use client";
import Breadcrumb  from "../../components/ux/breadcrumb"
import {Header, Footer} from '../../components/ux/nav'
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
        <Footer/>
      </body>
    </html>
  )
}