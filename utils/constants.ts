import localFont from "next/font/local";


export const soleil = localFont({
    src: [
      {
        path: '../public/fonts/SoleilLight.otf',
        weight: "400"
      },
      {
        path: '../public/fonts/SoleilBook.otf',
        weight: "normal"
      },
      {
        path: '../public/fonts/SoleilBold.otf',
        weight: "700"
      }
    ],
    variable: '--font-soleil'
  })